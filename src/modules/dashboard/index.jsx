import React from 'react'
import styles from './index.module.css'
import Stats from './components/analytics/stats'
import Charts from './components/analytics/charts'
import ProgressCard from '@/components/Card/ProgressCard'
import GlobalICONS from '@/lib/utils/icons'
import Desktops from '../desktops'

const Dashboard = () => {

  const progressCardTitle = "Assets Progress";
  const ProgressData = {
      data: [
          {
              _id: "6486cae1284e1728fd902c",
              title: "Total Laptops",
              unit: "Laptop",
              value: "200",
              percentage: "77",
              icon: GlobalICONS.GREATER_THEN,
          },
          {
              _id: "6486cae1284e1728fd6f902d",
              title: "Total Laptops",
              unit: "Laptop",
              value: "300",
              percentage: "70",
              icon: GlobalICONS.GREATER_THEN,
          },
          {
              _id: "6486cae1284e17286sdf6f902e",
              title: "Total Laptops",
              unit: "Laptop",
              value: "400",
              icon: GlobalICONS.GREATER_THEN,
              percentage: "50",
          },
          {
              _id: "6486cae1284e1728sdf6f902f",
              title: "Total Laptops",
              unit: "Laptop",
              value: "250",
              icon: GlobalICONS.GREATER_THEN,
              percentage: "10",
          },
          {
              _id: "6486cae1284e1728sdfsdf",
              title: "Total Laptops",
              unit: "Laptop",
              value: "250",
              icon: GlobalICONS.GREATER_THEN,
              percentage: "20",
          },
      ],
  };

  return (
    <div className={styles.main_container}>
      <Stats/>
      {/* <Stats/> */}
      <Charts/> 
      <ProgressCard data={ProgressData.data} cardTitle={progressCardTitle}/>
      <Desktops />
    </div>

    );
};

export default Dashboard;
