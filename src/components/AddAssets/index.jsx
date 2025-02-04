import styles from "./styles/index.module.css";
import "./styles/index.css";
import { useState } from "react";
import AddAssetsOptions from "./components/AddAssetsOption";

const AddAssets = ({ module = { name: "assets", form } }) => {
    const [form, setForm] = useState();

    return form === "manualForm" ? module.form : <AddAssetsOptions module={module} setForm={setForm} />;
};

export default AddAssets;
