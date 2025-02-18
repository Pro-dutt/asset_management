import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useRolesDetails from "./hooks/useRoleDetails";
import Details from "@/components/details";

const RoleDetails = ({ data }) => {
    const { roleDetailsConfig } = useRolesDetails(data);

    return (
        <div className={styles.container}>
            <Details data={roleDetailsConfig} />
        </div>
    );
};

export default RoleDetails;
