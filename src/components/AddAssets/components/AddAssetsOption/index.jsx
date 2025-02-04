import GlobalUtils from "@/lib/utils";
import GlobalICONS from "@/lib/utils/icons";
import React from "react";
import styles from "./index.module.css";
import AssetOptionCard from "../AssetsOptionCard";
const AddAssetsOptions = ({ setForm, module }) => {
    const handleFormSelection = () => {
        setForm("manualForm");
    };
    return (
        <div className={styles.popupContainer}>
            <div className={styles.imageWrapper}>
                <img src="/addItem.png" alt="Add asset" />
            </div>
            <div className={styles.popupContent}>
                <h5>Create A New {GlobalUtils.capitalizeEachWord(module.name)}</h5>
                <p>Create {module.name} in your service desk using the options below.</p>
            </div>
            <div className={styles.optionsList}>
                <AssetOptionCard
                    icon={GlobalICONS.SETTING}
                    title={`Scan and Discover ${GlobalUtils.capitalizeEachWord(module.name)}`}
                    subtitle={`Automatically detect and record new ${module.name}`}
                />
                <AssetOptionCard icon={GlobalICONS.IMPORT} title="Import Using CSV" subtitle={`Upload ${module.name} information in bulk`} />
                <AssetOptionCard
                    onClick={handleFormSelection}
                    icon={GlobalICONS.CREATE}
                    title={`Create ${GlobalUtils.capitalizeEachWord(module.name)} Manually`}
                    subtitle={`Use an ${module.name} form to add ${module.name}`}
                />
            </div>
        </div>
    );
};

export default AddAssetsOptions;
