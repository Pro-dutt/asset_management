import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, items }) => {
    if (!items || items.length === 0) return null;

    return (
        <nav aria-label="breadcrumb" className={styles.breadcrumbContainer}>
            <h2>{title}</h2>
            <ol className={styles.breadcrumb}>
                {items.map((item, index) => (
                    <li key={index} className={index === items.length - 1 ? styles.active : styles.item}>
                        {index !== items.length - 1 ? (
                            <Link to={item.url} className={styles.link}>
                                {item.label}
                            </Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
