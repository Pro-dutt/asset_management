import React from "react";
import styles from "./index.module.css";

const RowHeaderField = ({ formField }) => {
    const { label, fontSize = "17px", className = "" } = formField;
    return (
        <div className={`${styles.container} ${className}`}>
            <p className={styles.rowHeader} style={{ fontSize }}>
                {label}
            </p>
            <div className={styles.border}></div>
        </div>
    );
};

export default RowHeaderField;
