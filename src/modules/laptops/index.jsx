import React, { useEffect, useState } from "react";
import LaptopsTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import LaptopDetails from "./components/details";
import LaptopInfoForm from "./components/form";
import LaptopsStats from "./components/stats";
import styles from "./styles/index.module.css";
import AddAssets from "@/components/AddAssets";
import { useDesktop } from "@/services/context/desktop";
import GlobalUtils from "@/lib/utils";

const Laptops = () => {

    const [show, setShow] = useState({});
    const [laptopDetails, setLaptopDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    const { desktopDeletion } = useDesktop();
    const [refreshTable, setRefreshTable] = useState(false);
    useEffect(() => {
        if (show.delete && laptopDetails?.inventoryId) {
            const deletePayload = {
                recordId: laptopDetails?.inventoryId,
                onShowDetails: setLaptopDetails,
                deleteAction: desktopDeletion,
                toggleRefreshData: setRefreshTable,
            };
            GlobalUtils.handleDelete(deletePayload);
            closeModal();
        }
    }, [show.delete, laptopDetails]);

    const onSuccess = () => {
        setRefreshTable((prev) => !prev);
        closeModal();
    };

    return (
        <div id="laptops_module" className={styles.container}>
            <LaptopsStats />
            <LaptopsTable setShow={setShow} setLaptopDetails={setLaptopDetails} refreshTable={refreshTable} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Laptop"}
                maxWidth={"1600px"}
                icon={GlobalICONS.LAPTOP}
                description="Provide the required details to configure and register a new Laptop"
            >
                <AddAssets module={{ name: "laptop", onSuccess, form: <LaptopInfoForm onCancel={closeModal} onSuccess={onSuccess} /> }} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Laptop Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.LAPTOP}
                description="Modify the existing details to update the Laptop configuration and information."
            >
                <LaptopInfoForm data={laptopDetails} onCancel={closeModal} onSuccess={onSuccess} />
            </Modal>
            <Modal
                show={show.view}
                onClose={closeModal}
                title={"Laptop Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.LAPTOP}
                description="View the complete details and specifications of the selected Laptop."
            >
                <LaptopDetails data={laptopDetails} />
            </Modal>
        </div>
    );
};

export default Laptops;
