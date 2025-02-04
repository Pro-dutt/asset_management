import React, { useEffect } from "react";
import styles from "./styles/index.module.css";
import useDesktopsStats from "./hooks/useDesktopsStats";
import "./styles/index.css";
import { useStats } from "@/services/context/stats";
import StatCard from "@/components/Card/StatCard";
const DesktopsStats = () => {
    const { statsCount } = useStats();
    const { desktopsStatsConfig } = useDesktopsStats(statsCount.data);

    useEffect(() => {
        statsCount.execute({
            params: { module: "desktops" },
        });
    }, []);

    return (
        <div className={styles.statsCardsContainer}>
            {desktopsStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default DesktopsStats;
