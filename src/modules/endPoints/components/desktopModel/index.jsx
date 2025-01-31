import React from "react";
import Modal from "@/components/Popup/Popup";
import VirtualMachine from "@/modules/virtualMachines";

const DesktopModal = ({ isOpen, onClose, title, desktopDetails, maxWidth }) => (
    <Modal show={isOpen} onClose={onClose} title={title} maxWidth={maxWidth}>
        <VirtualMachine data={desktopDetails} />
    </Modal>
);

export default DesktopModal;
