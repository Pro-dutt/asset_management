import React from "react";
import styles from "./index.module.css";

const Details = ({ data }) => {
    const formatText = (input) => {
        return input
            .replace(/wazuh/gi, "")
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
            .replace(/([a-z\d])([A-Z])/g, "$1 $2")
            .replace(/_/g, " ")
            .replace(/^\s*/, "")
            .replace(/\b\w/g, (char) => char.toUpperCase())
            .replace(/\b(Ip|ip)\b/g, "IP");
    };
    return (
        <ul className={styles.container}>
            {Object.entries(data || {})
                .map(([key, value]) =>
                    (typeof value === "string" || typeof value === "number") && key !== "_id" ? (
                        <li key={key}>
                            <span>{formatText(key)}:</span> <span>{String(value).replace(/wazuh/gi, "")}</span>
                        </li>
                    ) : null
                )
                .filter(Boolean)}
        </ul>
    );
};

export default Details;
