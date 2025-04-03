import React, { useEffect, useState } from "react";
import WebApplicationsTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import WebApplicationsDetails from "./components/details";
import WebApplicationsInfoForm from "./components/form";
import WebApplicationsStats from "./components/stats";
import styles from "./styles/index.module.css";
import AddAssets from "@/components/AddAssets";
import GlobalUtils from "@/lib/utils";
import { useWebApplication } from "@/services/context/webApplication";
import CanAccess from "@/components/CanAccess";
import apiConstants from "@/services/utils/constants";

const WebApplications = () => {
    const [show, setShow] = useState({});
    const [webApplicationDetails, setWebApplicationDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { webApplicationDeletion } = useWebApplication();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && webApplicationDetails?.inventoryId) {
            const deletePayload = {
                recordId: webApplicationDetails?.inventoryId,
                onShowDetails: setWebApplicationDetails,
                deleteAction: webApplicationDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, webApplicationDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <CanAccess path={apiConstants.webApplications.BASE_ROUTE} id="web_applications_module" className={styles.container}>
            <WebApplicationsStats />
            <WebApplicationsTable setShow={setShow} setWebApplicationDetails={setWebApplicationDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Web Applications"}
                maxWidth={"1600px"}
                icon={GlobalICONS.WEB_APPLICATION}
                description="Provide the required details to configure and register a new web application"
            >
                <AddAssets module={{ name: "web application", onSuccess, form: <WebApplicationsInfoForm onCancel={closeModal} onSuccess={onSuccess} /> }} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Web Applications Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.WEB_APPLICATION}
                description="Modify the existing details to update the web application configuration and information."
            >
                <WebApplicationsInfoForm data={webApplicationDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={"Web Applications Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.WEB_APPLICATION}
                description="View the complete details and specifications of the selected web application."
            >
                <WebApplicationsDetails data={webApplicationDetails} />
            </Modal>
        </CanAccess>
    );
};

export default WebApplications;
