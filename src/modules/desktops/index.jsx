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

const Desktops = () => {
    const [show, setShow] = useState({});
    const { desktopDeletion } = useDesktop();
    const [desktopDetails, setDesktopDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    useEffect(() => {
        if (show.delete && desktopDetails) {
            DesktopsTableUtils.handleDelete({ data: desktopDetails, setDesktopDetails, desktopDeletion });
            setShow((prev) => ({ ...prev, delete: false }));
        }
    }, [show.delete, desktopDetails]);

    return (
        <div id="desktops_module" className={styles.container}>
            <DesktopsStats />
            <DesktopsTable setShow={setShow} setDesktopDetails={setDesktopDetails} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Desktop"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <AddAssets module={{ name: "desktop", form: <DesktopInfoForm onCancel={closeModal} /> }} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Desktop Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <DesktopInfoForm data={desktopDetails} onCancel={closeModal} />
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
        </div>
    );
};

export default Desktops;
