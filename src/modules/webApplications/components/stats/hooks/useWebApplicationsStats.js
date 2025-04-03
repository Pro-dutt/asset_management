import { useMemo } from "react";
import sampleWebApplicationsStatsData from "../utils/seeds";
import GlobalICONS from "@/lib/utils/icons";

const useWebApplicationsStats = (data = sampleWebApplicationsStatsData) => {
    const webApplicationsStatsConfig = useMemo(
        () => [
            {
                title: "Web Applications",
                value: data?.totalApplication || 0,
                subTitle: "Total Web Applications",
                icon: GlobalICONS.WEB_APPLICATION,
                hasDecrement: false,
                hasIncrement: true,
                color: "green",
            },
            {
                title: "Public Facing",
                value: data?.publicFacing || 0,
                subTitle: "Total Public Facing",
                icon: GlobalICONS.PUBLIC_FACING,
                hasDecrement: false,
                hasIncrement: true,
                color: "violet",
            },
            {
                title: "Internal Facing",
                value: data?.internalFacing || 0,
                subTitle: "Total Internal Facing",
                icon: GlobalICONS.INTERNAL_FACING,
                hasDecrement: true,
                hasIncrement: false,
                color: "orange",
            },
            {
                title: "Restricted",
                value: data?.restricted || 0,
                subTitle: "Total Restricted",
                icon: GlobalICONS.RESTRICTED,
                hasDecrement: false,
                hasIncrement: false,
                color: "red",
            },
        ],
        [data]
    );
    //console.log(data);
    return {
        webApplicationsStatsConfig,
    };
};

export default useWebApplicationsStats;
