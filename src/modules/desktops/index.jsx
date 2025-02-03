import React, { useState } from "react";
import DesktopsTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import VirtualMachine from "../virtualMachines";
import GlobalICONS from "@/lib/utils/icons";
import DesktopDetails from "./components/details";
import { DesktopInfoForm } from "./components/Form";

const Desktops = () => {
    const [show, setShow] = useState({});
    const [desktopDetails, setDesktopDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    return (
        <div id="desktops_module">
            <DesktopsTable setShow={setShow} setDesktopDetails={setDesktopDetails} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Desktop"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <DesktopInfoForm />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Desktop Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new desktop"
            >
                <DesktopInfoForm data={desktopDetails} />
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
