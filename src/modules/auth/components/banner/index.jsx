import React from "react";
import styles from "./index.module.css";
import defaultBannerMainImage from "../../assets/images/defaultBannerMain.png";
import defaultBannerFooterImage from "../../assets/images/defaultBannerFooter.png";
import logo from "../../../../layout/components/Sidebar/assets/logo.svg";

const AuthBanner = ({ bannerMainImage, bannerFooterImage, className }) => {
    return (
        <div className={`${styles.illustrationSide} ${className}`}>
            <div className={styles.branding}>
                <img src={logo} alt="C3ihub Logo" />
                <h2>C3IHUB</h2>
            </div>
            <img src={bannerMainImage || defaultBannerMainImage} alt="Login illustration" className={styles.illustration} />
            <img src={bannerFooterImage || defaultBannerFooterImage} alt="Login mask" className={styles.illustrationMask} />
        </div>
    );
};

export default AuthBanner;
