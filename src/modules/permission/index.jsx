import React, { useEffect, useState } from "react";
import PermissionsTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import { PermissionInfoForm } from "./components/form";
import styles from "./styles/index.module.css";
import { usePermission } from "@/services/context/permission";
import GlobalUtils from "@/lib/utils";

const Permission = () => {
    const [show, setShow] = useState({});
    const [permissionDetails, setPermissionDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { permissionDeletion } = usePermission();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && permissionDetails?._id) {
            const deletePayload = {
                recordId: permissionDetails?._id,
                onShowDetails: setPermissionDetails,
                deleteAction: permissionDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, permissionDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <div id="permissions_module" className={styles.container}>
            <PermissionsTable setShow={setShow} setPermissionDetails={setPermissionDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Permission"}
                maxWidth={"800px"}
                icon={GlobalICONS.PERMISSION}
                description="Provide the required details to configure and register a new permission"
            >
                <PermissionInfoForm onCancel={closeModal} onSuccess={onSuccess} />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Permission Details"}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new permission"
            >
                <PermissionInfoForm data={permissionDetails} onCancel={closeModal} onSuccess={onSuccess} />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Modal>
        </div>
    );
};

export default Permission;
