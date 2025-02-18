import { useEffect, useMemo } from "react";
import UserUtils from "../utils";
import { usePermission } from "@/services/context/permission";
import { useRole } from "@/services/context/role";
import { useUsers } from "@/services/context/users";

export const useUserInfoForm = (data = {}, onSuccess) => {
    const { permissionDropdownList } = usePermission();
    const { roleDropdownList } = useRole();
    const { userCreation, userUpdating } = useUsers();
    const formConfig = useMemo(
        () => [
            {
                type: "text",
                name: "name",
                label: "User Name",
                placeholder: "User name",
                grid: 2,
                defaultValue: data?.name,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "email",
                name: "email",
                label: "Email",
                placeholder: "User email",
                grid: 2,
                defaultValue: data?.email,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "password",
                name: "password",
                label: "Password",
                placeholder: "user password",
                grid: 2,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "status",
                label: "Employee status",
                placeholder: "user employee status",
                grid: 2,
                defaultValue: data?.status,
                options: [
                    { label: "Active", value: "active" },
                    { label: "Inactive", value: "inactive" },
                ],
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "employeeId",
                label: "Employee Id",
                placeholder: "user employee id",
                grid: 2,
                defaultValue: data?.employeeId,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "department",
                label: "Department",
                required: true,
                grid: 2,
                defaultValue: data?.department || "",
            },
            {
                type: "text",
                name: "designation",
                label: "Designation",
                required: true,
                grid: 2,
                defaultValue: data?.designation || "",
            },
            {
                type: "select",
                name: "roles",
                label: "Roles",
                grid: 1,
                multiple: true,
                placeholder: "Select user roles",
                options: UserUtils.formatRoleForDropdownList(roleDropdownList.data),
                defaultValue: data?.roles?.map((item) => item._id),
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "select",
                name: "extraPermissions",
                label: "Extra Permissions",
                grid: 1,
                multiple: true,
                placeholder: "Select user extra permissions",
                options: UserUtils.formatPermissionForDropdownList(permissionDropdownList.data),
                defaultValue: data?.extraPermissions?.map((item) => item._id),
                validateOnChange: true,
                validationRules: {},
            },
        ],
        [data, permissionDropdownList.data, roleDropdownList.data]
    );

    const operation = data?._id ? userUpdating : userCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?._id && { id: data._id }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    useEffect(() => {
        permissionDropdownList.fetch({});
        roleDropdownList.fetch({});
    }, []);
    console.log(permissionDropdownList.data);
    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, userInfoFormErrors: operation?.errorMessages };
};
