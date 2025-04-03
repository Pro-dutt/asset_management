import DynamicForm from "@/components/form";
import React, { useMemo } from "react";
import { useAuth } from "@/services/context/auth";
import { useNavigate, useParams } from "react-router";

const ChangePasswordForm = () => {
    const { changePassword } = useAuth();
    const navigate = useNavigate();
    const { token } = useParams();
    const handleSubmit = async (formData) => {
        await changePassword.execute({
            payload: {
                newPassword: formData.newPassword,
                token,
            },
            onSuccess: () => navigate("/auth/login"),
        });
    };

    const formData = useMemo(
        () => [
            {
                name: "newPassword",
                label: "New password",
                type: "password",
                placeholder: "****************",
                grid: 1,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "password",
                name: "confirmPassword",
                label: "Confirm Password",
                placeholder: "****************",
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
            label: "Change Password",
            type: "Submit",
            fullWidth: true,
            loading: changePassword.isLoading,
        },
    ];

    return <DynamicForm formId="change-password-form" formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />;
};

export default ChangePasswordForm;
