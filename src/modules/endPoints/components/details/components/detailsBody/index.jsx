import React from "react";
import styles from "./index.module.css";

const DetailsBody = ({ data }) => {
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

    const renderValue = (value) => {
        if (typeof value === "object" && value !== null && "label" in value && "value" in value) {
            // If the value is an object with "label" and "value" keys
            return (
                <span>
                    {formatText(value.label)}: {value.value || "N/A"}
                </span>
            );
        } else if (typeof value === "string" || typeof value === "number") {
            // If the value is a string or number
            return <span>{String(value).replace(/wazuh/gi, "")}</span>;
        }
        return null;
    };

    const renderListItems = () => {
        if (Array.isArray(data)) {
            // If data is an array of objects with "label" and "value"
            return data.map((item, index) => (
                <li key={index}>
                    <span>{item.label || "Unknown Label"}</span> <span>{item.value || "N/A"}</span>
                </li>
            ));
        } else if (typeof data === "object" && data !== null) {
            // If data is an object
            return Object.entries(data)
                .map(([key, value]) =>
                    key !== "_id" ? (
                        <li key={key}>
                            <span>{formatText(key)}</span> {renderValue(value)}
                        </li>
                    ) : null
                )
                .filter(Boolean);
        }
        return null;
    };

    return (
        <div className={styles.container}>
            <ul>{renderListItems()}</ul>
        </div>
    );
};

export default DetailsBody;
