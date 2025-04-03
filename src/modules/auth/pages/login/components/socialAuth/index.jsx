import React from "react";
import AuthICONS from "../../../../utils/icons";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const SocialAuth = () => {
    const SOCIAL_PROVIDERS = [
        {
            Icon: AuthICONS.FACEBOOK,
            color: "#497CE2",
            alt: "Facebook Login",
        },
        {
            Icon: AuthICONS.TWITTER,
            color: "#1DA1F2",
            alt: "Twitter Login",
        },
        {
            Icon: AuthICONS.GITHUB,
            color: "#333333",
            alt: "GitHub Login",
        },
        {
            Icon: AuthICONS.GOOGLE,
            color: "#DD4B39",
            alt: "Google Login",
        },
    ];
    return (
        <motion.div className={styles.socialLogin} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            {SOCIAL_PROVIDERS.map(({ Icon, color, alt }, index) => (
                <motion.button key={index} className={styles.socialButton} whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(115, 103, 240, 0.2)" }} whileTap={{ scale: 0.95 }} aria-label={alt}>
                    <span style={{ color }} className={styles.auth_icon}>
                        {Icon}
                    </span>
                </motion.button>
            ))}
        </motion.div>
    );
};

export default SocialAuth;
