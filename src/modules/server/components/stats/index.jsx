import React from "react";
import styles from "./styles/index.module.css";
import useServersStats from "./hooks/useServersStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
const ServersStats = () => {
    const { serversStatsConfig } = useServersStats();

    return (
        <div className={styles.statsCardsContainer}>
            {serversStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default ServersStats;
