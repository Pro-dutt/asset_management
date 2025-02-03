import React from 'react';
import styles from "./styles/index.module.css";
import "./styles/index.css";
import EChartsDoughnut from '@/components/eCharts/DoughnutChart';
import useDashboardDoughnut from './hooks/useDashboardDoughnut';

const DashboardDoughnut = () => {
    const {dashboardDoughnutConfig} = useDashboardDoughnut();
  return ( 
  <div className={styles.container}>

     <EChartsDoughnut options={dashboardDoughnutConfig}/>
  </div>
  )
}

export default DashboardDoughnut
