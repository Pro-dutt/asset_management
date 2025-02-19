import React from "react";
import RoutesTable from "./components/table";
import styles from "./styles/index.module.css";
import apiConstants from "@/services/utils/constants";

const ApiRoutes = () => {
    return (
        <CanAccess path={apiConstants.role.BASE_ROUTE} id="routes_module" className={styles.container}>
            <RoutesTable />
        </CanAccess>
    );
};

export default ApiRoutes;
