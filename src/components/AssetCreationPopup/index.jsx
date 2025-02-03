import GlobalICONS from "@/lib/utils/icons";
import styles from "./index.module.css";

const AssetCreationPopup = () => {
    return (
        <div className={styles.popupContainer}>
            <div className={styles.imageWrapper}>
                <img src="/addItem.png" alt="Add asset" />
            </div>
            <div className={styles.popupContent}>
                <h5>Create Your First Asset</h5>
                <p>Create assets in your service desk using the options below.</p>
            </div>
            <div className={styles.optionsList}>
                <AssetOptionCard icon={GlobalICONS.SETTING} title="Scan and Discover Assets" subtitle="Automatically detect and record new assets" />
                <AssetOptionCard icon={GlobalICONS.IMPORT} title="Import Using CSV" subtitle="Upload asset information in bulk" />
                <AssetOptionCard icon={GlobalICONS.CREATE} title="Create Assets Manually" subtitle="Use an asset form to add assets" />
            </div>
        </div>
    );
};

const AssetOptionCard = ({ icon, title, subtitle }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardContentWrapper}>
                <div className={styles.cardIcon}>{icon}</div>
                <div className={styles.cardTextContent}>
                    <h5>
                        {title} {GlobalICONS.LONG_RIGHT_ARROW}
                    </h5>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default AssetCreationPopup;
