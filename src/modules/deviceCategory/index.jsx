import React, { useEffect, useState } from "react";
import DeviceCategoryTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import { DeviceCategoryInfoForm } from "./components/form";
import styles from "./styles/index.module.css";
import { useDeviceCategory } from "@/services/context/deviceCategory";
import GlobalUtils from "@/lib/utils";
import CanAccess from "@/components/CanAccess";
import apiConstants from "@/services/utils/constants";
import DeviceCategoryDetails from "./components/details";

const DeviceCategory = () => {
    const [show, setShow] = useState({});
    const [deviceCategoryDetails, setDeviceCategoryDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { deviceCategoryDeletion } = useDeviceCategory();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && deviceCategoryDetails?._id) {
            const deletePayload = {
                recordId: deviceCategoryDetails?._id,
                onShowDetails: setDeviceCategoryDetails,
                deleteAction: deviceCategoryDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, deviceCategoryDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <CanAccess path={apiConstants.deviceCategory.BASE_ROUTE} id="device_category_module" className={styles.container}>
            <DeviceCategoryTable setShow={setShow} setDeviceCategoryDetails={setDeviceCategoryDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add DeviceCategory"}
                maxWidth={"800px"}
                icon={GlobalICONS.PERMISSION}
                description="Provide the required details to configure and register a new Device Category"
            >
                <DeviceCategoryInfoForm onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit DeviceCategory Details"}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new Device Category"
            >
                <DeviceCategoryInfoForm data={deviceCategoryDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={`DeviceCategory Details  [${deviceCategoryDetails?.name}]`}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description={`comprehensive  details of ${deviceCategoryDetails?.name} Device Category`}
            >
                <DeviceCategoryDetails data={deviceCategoryDetails} />
            </Modal>
        </CanAccess>
    );
};

export default DeviceCategory;
