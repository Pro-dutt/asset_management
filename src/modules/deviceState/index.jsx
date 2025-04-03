import React, { useEffect, useState } from "react";
import DeviceStateTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import { DeviceStateInfoForm } from "./components/form";
import styles from "./styles/index.module.css";
import { useDeviceState } from "@/services/context/deviceState";
import GlobalUtils from "@/lib/utils";
import CanAccess from "@/components/CanAccess";
import apiConstants from "@/services/utils/constants";
import DeviceStateDetails from "./components/details";

const DeviceState = () => {
    const [show, setShow] = useState({});
    const [deviceStateDetails, setDeviceStateDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { deviceStateDeletion } = useDeviceState();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && deviceStateDetails?._id) {
            const deletePayload = {
                recordId: deviceStateDetails?._id,
                onShowDetails: setDeviceStateDetails,
                deleteAction: deviceStateDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, deviceStateDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <CanAccess path={apiConstants.deviceState.BASE_ROUTE} id="device_state_module" className={styles.container}>
            <DeviceStateTable setShow={setShow} setDeviceStateDetails={setDeviceStateDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add DeviceState"}
                maxWidth={"800px"}
                icon={GlobalICONS.PERMISSION}
                description="Provide the required details to configure and register a new Device State"
            >
                <DeviceStateInfoForm onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit DeviceState Details"}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new Device State"
            >
                <DeviceStateInfoForm data={deviceStateDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={`DeviceState Details  [${deviceStateDetails?.name}]`}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description={`comprehensive  details of ${deviceStateDetails?.name} Device State`}
            >
                <DeviceStateDetails data={deviceStateDetails} />
            </Modal>
        </CanAccess>
    );
};

export default DeviceState;
