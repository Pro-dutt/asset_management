import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useAuth } from "@/services/context/auth";
import { useNavigate } from "react-router";

const AuthLayout = ({ children }) => {
    const { getCurrentUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        getCurrentUser.fetch({
            params: {},
            options: {
                showNotification: false,
            },
            onSuccess: () => navigate("/"),
        });
    }, []);

    return (
        <div id="auth_module" className={styles.container}>
            {children}
        </div>
    );
};

export default AuthLayout;
