import React from "react";
import styles from "./styles/index.module.css";
import useVirtualMachinesStats from "./hooks/useVirtualMachinesStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
const VirtualMachinesStats = () => {
    const { virtualMachinesStatsConfig } = useVirtualMachinesStats();

    return (
        <div className={styles.statsCardsContainer}>
            {virtualMachinesStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default VirtualMachinesStats;
