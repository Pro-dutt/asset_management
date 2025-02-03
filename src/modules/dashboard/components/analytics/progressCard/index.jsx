import React from 'react';
import styles from "./styles/index.module.css";
import useDashboardProgressCard from './hooks/useDashboardProgressCard';
import "./styles/index.css";
import ProgressCard from '@/components/Card/ProgressCard';

const DashboardProgressCard = () => {
    const {dashboardProgressCardConfig} = useDashboardProgressCard();

  return ( <div className={styles.container}>
     <ProgressCard data={dashboardProgressCardConfig} cardTitle={"Assets Usage"}/>
  </div>
  )
}

export default DashboardProgressCard
