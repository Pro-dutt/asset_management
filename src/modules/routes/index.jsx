import React from "react";
import RoutesTable from "./components/table";
import styles from "./styles/index.module.css";

const ApiRoutes = () => {
    return (
        <div id="routes_module" className={styles.container}>
            <RoutesTable />
        </div>
    );
};

export default ApiRoutes;
