import React from "react";
import styles from "./styles/index.module.css";
import useNetworkStats from "./hooks/useNetworkStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
const NetworkStats = () => {
    const { networkStatsConfig } = useNetworkStats();

    return (
        <div className={styles.statsCardsContainer}>
            {networkStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default NetworkStats;
