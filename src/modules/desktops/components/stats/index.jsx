import React, { useEffect } from "react";
import styles from "./styles/index.module.css";
import useDesktopsStats from "./hooks/useDesktopsStats";
import "./styles/index.css";
import Stats from "@/components/stats";
import { useStats } from "@/services/context/stats";
const DesktopsStats = () => {
    const { statsCount } = useStats();
    const { desktopsStatsConfig } = useDesktopsStats(statsCount.data);

    useEffect(() => {
        statsCount.execute({
            params: { module: "desktops" },
        });
    }, []);

    return (
        <div className={styles.container}>
            <Stats data={desktopsStatsConfig} />
        </div>
    );
};

export default DesktopsStats;
