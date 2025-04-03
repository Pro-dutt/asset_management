"use client";
import styles from "./index.module.css";
import LoginForm from "./components/loginForm";
import AuthBanner from "../../components/banner";
import AuthHeader from "../../components/header";
import SocialAuth from "./components/socialAuth";
import Divider from "../../components/divider";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="auth_container">
            <AuthBanner bannerMainImage={require("./assets/images/4103163_1032.jpg")} />
            <div className="form_side">
                <div className="auth_form_container">
                    <AuthHeader subHeading={"Please sign-in to your account and start the adventure"} />
                    <LoginForm />

                    {/* <div className={styles.signupPrompt}>
                        <p>
                            New on our platform? <Link to="/auth/register">Create an account</Link>
                        </p>
                    </div> */}

                    {/* <Divider />
                    <SocialAuth /> */}
                </div>
            </div>
        </div>
    );
}
