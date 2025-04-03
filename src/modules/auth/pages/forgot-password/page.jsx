"use client";
import styles from "./index.module.css";
import AuthBanner from "../../components/banner";
import AuthHeader from "../../components/header";
import bannerMainImage from "./assets/images/bannerMain.png";
import ForgotPasswordForm from "./components/forgotPasswordForm";
import GlobalICONS from "@/lib/utils/icons";

export default function ForgotPasswordPage() {
    return (
        <div className="auth_container">
            <AuthBanner bannerMainImage={bannerMainImage} className={styles.banner_container} />
            <div className="form_side">
                <div className="auth_form_container">
                    <AuthHeader heading={"Forgot Password? 🔒"} subHeading={"Enter your email and we'll send you instructions to reset your password"} />
                    <ForgotPasswordForm />

                    <div className={styles.signinPrompt}>
                        <p>
                            <a href="/auth/login">{GlobalICONS.BACK_ARROW}Back to login</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
