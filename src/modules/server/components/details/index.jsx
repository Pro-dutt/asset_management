import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useServersDetails from "./hooks/useServersDetails";
import Details from "@/components/details";

const ServerDetails = ({ data }) => {
    const { serversDetailsConfig } = useServersDetails(data);

    return (
        <div className={styles.container}>
            <Details data={serversDetailsConfig} />
        </div>
    );
};

export default ServerDetails;
