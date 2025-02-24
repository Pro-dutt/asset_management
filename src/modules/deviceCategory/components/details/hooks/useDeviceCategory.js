import { useMemo } from "react";
import sampleDeviceCategoryDetails from "../utils/seeds";
import styles from "../styles/index.module.css";

const useDeviceCategoryDetails = (data = sampleDeviceCategoryDetails) => {
    const deviceCategoryDetailsConfig = useMemo(
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
        deviceCategoryDetailsConfig,
    };
};

export default useDeviceCategoryDetails;
