import React from 'react';
import styles from "./styles/index.module.css";
import useServersStats from './hooks/useServersStats';
import "./styles/index.css";
import Stats from '@/components/stats';
const ServersStats = () => {
    const {serversStatsConfig} = useServersStats();

  return ( <div className={styles.container}>
     <Stats data={serversStatsConfig}/>
  </div>
  )
}

export default ServersStats
