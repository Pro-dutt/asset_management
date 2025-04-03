import React, { useEffect } from "react";
import styles from "./styles/index.module.css";
import useVirtualMachinesStats from "./hooks/useVirtualMachinesStats";
import "./styles/index.css";
import StatCard from "@/components/Card/StatCard";
import { useStats } from "@/services/context/stats";
const VirtualMachinesStats = () => {
    const { statsCount } = useStats();
    const { virtualMachinesStatsConfig } = useVirtualMachinesStats(statsCount.data);
    useEffect(() => {
        statsCount.execute({
            params: { module: "virtual-machine" },
        });
    }, []);
    return (
        <div className={styles.statsCardsContainer}>
            {virtualMachinesStatsConfig.map((item, index) => (
                <StatCard key={index} data={item} />
            ))}
        </div>
    );
};

export default VirtualMachinesStats;
