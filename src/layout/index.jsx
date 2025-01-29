import React from "react";
import styles from "./styles/index.module.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.body}>
                <Navbar />
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
