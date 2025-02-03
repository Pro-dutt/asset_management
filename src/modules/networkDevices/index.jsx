import { NetworkDeviceInfoForm } from "./components/Form";
import NetworkStats from "./components/stats";
import styles from "./styles/index.module.css";

const NetworkDevice = () => {
    return (
        <div className={styles.container}>
            <NetworkStats/>
            <NetworkDeviceInfoForm />
        </div>
    );
};

export default NetworkDevice;
