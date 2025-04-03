import React, { useEffect } from "react";
import styles from "./styles/index.module.css";
import useServersStats from "./hooks/useServersStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
import { useStats } from "@/services/context/stats";
const ServersStats = () => {
    const { statsCount } = useStats();
    const { serversStatsConfig } = useServersStats(statsCount.data);
    useEffect(() => {
        statsCount.execute({
            params: { module: "server" },
        });
    }, []);

    return (
        <div className={styles.statsCardsContainer}>
            {serversStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default ServersStats;
