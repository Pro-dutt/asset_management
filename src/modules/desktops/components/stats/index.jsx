import React from 'react';
import styles from "./styles/index.module.css";
import useDesktopsStats from './hooks/useDesktopsStats';
import StatCard from '@/components/Card/StatCard';
import "./styles/index.css";
import Stats from '@/components/stats';
const DesktopsStats = () => {
    const {desktopsStatsConfig} = useDesktopsStats();

  return ( 
    <Stats data={desktopsStatsConfig}/>
  )
}

export default DesktopsStats
