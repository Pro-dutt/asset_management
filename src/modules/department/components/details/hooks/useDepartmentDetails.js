import { useMemo } from "react";
import sampleDepartmentsDetails from "../utils/seeds";
import styles from "../styles/index.module.css";

const useDepartmentsDetails = (data = sampleDepartmentsDetails) => {
    const departmentDetailsConfig = useMemo(
        () => [
            {
                body: {
                    Name: data?.name,
                },
                grid: 1,
            },
        ],
        [data]
    );

    return {
        departmentDetailsConfig,
    };
};

export default useDepartmentsDetails;
