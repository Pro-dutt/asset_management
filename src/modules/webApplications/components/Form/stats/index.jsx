import React from 'react';
import styles from "./styles/index.module.css";
import useVirtualMachinesStats from './hooks/useVirtualMachinesStats';
import "./styles/index.css";
import Stats from '@/components/stats';
const WebApplicationsStats = () => {
    const {virtualMachinesStatsConfig} = useVirtualMachinesStats();

  return ( <div className={styles.container}>
     <Stats data={virtualMachinesStatsConfig}/>
  </div>
  )
}

export default WebApplicationsStats
