import React from 'react';
import styles from "./styles/index.module.css";
import useDashboardStats from './hooks/useDashboardStats';
import "./styles/index.css";
import Stats from '@/components/stats';

const DashboardStats = () => {
    const {dashboardStatsConfig} = useDashboardStats();

  return ( <div className={styles.container}>
     <Stats data={dashboardStatsConfig}/>
  </div>
  )
}

export default DashboardStats
