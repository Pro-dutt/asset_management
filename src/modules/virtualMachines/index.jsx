import React, { useState } from "react";
import VirtualMachineTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import VirtualMachineDetails from "./components/details";
import VirtualMachineInfoForm from "./components/form";
import VirtualMachineStats from "./components/stats";
import styles from "./styles/index.module.css";

const VirtualMachine = () => {
    const [show, setShow] = useState({});
    const [virtualMachineDetails, setVirtualMachineDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    return (
        <div id="virtual_machines_module" className={styles.container}>
            <VirtualMachineStats />
            <VirtualMachineTable setShow={setShow} setVirtualMachineDetails={setVirtualMachineDetails} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Virtual Machine"}
                maxWidth={"1600px"}
                icon={GlobalICONS.VIRTUAL_MACHINE}
                description="Provide the required details to configure and register a new Virtual Machine"
            >
                <VirtualMachineInfoForm onCancel={closeModal} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Virtual Machine Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.VIRTUAL_MACHINE}
                description="Modify the existing details to update the Virtual Machine configuration and information."
            >
                <VirtualMachineInfoForm data={virtualMachineDetails} onCancel={closeModal} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={"Virtual Machine Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.VIRTUAL_MACHINE}
                description="View the complete details and specifications of the selected Virtual Machine."
            >
                <VirtualMachineDetails data={virtualMachineDetails} />
            </Modal>
        </div>
    );
};

export default VirtualMachine;
