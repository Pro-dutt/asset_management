import React, { useState } from "react";
import styles from "./index.module.css";
import StatCard from "@/components/Card/StatCard";
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
                iconColor: "orange"

            },
            {
                _id: "6486cae1284e1728606f902c",
                title: "Desktop",
                value: "100",
                subTitle: "Total Desktop",
                icon: GlobalICONS.DESKTOP,
                hasDecrement: false,
                hasIncrement: true,
                iconColor: "blue"
            },
            {
                _id: "6486cae1284e1728606f902c",
                title: "Network Device",
                value: "50",
                subTitle: "Total Network Device",
                icon: GlobalICONS.NETWORKING_DEVICE,
                hasDecrement: true,
                hasIncrement: false,
                iconColor: "red"

            },
            {
                _id: "6486cae1284e1728606f902c",
                title: "Virtual Machine",
                value: "50",
                subTitle: "Total Virtual Machine",
                icon: GlobalICONS.DESKTOP,
                hasDecrement: false,
                hasIncrement: false,
                iconColor: "green"

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
