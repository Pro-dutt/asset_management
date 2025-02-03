import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useNetworkingDevicesDetails from "./hooks/useNetworkingDevicesDetails";
import Details from "@/components/details";

const NetworkingDeviceDetails = ({ data }) => {
    const { networkingDevicesDetailsConfig } = useNetworkingDevicesDetails(data);

    return (
        <div className={styles.container}>
            <Details data={networkingDevicesDetailsConfig} />
        </div>
    );
};

export default NetworkingDeviceDetails;
