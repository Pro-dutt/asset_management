import React from "react";
import styles from "./styles/index.module.css";
import "./styles/index.css";
import useLaptopsDetails from "./hooks/useLaptopsDetails";
import Details from "@/components/details";

const LaptopDetails = ({ data }) => {
    const { laptopsDetailsConfig } = useLaptopsDetails(data);

    return (
        <div className={styles.container}>
            <Details data={laptopsDetailsConfig} />
        </div>
    );
};

export default LaptopDetails;
