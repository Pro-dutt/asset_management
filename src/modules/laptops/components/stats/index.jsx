import React from "react";
import styles from "./styles/index.module.css";
import useLaptopsStats from "./hooks/useLaptopsStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
const LaptopsStats = () => {
    const { laptopsStatsConfig } = useLaptopsStats();

    return (
        <div className={styles.statsCardsContainer}>
            {laptopsStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default LaptopsStats;
