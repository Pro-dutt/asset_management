import styles from "./styles/index.module.css";
import "./styles/index.css";
import { useState } from "react";
import useContent from "./hooks/useContent";

const AddAssets = ({ module = { name: "assets" } }) => {
    const [form, setForm] = useState();
    const { content } = useContent(form, module, setForm);

    return <div className={styles.container}>{content}</div>;
};

export default AddAssets;
