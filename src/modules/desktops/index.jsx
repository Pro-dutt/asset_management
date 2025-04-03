import React, { useEffect, useState } from "react";
import DesktopsTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import DesktopDetails from "./components/details";
import { DesktopInfoForm } from "./components/form";
import DesktopsStats from "./components/stats";
import styles from "./styles/index.module.css";
import AddAssets from "@/components/AddAssets";
import DesktopsTableUtils from "./components/table/utils";
import { useDesktop } from "@/services/context/desktop";
import GlobalUtils from "@/lib/utils";
import CanAccess from "@/components/CanAccess";
import apiConstants from "@/services/utils/constants";

const Desktops = () => {
    const [show, setShow] = useState({});
    const [desktopDetails, setDesktopDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { desktopDeletion } = useDesktop();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && desktopDetails?.inventoryId) {
            const deletePayload = {
                recordId: desktopDetails?.inventoryId,
                onShowDetails: setDesktopDetails,
                deleteAction: desktopDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, desktopDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <CanAccess path={apiConstants.desktop.BASE_ROUTE} id="desktops_module" className={styles.container}>
            <DesktopsStats />
            <DesktopsTable setShow={setShow} setDesktopDetails={setDesktopDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Desktop"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <AddAssets module={{ name: "desktop", onSuccess, form: <DesktopInfoForm onCancel={closeModal} onSuccess={onSuccess} /> }} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Desktop Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <DesktopInfoForm data={desktopDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={"Desktop Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <DesktopDetails data={desktopDetails} />
            </Modal>
        </CanAccess>
    );
};

export default Desktops;
