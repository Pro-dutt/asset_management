import React from 'react';
import styles from "./styles/index.module.css";
import "./styles/index.css";
import EChartsDoughnut from '@/components/eCharts/DoughnutChart';
import useDashboardBar from './hooks/useDashboardBar';
import EChartsBar from '@/components/eCharts/barChart';

const DashboardBar = () => {
    const {dashboardBarConfig} = useDashboardBar();
  return ( 
  <div className={styles.container}>

     <EChartsBar options={dashboardBarConfig}/>
  </div>
  )
}

export default DashboardBar
