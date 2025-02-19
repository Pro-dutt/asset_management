import React, { useEffect, useState } from "react";
import VirtualMachineTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import VirtualMachineDetails from "./components/details";
import VirtualMachineInfoForm from "./components/form";
import VirtualMachineStats from "./components/stats";
import styles from "./styles/index.module.css";
import AddAssets from "@/components/AddAssets";
import { useVirtualMachines } from "@/services/context/virtualMachines";
import GlobalUtils from "@/lib/utils";
import CanAccess from "@/components/CanAccess";
import apiConstants from "@/services/utils/constants";

const VirtualMachine = () => {
    const [show, setShow] = useState({});
    const [virtualMachineDetails, setVirtualMachineDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { virtualMachineDeletion } = useVirtualMachines();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && virtualMachineDetails?.inventoryId) {
            const deletePayload = {
                recordId: virtualMachineDetails?.inventoryId,
                onShowDetails: setVirtualMachineDetails,
                deleteAction: virtualMachineDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, virtualMachineDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <CanAccess path={apiConstants.virtualMachines.BASE_ROUTE} id="virtual_machines_module" className={styles.container}>
            <VirtualMachineStats />
            <VirtualMachineTable setShow={setShow} setVirtualMachineDetails={setVirtualMachineDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Virtual Machine"}
                maxWidth={"1600px"}
                icon={GlobalICONS.VIRTUAL_MACHINE}
                description="Provide the required details to configure and register a new Virtual Machine"
            >
                <AddAssets module={{ name: "virtual machine", onSuccess, form: <VirtualMachineInfoForm onCancel={closeModal} onSuccess={onSuccess} /> }} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Virtual Machine Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.VIRTUAL_MACHINE}
                description="Modify the existing details to update the Virtual Machine configuration and information."
            >
                <VirtualMachineInfoForm data={virtualMachineDetails} onCancel={closeModal} onSuccess={onSuccess} />
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
        </CanAccess>
    );
};

export default VirtualMachine;
