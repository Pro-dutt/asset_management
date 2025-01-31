import Breadcrumb from "@/components/Breadcrumb";
import styles from "./styles/index.module.css";

const { VirtualMachineInfoForm } = require("./components/Form");

const VirtualMachine = () => {
    // const breadcrumbItems = [
    //     { label: "Dashoard", url: "/" },
    //     { label: "Virtual Machines", url: "/virtual-machines" },
    //     { label: "Create", url: "" },
    // ];
    return (
        <div className={styles.container}>
            {/* <div className={styles.breadcrumbWrapper}>
                <Breadcrumb items={breadcrumbItems} title="Virtual Machine Managment" />
            </div> */}

            <VirtualMachineInfoForm />
        </div>
    );
};

export default VirtualMachine;
