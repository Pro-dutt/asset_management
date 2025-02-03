import React from 'react';
import styles from "./styles/index.module.css";
import useWebApplicationsStats from './hooks/useWebApplicationsStats';
import "./styles/index.css";
import Stats from '@/components/stats';
const WebApplicationsStats = () => {
    const {webApplicationsStatsConfig} = useWebApplicationsStats();

  return ( <div className={styles.container}>
     <Stats data={webApplicationsStatsConfig}/>
  </div>
  )
}

export default WebApplicationsStats
