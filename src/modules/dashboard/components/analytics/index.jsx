import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import DashboardStats from "./stats";
import DashboardProgressCard from "./progressCard";
import DashboardPie from "./charts/pie";
import DashboardPieNest from "./charts/pieNest";
import DashboardDoughnut from "./charts/doughnut";
import DashboardBar from "./charts/bar";

const DashboardAnalytics = () => {
 
  return (
    <>
      <div className={styles.container}>
        <DashboardStats />
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row"}}>
        <DashboardPie/>
        <DashboardDoughnut/>
        <DashboardBar/>
      </div>
  
        <DashboardPieNest/>

      <div style={{ display: "flex" }}>
        <DashboardProgressCard />
      </div>
    </>
  );
};

export default DashboardAnalytics;
