import React from "react";
import styles from "./styles/index.module.css";
import useDashboardStats from "./hooks/useDashboardStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";

const DashboardStats = () => {
    const { dashboardStatsConfig } = useDashboardStats();

    return (
        <div className={styles.statsCardsContainer}>
            {dashboardStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default DashboardStats;
