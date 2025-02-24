import { useMemo } from "react";
import sampleOperatingSystemsDetails from "../utils/seeds";
import styles from "../styles/index.module.css";

const useOperatingSystemsDetails = (data = sampleOperatingSystemsDetails) => {
    const operatingSystemDetailsConfig = useMemo(
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
        operatingSystemDetailsConfig,
    };
};

export default useOperatingSystemsDetails;
