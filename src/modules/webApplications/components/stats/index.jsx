import React, { useEffect } from "react";
import styles from "./styles/index.module.css";
import useWebApplicationsStats from "./hooks/useWebApplicationsStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
import { useStats } from "@/services/context/stats";
const WebApplicationsStats = () => {
    const { statsCount } = useStats();

    const { webApplicationsStatsConfig } = useWebApplicationsStats(statsCount.data);
    useEffect(() => {
        statsCount.execute({
            params: { module: "web-application" },
        });
    }, []);
    return (
        <div className={styles.statsCardsContainer}>
            {webApplicationsStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default WebApplicationsStats;
