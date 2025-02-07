import React, { useEffect, useState } from "react";
import ServersTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import ServersDetails from "./components/details";
import ServersInfoForm from "./components/form";
import ServersStats from "./components/stats";
import styles from "./styles/index.module.css";
import AddAssets from "@/components/AddAssets";
import GlobalUtils from "@/lib/utils";
import { useServer } from "@/services/context/server";

const Servers = () => {
    const [show, setShow] = useState({});
    const [serverDetails, setServerDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { serverDeletion } = useServer();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && serverDetails?.inventoryId) {
            const deletePayload = {
                recordId: serverDetails?.inventoryId,
                onShowDetails: setServerDetails,
                deleteAction: serverDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, serverDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <div id="servers_module" className={styles.container}>
            <ServersStats />
            <ServersTable setShow={setShow} setServerDetails={setServerDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Servers"}
                maxWidth={"1600px"}
                icon={GlobalICONS.SERVER}
                description="Provide the required details to configure and register a new Server"
            >
                <AddAssets module={{ name: "server", onSuccess, form: <ServersInfoForm onCancel={closeModal} onSuccess={onSuccess} /> }} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Servers Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.SERVER}
                description="Modify the existing details to update the Server configuration and information."
            >
                <ServersInfoForm data={serverDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={"Servers Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.SERVER}
                description="View the complete details and specifications of the selected Server."
            >
                <ServersDetails data={serverDetails} />
            </Modal>
        </div>
    );
};

export default Servers;
