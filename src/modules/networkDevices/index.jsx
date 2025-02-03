import React, { useState } from "react";
import NetworkingDevicesTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import NetworkingDevicesDetails from "./components/details";
import NetworkingDevicesInfoForm from "./components/form";
import NetworkingDevicesStats from "./components/stats";
import styles from "./styles/index.module.css";

const NetworkingDevices = () => {
    const [show, setShow] = useState({});
    const [networkingDeviceDetails, setNetworkingDeviceDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    return (
        <div id="networking_devices_module" className={styles.container}>
            <NetworkingDevicesStats />
            <NetworkingDevicesTable setShow={setShow} setNetworkingDeviceDetails={setNetworkingDeviceDetails} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Networking Device"}
                maxWidth={"1600px"}
                icon={GlobalICONS.NETWORKING_DEVICE}
                description="Provide the required details to configure and register a new Networking Device"
            >
                <NetworkingDevicesInfoForm onCancel={closeModal} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Networking Devices Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.NETWORKING_DEVICE}
                description="Modify the existing details to update the Networking Device configuration and information."
            >
                <NetworkingDevicesInfoForm data={networkingDeviceDetails} onCancel={closeModal} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={"Networking Devices Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.NETWORKING_DEVICE}
                description="View the complete details and specifications of the selected Networking Device."
            >
                <NetworkingDevicesDetails data={networkingDeviceDetails} />
            </Modal>
        </div>
    );
};

export default NetworkingDevices;
