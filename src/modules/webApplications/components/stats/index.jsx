import React from "react";
import styles from "./styles/index.module.css";
import useWebApplicationsStats from "./hooks/useWebApplicationsStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
const WebApplicationsStats = () => {
    const { webApplicationsStatsConfig } = useWebApplicationsStats();

    return (
        <div className={styles.statsCardsContainer}>
            {webApplicationsStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default WebApplicationsStats;
