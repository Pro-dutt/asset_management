import DynamicForm from "@/components/form";
import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import { useAuth } from "@/services/context/auth";
import { useNavigate } from "react-router";

const LoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (formData) => {
        await login.execute({ payload: formData, onSuccess: () => (window.location.href = "/") });
    };

    const formData = useMemo(
        () => [
            {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "john@example.com",
                grid: 1,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "password",
                name: "password",
                label: "Password",
                grid: 1,
                validationRules: {
                    required: true,
                },
            },
            {
                name: "rememberMe",
                type: "checkbox",
                label: (
                    <div className={styles.remember_me_container}>
                        <label htmlFor="remember">Remember me</label>
                        <a href="/auth/forgot-password" className={styles.forgotPassword}>
                            Forgot Password?
                        </a>
                    </div>
                ),
                className: styles.checkbox_container,
                grid: 1,
            },
        ],
        []
    );

    const formButtons = [
        {
            label: "Login",
            type: "Submit",
            fullWidth: true,
            loading: login.isLoading,
        },
    ];

    return <DynamicForm formId="login-form" formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />;
};

export default LoginForm;
