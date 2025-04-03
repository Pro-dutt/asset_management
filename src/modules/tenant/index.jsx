import React, { useEffect, useState } from "react";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import { TenantInfoForm } from "./components/form";
import styles from "./styles/index.module.css";
import GlobalUtils from "@/lib/utils";
import TenantTable from "./components/table";
import { useTenant } from "@/services/context/tenant";
import TenantDetails from "./components/details";

const Tenant = () => {
    const [show, setShow] = useState({});
    const [tenantDetails, setTenantDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { tenantDeletion } = useTenant();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && tenantDetails?._id) {
            const deletePayload = {
                recordId: tenantDetails?._id,
                onShowDetails: setTenantDetails,
                deleteAction: tenantDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, tenantDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <div id="tenant_module" className={styles.container}>
            <TenantTable setShow={setShow} setTenantDetails={setTenantDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Tenant"}
                maxWidth={"800px"}
                icon={GlobalICONS.ADD_TENANT}
                description="Provide the required details to configure and register a new tenant"
            >
                <TenantInfoForm onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit tenant Details"}
                maxWidth={"800px"}
                icon={GlobalICONS.DESKTOP}
                description="Provide the required details to configure and register a new tenant"
            >
                <TenantInfoForm data={tenantDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={`Tenant Details  [${tenantDetails?.name}]`}
                maxWidth={"1600px"}
                icon={GlobalICONS.DESKTOP}
                description={`comprehensive  details of ${tenantDetails?.name} Tenant`}
            >
                <TenantDetails data={tenantDetails} />
            </Modal>
        </div>
    );
};

export default Tenant;
