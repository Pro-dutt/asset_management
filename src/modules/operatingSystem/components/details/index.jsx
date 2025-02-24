import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useOperatingSystemsDetails from "./hooks/useOperatingSystemDetails";
import Details from "@/components/details";

const OperatingSystemDetails = ({ data }) => {
    const { operatingSystemDetailsConfig } = useOperatingSystemsDetails(data);

    return (
        <div className={styles.container}>
            <Details data={operatingSystemDetailsConfig} />
        </div>
    );
};

export default OperatingSystemDetails;
