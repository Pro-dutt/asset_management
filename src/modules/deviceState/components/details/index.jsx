import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useDeviceStateDetails from "./hooks/useDeviceState";
import Details from "@/components/details";

const DeviceStateDetails = ({ data }) => {
    const { designationDetailsConfig } = useDeviceStateDetails(data);

    return (
        <div className={styles.container}>
            <Details data={designationDetailsConfig} />
        </div>
    );
};

export default DeviceStateDetails;
