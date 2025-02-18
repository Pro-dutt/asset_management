import React from "react";
import { Route, Routes } from "react-router";
import AuthLayout from "./layout";
import LoginPage from "./pages/login/page";
import ForgotPasswordPage from "./pages/forgot-password/page";
import "./styles/index.css";
import ChangePasswordPage from "./pages/change-password/page";

const Auth = () => {
    return (
        <AuthLayout>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/change-password/:token" element={<ChangePasswordPage />} />
            </Routes>
        </AuthLayout>
    );
};

export default Auth;
