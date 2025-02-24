import React, { useEffect, useState } from "react";
import DesignationsTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import { DesignationInfoForm } from "./components/form";
import styles from "./styles/index.module.css";
import { useDesignation } from "@/services/context/designation";
import GlobalUtils from "@/lib/utils";
import CanAccess from "@/components/CanAccess";
import apiConstants from "@/services/utils/constants";
import DesignationDetails from "./components/details";

const Designation = () => {
    const [show, setShow] = useState({});
    const [designationDetails, setDesignationDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { designationDeletion } = useDesignation();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && designationDetails?._id) {
            const deletePayload = {
                recordId: designationDetails?._id,
                onShowDetails: setDesignationDetails,
                deleteAction: designationDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, designationDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <CanAccess path={apiConstants.designation.BASE_ROUTE} id="designations_module" className={styles.container}>
            <DesignationsTable setShow={setShow} setDesignationDetails={setDesignationDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Designation"}
                maxWidth={"800px"}
                icon={GlobalICONS.PERMISSION}
                description="Provide the required details to configure and register a new Designation"
            >
                <DesignationInfoForm onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Designation Details"}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new Designation"
            >
                <DesignationInfoForm data={designationDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={`Designation Details  [${designationDetails?.name}]`}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description={`comprehensive  details of ${designationDetails?.name} Designation`}
            >
                <DesignationDetails data={designationDetails} />
            </Modal>
        </CanAccess>
    );
};

export default Designation;
