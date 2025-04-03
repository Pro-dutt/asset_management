import React, { useEffect } from "react";
import styles from "./styles/index.module.css";
import useNetworkStats from "./hooks/useNetworkStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
import { useStats } from "@/services/context/stats";
const NetworkStats = () => {
    const { statsCount } = useStats();
    const { networkStatsConfig } = useNetworkStats(statsCount.data);
    useEffect(() => {
        statsCount.execute({
            params: { module: "network-device" },
        });
    }, []);
    return (
        <div className={styles.statsCardsContainer}>
            {networkStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default NetworkStats;
