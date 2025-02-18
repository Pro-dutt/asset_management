import React, { useState } from "react";
import styles from "./index.module.css";
import Card from "./Card";
import DataNotFound from "../DataNotFound";
import GlobalICONS from "@/lib/utils/icons";
import globalConstants from "@/lib/utils/contants";

const GridView = ({ data, actionData }) => {
    // Console log to verify the incoming data
    //console.log(data);

    return (
        <>
            {Object.keys(data).length > 0 ? (
                <div className={styles.container}>
                    {Object.keys(data).map((statusKey, index) => {
                        const category = data[statusKey]; // Access the category (In-Store, In-Use, etc.)
                        return (
                            <div key={index}>
                                <div
                                    className={styles.column_header}
                                    style={{
                                        // backgroundColor: category.bgColor,
                                        color: category.color,
                                    }}
                                >
                                    <span>{category.icon}</span>
                                    <span>{category.title}</span>
                                </div>

                                <div className={styles.column_body}>
                                    {category.data.map((row, index) => (
                                        <Card key={index} data={row} actionData={actionData} color={category.color} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <DataNotFound />
            )}
        </>
    );
};

export default GridView;
