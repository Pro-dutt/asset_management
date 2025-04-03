import React, { useEffect, useState } from "react";
import OperatingSystemsTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import { OperatingSystemInfoForm } from "./components/form";
import styles from "./styles/index.module.css";
import { useOperatingSystem } from "@/services/context/operatingSystem";
import GlobalUtils from "@/lib/utils";
import CanAccess from "@/components/CanAccess";
import apiConstants from "@/services/utils/constants";
import OperatingSystemDetails from "./components/details";

const OperatingSystem = () => {
    const [show, setShow] = useState({});
    const [operatingSystemDetails, setOperatingSystemDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { operatingSystemDeletion } = useOperatingSystem();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && operatingSystemDetails?._id) {
            const deletePayload = {
                recordId: operatingSystemDetails?._id,
                onShowDetails: setOperatingSystemDetails,
                deleteAction: operatingSystemDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, operatingSystemDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <CanAccess path={apiConstants.operatingSystem.BASE_ROUTE} id="operating_systems_module" className={styles.container}>
            <OperatingSystemsTable setShow={setShow} setOperatingSystemDetails={setOperatingSystemDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add OperatingSystem"}
                maxWidth={"800px"}
                icon={GlobalICONS.PERMISSION}
                description="Provide the required details to configure and register a new Operating system"
            >
                <OperatingSystemInfoForm onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit OperatingSystem Details"}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new Operating System"
            >
                <OperatingSystemInfoForm data={operatingSystemDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={`OperatingSystem Details  [${operatingSystemDetails?.name}]`}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description={`comprehensive  details of ${operatingSystemDetails?.name} Operating System`}
            >
                <OperatingSystemDetails data={operatingSystemDetails} />
            </Modal>
        </CanAccess>
    );
};

export default OperatingSystem;
