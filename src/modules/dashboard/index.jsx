import React from 'react'
import styles from './index.module.css'
import DashboardAnalytics from './components/analytics'
// import Desktops from '../desktops';

const Dashboard = () => {


  return (
    <div className={styles.main_container}>
      <DashboardAnalytics/>

      {/* <Desktops /> */}
    </div>

    );
};

export default Dashboard;
