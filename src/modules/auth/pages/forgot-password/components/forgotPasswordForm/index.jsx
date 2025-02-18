import DynamicForm from "@/components/form";
import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import { useAuth } from "@/services/context/auth";
import SuccessText from "@/components/SuccessText";

const ForgotPasswordForm = () => {
    const { forgotPassword } = useAuth();

    const handleSubmit = async (formData) => {
        forgotPassword.execute({ payload: formData });
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
        ],
        []
    );

    const formButtons = [
        {
            label: "Send Reset Link",
            type: "Submit",
            fullWidth: true,
            loading: forgotPassword.isLoading,
        },
    ];

    return (
        <>
            <DynamicForm formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />
            <SuccessText message={forgotPassword.successMessages} />
        </>
    );
};

export default ForgotPasswordForm;
