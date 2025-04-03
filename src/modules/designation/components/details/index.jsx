import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useDesignationsDetails from "./hooks/useDesignationDetails";
import Details from "@/components/details";

const DesignationDetails = ({ data }) => {
    const { designationDetailsConfig } = useDesignationsDetails(data);

    return (
        <div className={styles.container}>
            <Details data={designationDetailsConfig} />
        </div>
    );
};

export default DesignationDetails;
