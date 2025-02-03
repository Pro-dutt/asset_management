import { ServerInfoForm } from "./components/Form";
import ServersStats from "./components/stats";
import styles from "./styles/index.module.css";

const Server = () => {
    return (
        <div className={styles.container}>
            <ServersStats/>
            <ServerInfoForm />
        </div>
    );
};

export default Server;
