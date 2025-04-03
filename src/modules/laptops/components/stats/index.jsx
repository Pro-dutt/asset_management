import React, { useEffect } from "react";
import styles from "./styles/index.module.css";
import useLaptopsStats from "./hooks/useLaptopsStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
import { useStats } from "@/services/context/stats";
const LaptopsStats = () => {
    const { statsCount } = useStats();
    const { laptopsStatsConfig } = useLaptopsStats(statsCount.data);
    useEffect(() => {
        statsCount.execute({
            params: { module: "laptop" },
        });
    }, []);
    return (
        <div className={styles.statsCardsContainer}>
            {laptopsStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default LaptopsStats;
