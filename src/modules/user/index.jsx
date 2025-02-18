import React, { useEffect, useState } from "react";
import UsersTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import { UserInfoForm } from "./components/form";
import styles from "./styles/index.module.css";
import GlobalUtils from "@/lib/utils";
import UserDetails from "./components/details";
import { useUsers } from "@/services/context/users";

const User = () => {
    const [show, setShow] = useState({});
    const [userDetails, setUserDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { userDeletion } = useUsers();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && userDetails?._id) {
            const deletePayload = {
                recordId: userDetails?._id,
                onShowDetails: setUserDetails,
                deleteAction: userDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, userDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <div id="users_module" className={styles.container}>
            <UsersTable setShow={setShow} setUserDetails={setUserDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add User"}
                maxWidth={"800px"}
                icon={GlobalICONS.PERMISSION}
                description="Provide the required details to configure and register a new user"
            >
                <UserInfoForm onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit User Details"}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new user"
            >
                <UserInfoForm data={userDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={`User Details  [${userDetails?.name}]`}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description={`comprehensive  details of ${userDetails?.name} User`}
            >
                <UserDetails data={userDetails} />
            </Modal>
        </div>
    );
};

export default User;
