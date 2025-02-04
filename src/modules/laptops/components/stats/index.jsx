import React from 'react';
import styles from "./styles/index.module.css";
import useLaptopsStats from './hooks/useLaptopsStats';
import "./styles/index.css";
import Stats from '@/components/stats';
const LaptopsStats = () => {
    const {laptopsStatsConfig} = useLaptopsStats();

  return ( <div className={styles.container}>
     <Stats data={laptopsStatsConfig}/>
  </div>
  )
}

export default LaptopsStats
