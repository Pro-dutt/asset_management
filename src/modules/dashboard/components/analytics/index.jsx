import React, { useEffect } from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import DashboardStats from "./stats";
import DashboardProgressCard from "./progressCard";
import DashboardPie from "./charts/pie";
import DashboardDoughnut from "./charts/doughnut";
import DashboardBar from "./charts/bar";
import AssetsStatusCountChart from "./AssestClassification";
import { useCharts } from "@/services/context/charts";

const DashboardAnalytics = () => {
    const { chartsData } = useCharts();

    useEffect(() => {
        chartsData.execute({
            params: { module: "dashboard" },
        });
    }, []);

    return (
        <>
            <div className={styles.container}>
                <DashboardStats />
            </div>

            <div className={styles.dashboard_chart_row1}>
                <AssetsStatusCountChart
                    initialData={{
                        hardware: chartsData.data?.procurement?.hardware,
                        software: chartsData.data?.software?.hardware,
                        dataCenter: chartsData.data?.dataCenter,
                    }}
                />

                <DashboardProgressCard />
            </div>
            {/* <div className={styles.dashboard_chart_row1}>
                <DashboardDoughnut />

                <DashboardPie />
                <DashboardBar />
            </div> */}
            {/* <div className={styles.dashboard_chart_row2}>
                <DashboardPieNest />
            </div> */}
        </>
    );
};

export default DashboardAnalytics;
