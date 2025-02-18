"use client";
import ChangePasswordForm from "./components/changePasswordForm";
import AuthBanner from "../../components/banner";
import AuthHeader from "../../components/header";

export default function ChangePasswordPage() {
    return (
        <div className="auth_container">
            <AuthBanner />
            <div className="form_side">
                <div className="auth_form_container">
                    <AuthHeader subHeading={"Please fill this form to change password"} />
                    <ChangePasswordForm />
                </div>
            </div>
        </div>
    );
}
