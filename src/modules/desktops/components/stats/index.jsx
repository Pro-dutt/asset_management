import React from 'react';
import styles from "./styles/index.module.css";
import useDesktopsStats from './hooks/useDesktopsStats';
import StatCard from '@/components/Card/StatCard';
import "./styles/index.css";
const DesktopsStats = () => {
    const {desktopsStatsConfig} = useDesktopsStats();

  return ( 
    <div className={`stats_cards ${styles.container}`}>
        {desktopsStatsConfig.map((item) => (
                    <StatCard key={item._id} data={item} />
                ))}
    </div>
  )
}

export default DesktopsStats
