import React, { useEffect, useState } from "react";
import RolesTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import { RoleInfoForm } from "./components/form";
import styles from "./styles/index.module.css";
import { useRole } from "@/services/context/role";
import GlobalUtils from "@/lib/utils";
import RoleDetails from "./components/details";
import CanAccess from "@/components/CanAccess";
import apiConstants from "@/services/utils/constants";

const Role = () => {
    const [show, setShow] = useState({});
    const [roleDetails, setRoleDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { roleDeletion } = useRole();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && roleDetails?._id) {
            const deletePayload = {
                recordId: roleDetails?._id,
                onShowDetails: setRoleDetails,
                deleteAction: roleDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, roleDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <CanAccess path={apiConstants.role.BASE_ROUTE} id="roles_module" className={styles.container}>
            <RolesTable setShow={setShow} setRoleDetails={setRoleDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Role"}
                maxWidth={"800px"}
                icon={GlobalICONS.PERMISSION}
                description="Provide the required details to configure and register a new role"
            >
                <RoleInfoForm onCancel={closeModal} onSuccess={onSuccess} />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Role Details"}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new role"
            >
                <RoleInfoForm data={roleDetails} onCancel={closeModal} onSuccess={onSuccess} />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={`Role Details  [${roleDetails?.name}]`}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description={`comprehensive  details of ${roleDetails?.name} Role`}
            >
                <RoleDetails data={roleDetails} />
            </Modal>
        </CanAccess>
    );
};

export default Role;
