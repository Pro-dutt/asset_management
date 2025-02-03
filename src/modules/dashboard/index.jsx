import React from 'react'
import styles from './index.module.css'
import Charts from './components/analytics/charts'
import Desktops from '../desktops'
import DashboardStats from './components/analytics/stats'
import DashboardProgressCard from './components/analytics/progressCard'

const Dashboard = () => {
  return (
    <div className={styles.main_container}>
      <DashboardStats/>
    <div style={{display: 'flex'}}>
        <Charts/> 
        <DashboardProgressCard/>
    </div>
      {/* <Desktops /> */}
    </div>

    );
};

export default Dashboard;
