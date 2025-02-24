import { useMemo } from "react";
import sampleDesignationsDetails from "../utils/seeds";
import styles from "../styles/index.module.css";

const useDesignationsDetails = (data = sampleDesignationsDetails) => {
    const designationDetailsConfig = useMemo(
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
        designationDetailsConfig,
    };
};

export default useDesignationsDetails;
