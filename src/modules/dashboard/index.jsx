import React from "react";
import styles from "./index.module.css";
import DashboardAnalytics from "./components/analytics";
import CanAccess from "@/components/CanAccess";

const Dashboard = () => {
    return (
        <CanAccess path={["/stats/dashboard", "/chats/dashboard"]} className={styles.main_container}>
            <DashboardAnalytics />
        </CanAccess>
    );
};

export default Dashboard;
