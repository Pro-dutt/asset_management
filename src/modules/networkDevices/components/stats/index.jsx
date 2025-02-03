import React from 'react';
import styles from "./styles/index.module.css";
import useNetworkStats from './hooks/useNetworkStats';
import "./styles/index.css";
import Stats from '@/components/stats';
const NetworkStats = () => {
    const {networkStatsConfig} = useNetworkStats();

  return ( 
<div>
  <Stats data={networkStatsConfig}/>
    
    <div className={styles.container}>
    </div>
  </div>
  )
}

export default NetworkStats
