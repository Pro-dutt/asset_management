import React from 'react'
import AnalyticsTable from './components/table'
import styles from './index.module.css'
import Stats from './components/analytics/stats'
import Charts from './components/analytics/charts'

const Dashboard = () => {
  return (
    <div className={styles.main_container}>
      <Stats/>
      {/* <Stats/> */}
      <Charts/>
      
      <AnalyticsTable/>
    </div>
  )
}

export default Dashboard
