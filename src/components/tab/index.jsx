import React from "react";
import styles from "./index.module.css";

const Tab = ({ tab, onTabChange, tabItem = [{ label: " Hardware Assets", totalCount: 10, value: 1 }] }) => {
    return (
        <div className={`${styles.tabs} tabs`}>
            {tabItem.map((item) => (
                <h4
                    onClick={() => {
                        onTabChange(item.value);
                    }}
                    className={tab === item.value && styles.active}
                >
                    <p>
                        {item.label} {item.totalCount && <span>{item.totalCount || 0}</span>}
                    </p>
                </h4>
            ))}
        </div>
    );
};

export default Tab;
