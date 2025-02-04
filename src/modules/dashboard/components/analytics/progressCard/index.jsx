import React from 'react';
import styles from "./styles/index.module.css";
import useDashboardProgressCard from './hooks/useDashboardProgressCard';
import ProgressCard from '@/components/Card/ProgressCard';

const DashboardProgressCard = () => {
    const {dashboardProgressCardConfig} = useDashboardProgressCard();

  return ( 
    <ProgressCard data={dashboardProgressCardConfig} cardTitle={"Assets Usage"}/>
  )
}

export default DashboardProgressCard
