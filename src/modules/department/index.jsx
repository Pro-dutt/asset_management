import React, { useEffect, useState } from "react";
import DepartmentsTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import { DepartmentInfoForm } from "./components/form";
import styles from "./styles/index.module.css";
import { useDepartment } from "@/services/context/department";
import GlobalUtils from "@/lib/utils";
import CanAccess from "@/components/CanAccess";
import apiConstants from "@/services/utils/constants";

const Department = () => {
    const [show, setShow] = useState({});
    const [departmentDetails, setDepartmentDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { DepartmentDeletion } = useDepartment();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && departmentDetails?._id) {
            const deletePayload = {
                recordId: departmentDetails?._id,
                onShowDetails: setDepartmentDetails,
                deleteAction: DepartmentDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, departmentDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <CanAccess path={apiConstants.department.BASE_ROUTE} id="departments_module" className={styles.container}>
            <DepartmentsTable setShow={setShow} setDepartmentDetails={setDepartmentDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Department"}
                maxWidth={"800px"}
                icon={GlobalICONS.PERMISSION}
                description="Provide the required details to configure and register a new Department"
            >
                <DepartmentInfoForm onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Department Details"}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new Department"
            >
                <DepartmentInfoForm data={departmentDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={`Department Details  [${departmentDetails?.name}]`}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description={`comprehensive  details of ${departmentDetails?.name} Department`}
            >
                <DepartmentDetails data={departmentDetails} />
            </Modal>
        </CanAccess>
    );
};

export default Department;
