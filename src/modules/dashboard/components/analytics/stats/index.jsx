import React, { useState } from "react";
import styles from "./index.module.css";
import StatCard from "@/components/Card/ProgressCard";
import GlobalICONS from "@/lib/utils/icons";

const Stats = () => {
    const StatData = {
        data: [
            {
                _id: "6486cae1284e1728606f902c",
                title: "Laptop",
                value: "567",
                subTitle: "Total Laptops",
                icon: GlobalICONS.LAPTOP,
                hasDecrement: false,
                hasIncrement: true,
                color: "orange"

            },
            {
                _id: "6486cae1284e1728606f902c",
                title: "Desktop",
                value: "100",
                subTitle: "Total Desktop",
                icon: GlobalICONS.DESKTOP,
                hasDecrement: false,
                hasIncrement: true,
                color: "violet"
            },
            {
                _id: "6486cae1284e1728606f902c",
                title: "Network Device",
                value: "50",
                subTitle: "Total Network Device",
                icon: GlobalICONS.NETWORKING_DEVICE,
                hasDecrement: true,
                hasIncrement: false,
                color: "red"

            },
            {
                _id: "6486cae1284e1728606f902c",
                title: "Virtual Machine",
                value: "50",
                subTitle: "Total Virtual Machine",
                icon: GlobalICONS.DESKTOP,
                hasDecrement: false,
                hasIncrement: false,
                color: "green"

            },
        ],
    };

    return (
            <div className={styles.stats_cards}>
                {StatData.data.map((item) => (
                    <StatCard key={item._id} data={item} />
                ))}
            </div>
    );
};

export default Stats;
