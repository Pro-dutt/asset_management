import React, { useEffect } from "react";
import styles from "./styles/index.module.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useAuth } from "@/services/context/auth";
import { useNavigate } from "react-router";

const Layout = ({ children }) => {
    const { getCurrentUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        getCurrentUser.fetch({
            params: {},
            onError: () => navigate("/auth/login"),
        });
    }, []);

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
