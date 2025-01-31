import { NetworkDeviceInfoForm } from "./components/Form";
import styles from "./styles/index.module.css";

const NetworkDevice = () => {
    return (
        <div className={styles.container}>
            <NetworkDeviceInfoForm />
        </div>
    );
};

export default NetworkDevice;
