import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useDepartmentsDetails from "./hooks/useDepartmentDetails";
import Details from "@/components/details";

const DepartmentDetails = ({ data }) => {
    const { departmentDetailsConfig } = useDepartmentsDetails(data);

    return (
        <div className={styles.container}>
            <Details data={departmentDetailsConfig} />
        </div>
    );
};

export default DepartmentDetails;
