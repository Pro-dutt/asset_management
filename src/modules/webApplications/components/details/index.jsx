import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useWebApplicationsDetails from "./hooks/useWebApplicationsDetails";
import Details from "@/components/details";

const WebApplicationDetails = ({ data }) => {
    const { webApplicationsDetailsConfig } = useWebApplicationsDetails(data);

    return (
        <div className={styles.container}>
            <Details data={webApplicationsDetailsConfig} />
        </div>
    );
};

export default WebApplicationDetails;
