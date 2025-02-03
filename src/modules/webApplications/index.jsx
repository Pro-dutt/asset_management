import WebApplicationsStats from "./components/Form/stats";
import styles from "./styles/index.module.css";

const { WebApplicationInfoForm } = require("./components/Form");

const WebApplication = () => {
    return (
        <div className={styles.container}>
            <WebApplicationsStats/>
            <WebApplicationInfoForm />
        </div>
    );
};

export default WebApplication;
