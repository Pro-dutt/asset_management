import React, { useState } from "react";
import LaptopsTable from "./components/table";
import Modal from "@/components/Popup/Popup";
import GlobalICONS from "@/lib/utils/icons";
import LaptopDetails from "./components/details";
import LaptopInfoForm from "./components/form";
import LaptopsStats from "./components/stats";
import styles from "./styles/index.module.css";

const Laptops = () => {
    const [show, setShow] = useState({});
    const [laptopDetails, setLaptopDetails] = useState(null);
    const closeModal = () => setShow({ add: false, edit: false, delete: false });

    return (
        <div id="laptops_module" className={styles.container}>
            <LaptopsStats />
            <LaptopsTable setShow={setShow} setLaptopDetails={setLaptopDetails} />
            <Modal
                show={show.add}
                onClose={closeModal}
                title={"Add Laptop"}
                maxWidth={"1600px"}
                icon={GlobalICONS.LAPTOP}
                description="Provide the required details to configure and register a new Laptop"
            >
                <LaptopInfoForm onCancel={closeModal} />
            </Modal>
            <Modal
                show={show.edit}
                onClose={closeModal}
                title={"Edit Laptop Details"}
                maxWidth={"1600px"}
                icon={GlobalICONS.LAPTOP}
                description="Modify the existing details to update the Laptop configuration and information."
            >
                <LaptopInfoForm data={laptopDetails} onCancel={closeModal} />
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
