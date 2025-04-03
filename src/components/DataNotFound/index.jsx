import React from "react";
import styles from "./index.module.css";

const DataNotFound = ({ message = "No Data Available", imageUrl = require("./Assets/empty.png"), textStyle = {} }) => {
    return (
        <div className={styles.container}>
            <img src={imageUrl} alt="No data found" className={styles.image} />
            <h3 className={styles.message} style={textStyle}>
                {message}
            </h3>
        </div>
    );
};

export default DataNotFound;
