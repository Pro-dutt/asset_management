import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import Details from "@/components/details";
import useTenantDetails from "./hooks/useTenantDetails";

const TenantDetails = ({ data }) => {
    const { tenantDetailsConfig } = useTenantDetails(data);

    return (
        <div className={styles.container}>
            <Details data={tenantDetailsConfig} />
        </div>
    );
};

export default TenantDetails;
