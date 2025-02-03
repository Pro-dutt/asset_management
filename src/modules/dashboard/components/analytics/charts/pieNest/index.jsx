import React from 'react';
import styles from "./styles/index.module.css";
import "./styles/index.css";
import EChartsPieNest from '@/components/eCharts/pieNestChart';
import useDashboardPieNest from './hooks/useDashboardPieNest';

const DashboardPieNest = () => {
    const {dashboardPieNestConfig} = useDashboardPieNest();
  return ( 
  <div className={styles.container}>

     <EChartsPieNest options={dashboardPieNestConfig}/>
  </div>
  )
}

export default DashboardPieNest
