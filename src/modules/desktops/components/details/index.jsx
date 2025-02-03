import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useDesktopsDetails from "./hooks/useDesktopsDetails";
import Details from "@/components/details";

const DesktopDetails = ({ data }) => {
    const { desktopsDetailsConfig } = useDesktopsDetails(data);

    return (
        <div className={styles.container}>
            <Details data={desktopsDetailsConfig} />
        </div>
    );
};

export default DesktopDetails;
