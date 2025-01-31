import styles from "./styles/index.module.css";

const { WebApplicationInfoForm } = require("./components/Form");

const WebApplication = () => {
    return (
        <div className={styles.container}>
            <WebApplicationInfoForm />
        </div>
    );
};

export default WebApplication;
