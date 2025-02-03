import React from 'react';
import styles from "./styles/index.module.css";
import useDesktopsStats from './hooks/useDesktopsStats';
import "./styles/index.css";
import Stats from '@/components/stats';
const DesktopsStats = () => {
    const {desktopsStatsConfig} = useDesktopsStats();

  return ( <div className={styles.container}>
     <Stats data={desktopsStatsConfig}/>
  </div>
  )
}

export default DesktopsStats
