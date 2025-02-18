import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles/index.module.css";
import userProfileUtilsICONS from "./utils/constants";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import GlobalUtils from "@/lib/utils";
import DynamicForm from "@/components/form";
import { notifyError } from "@/components/Notification";
import { useAuth } from "@/services/context/auth";
import DetailsUtils from "@/components/details/utils";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("account");

    const { getCurrentUser, updateUserProfilePicture, updateUserPassword, updateUserDetails } = useAuth();

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const [passwords, setPasswords] = useState({
        current: "",
        new: "",
        confirm: "",
    });
    const [passwordValidations, setPasswordValidations] = useState({
        minLength: false,
        lowercase: false,
        numberSymbol: false,
        confirmPass: false,
    });

    const handlePasswordChange = (e) => {
        const { id, value } = e.target;
        setPasswords((prevPasswords) => ({
            ...prevPasswords,
            [id]: value,
        }));

        if (id === "new" || id === "confirm") {
            setPasswordValidations((prevValidations) => ({
                ...prevValidations,
                minLength: passwords.new.length >= 8,
                lowercase: /[a-z]/.test(passwords.new),
                numberSymbol: /[0-9\s\W]/.test(passwords.new),
                confirmPass: id === "confirm" ? value === passwords.new : passwords.confirm === value,
            }));
        }
    };
    const isValid = Object.values(passwordValidations).every(Boolean);

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const buttons = [] || GlobalUtils.getFormButtons();

    const formData = useMemo(() => {
        const formItems = [
            {
                type: "text",
                name: "name",
                label: "Name",
                required: true,
                disabled: true,
                grid: 2,
                defaultValue: getCurrentUser?.data?.name || "",
            },
            {
                type: "email",
                name: "email",
                label: "Email Address",
                required: true,
                disabled: true,
                grid: 2,
                defaultValue: getCurrentUser?.data?.email || "",
            },
            {
                type: "text",
                name: "employeeId",
                label: "Employee Id",
                required: true,
                disabled: true,
                grid: 2,
                defaultValue: getCurrentUser?.data?.employeeId || "",
            },
            {
                type: "text",
                name: "department",
                label: "Department",
                required: true,
                disabled: true,
                grid: 2,
                defaultValue: getCurrentUser?.data?.department || "",
            },
            {
                type: "text",
                name: "designation",
                label: "Designation",
                required: true,
                disabled: true,
                grid: 2,
                defaultValue: getCurrentUser?.data?.designation || "",
            },
            {
                type: "select",
                name: "roles",
                label: "Roles",
                required: true,
                disabled: true,
                grid: 1,
                multiple: true,
                options:
                    getCurrentUser.data?.roles?.map((role) => {
                        return { label: role.name, value: role._id };
                    }) || [],
                defaultValue:
                    getCurrentUser.data?.roles?.map((role) => {
                        return role._id;
                    }) || [],
            },
            {
                type: "select",
                name: "extraPermissions",
                label: "Permissions",
                required: true,
                disabled: true,
                grid: 1,
                multiple: true,
                options:
                    getCurrentUser.data?.permissions?.map((permission) => {
                        return { label: permission.name, value: permission._id };
                    }) || [],
                defaultValue:
                    getCurrentUser.data?.permissions?.map((permission) => {
                        return permission._id;
                    }) || [],
            },
            {
                type: "select",
                name: "extraPermissions",
                label: "Extra Permissions",
                required: true,
                disabled: true,
                grid: 1,
                multiple: true,
                options:
                    getCurrentUser.data?.extraPermissions?.map((extraPermission) => {
                        return { label: extraPermission.name, value: extraPermission._id };
                    }) || [],
                defaultValue:
                    getCurrentUser.data?.extraPermissions?.map((extraPermission) => {
                        return extraPermission._id;
                    }) || [],
            },
            {
                type: "select",
                name: "routes",
                label: "Routes",
                required: true,
                disabled: true,
                grid: 1,
                multiple: true,
                options:
                    getCurrentUser.data?.routes?.map((route) => {
                        return { label: `${DetailsUtils.formatText(route.label || "")}  [${route.path}]`, value: route._id };
                    }) || [],
                defaultValue:
                    getCurrentUser.data?.routes?.map((route) => {
                        return route._id;
                    }) || [],
            },
            {
                type: "select",
                name: "extraPermissionsRoutes",
                label: "Extra Permissions Routes",
                required: true,
                disabled: true,
                grid: 1,
                multiple: true,
                options:
                    getCurrentUser.data?.extraPermissionsRoutes?.map((extraPermissionsRoute) => {
                        return { label: `${DetailsUtils.formatText(extraPermissionsRoute.label || "")}  [${extraPermissionsRoute.path}]`, value: extraPermissionsRoute._id };
                    }) || [],
                defaultValue:
                    getCurrentUser.data?.extraPermissionsRoutes?.map((extraPermissionsRoute) => {
                        return extraPermissionsRoute._id;
                    }) || [],
            },
            // {
            //     type: "checkbox",
            //     name: "mailNotification",
            //     label: "Enable email notification",
            //     grid: 2,
            //     defaultValue: getCurrentUser?.data?.mailNotification == 0 ? false : true,
            // },
        ];
        return formItems;
    }, [getCurrentUser.data]);

    const handleSubmit = (formData) => {
        // modifyUserDetails({ mailNotification: formData.mailNotification });
        updateUserDetails.execute({ payload: { mailNotification: formData.mailNotification } });
        getCurrentUser.fetch({ params: {} });
    };
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const maxSize = 700 * 1024;

            if (selectedFile.size > maxSize) {
                notifyError("File size exceeds the 700KB limit. Please choose a smaller file.");
                event.target.value = null;
                return;
            }

            setFile(selectedFile);
            setPreviewUrl(URL.createObjectURL(selectedFile));
        }
    };

    const handleRemove = () => {
        setFile(null);
        setPreviewUrl("");
    };
    const handlePasswordSubmit = (event) => {
        event.preventDefault();
        updateUserPassword.execute({
            payload: {
                currentPassword: passwords.current,
                newPassword: passwords.new,
            },
            options: {
                showNotification: true,
            },
        });
        setPasswords({
            current: "",
            new: "",
            confirm: "",
        });
    };

    async function uploadProfilePicture(file) {
        const formData = new FormData();
        formData.append("picture", file);
        updateUserProfilePicture.execute({ payload: formData });
    }

    const handleFileUpload = async () => {
        await uploadProfilePicture(file);
        getCurrentUser.fetch({ params: {} });
    };

    const handleReset = () => {
        setPasswords({
            current: "",
            new: "",
            confirm: "",
        });
    };
    return (
        <>
            <ul className={styles.navBar}>
                <li className={activeTab === "account" ? styles.active : ""} onClick={() => handleTabChange("account")}>
                    <span className={styles.icon}>{userProfileUtilsICONS.USER}</span> Account Settings
                </li>
                <li className={activeTab === "security" ? styles.active : ""} onClick={() => handleTabChange("security")}>
                    <span className={styles.icon}>🔒</span> Change Password
                </li>
            </ul>
            <div className={styles.profilePage}>
                {activeTab === "account" && (
                    <div className={styles.profileContainer}>
                        <div className={styles.profilePhoto}>
                            {/* <img src={previewUrl || getCurrentUser.data.profile_picture || require("./Assets/profile.webp")} alt="User Avatar" /> */}
                            <img src={previewUrl || getCurrentUser.data.profile_picture || require("./Assets/profile.webp")} alt="User Avatar" />
                            <input accept=".jpg,.jpeg,.png" onChange={handleFileChange} type="file" ref={fileInputRef} style={{ display: "none" }} />
                            <div className={styles.button_wrapper}>
                                <div className={styles.button_wrapper_two}>
                                    {previewUrl ? (
                                        <Button onClick={handleFileUpload} variant="secondary">
                                            Submit
                                        </Button>
                                    ) : (
                                        <Button onClick={handleButtonClick} variant="secondary">
                                            Upload new photo
                                        </Button>
                                    )}
                                    {previewUrl && <Button onClick={handleRemove}>Reset</Button>}
                                </div>

                                <p>Allowed JPG, GIF, or PNG. Max size of 800KB.</p>
                            </div>
                        </div>

                        <div className={styles.profileInfo}>
                            <DynamicForm formData={formData} formButtons={buttons} onSubmit={handleSubmit} />
                        </div>
                    </div>
                )}

                {activeTab === "security" && (
                    <div className={styles.passwordForm}>
                        <h3>Change Password</h3>
                        <form onSubmit={handlePasswordSubmit}>
                            <div className={styles.inputRow}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="current-password">Current Password</label>
                                    <div className={styles.passwordField}>
                                        <input
                                            type={showPassword.current ? "text" : "password"}
                                            id="current"
                                            placeholder="Enter current password"
                                            value={passwords.current}
                                            onChange={handlePasswordChange}
                                        />

                                        <span className={styles.eyeIcon} onClick={() => togglePasswordVisibility("current")}>
                                            {showPassword.current ? "👁️" : "🙈"}
                                        </span>
                                    </div>
                                </div>

                                {/* New Password */}
                                <div className={styles.inputGroup}>
                                    <label htmlFor="new-password">New Password</label>
                                    <div className={styles.passwordField}>
                                        <input type={showPassword.new ? "text" : "password"} id="new" placeholder="Enter new password" value={passwords.new} onChange={handlePasswordChange} />
                                        <span className={styles.eyeIcon} onClick={() => togglePasswordVisibility("new")}>
                                            {showPassword.new ? "👁️" : "🙈"}
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label htmlFor="confirm-password">Confirm New Password</label>
                                    <div className={styles.passwordField}>
                                        <input
                                            type={showPassword.confirm ? "text" : "password"}
                                            id="confirm"
                                            placeholder="Confirm new password"
                                            value={passwords.confirm}
                                            onChange={handlePasswordChange}
                                        />
                                        <span className={styles.eyeIcon} onClick={() => togglePasswordVisibility("confirm")}>
                                            {showPassword.confirm ? "👁️" : "🙈"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.passwordRequirements}>
                                <h4>Password Requirements:</h4>
                                <ul>
                                    <li className={passwordValidations.minLength ? styles.valid : styles.invalid}>Minimum 8 characters long - the more, the better</li>
                                    <li className={passwordValidations.lowercase ? styles.valid : styles.invalid}>At least one lowercase character</li>
                                    <li className={passwordValidations.numberSymbol ? styles.valid : styles.invalid}>At least one number, symbol, or whitespace character</li>
                                    <li className={passwords.confirm != "" && passwords.new !== "" && passwords.confirm === passwords.new ? styles.valid : styles.invalid}>
                                        Confirm password matches the new password
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.buttonRow}>
                                <Button type="submit" disabled={!isValid}>
                                    Save changes
                                </Button>
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProfilePage;
