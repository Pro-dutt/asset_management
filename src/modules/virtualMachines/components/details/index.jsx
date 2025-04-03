import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useVirtualMachinesDetails from "./hooks/useVirtualMachinesDetails";
import Details from "@/components/details";

const VirtualMachineDetails = ({ data }) => {
    const { virtualMachinesDetailsConfig } = useVirtualMachinesDetails(data);

    return (
        <div className={styles.container}>
            <Details data={virtualMachinesDetailsConfig} />
        </div>
    );
};

export default VirtualMachineDetails;
