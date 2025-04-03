import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useDeviceCategoryDetails from "./hooks/useDeviceCategory";
import Details from "@/components/details";

const DeviceCategoryDetails = ({ data }) => {
    const { designationDetailsConfig } = useDeviceCategoryDetails(data);

    return (
        <div className={styles.container}>
            <Details data={designationDetailsConfig} />
        </div>
    );
};

export default DeviceCategoryDetails;
