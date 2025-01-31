import React, { useState } from "react";
import styles from "./index.module.css";
import StatCard from "@/components/Card/StatCard";
import GlobalICONS from "@/lib/utils/icons";
import GlobalUtils from "@/lib/utils";
import EChartsComponent from "@/components/Echarts";

const Charts = () => {
    const data = [
        {
            value: 0,
            category: "Rating 1",
        },
        {
            value: 0,
            category: "Rating 2",
        },
        {
            value: 0,
            category: "Rating 3",
        },
        {
            value: 0,
            category: "Rating 4",
        },
        {
            value: 0,
            category: "Rating 5",
        },
    ];
    const chartData = GlobalUtils.pieChartOptions("Total Assets", data, "projects");

    return (
            <div className={styles.stats_cards}>
                  <EChartsComponent options={chartData} />
                  <EChartsComponent options={chartData} />
                  <EChartsComponent options={chartData} />
                  <EChartsComponent options={chartData} />
            </div>
    );
};

export default Charts;
