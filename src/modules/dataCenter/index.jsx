import { DataCenterInfoForm } from "./components/Form";
import styles from "./styles/index.module.css";

const DataCenter = () => {
    return (
        <div className={styles.container}>
            <DataCenterInfoForm />
        </div>
    );
};

export default DataCenter;
