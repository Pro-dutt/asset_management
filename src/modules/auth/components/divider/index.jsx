import React from "react";
import styles from "./index.module.css";

const Divider = ({ text = "or" }) => {
    return (
        <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span>{text}</span>
        </div>
    );
};

export default Divider;
