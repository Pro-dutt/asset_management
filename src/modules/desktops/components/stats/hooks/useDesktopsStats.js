import { useMemo } from "react";
import sampleDesktopsStatsData from "../utils/seeds";
import GlobalICONS from "@/lib/utils/icons";

const useDesktopsStats = (data = sampleDesktopsStatsData) => {
    const desktopsStatsConfig = useMemo(
        () => [
            {
                title: "In-Store",
                value: data.inStore || 0,
                subTitle: "Total In Store",
                icon: GlobalICONS.WAREHOUSE,
                hasDecrement: false,
                hasIncrement: true,
                color: "green",
            },
            {
                title: "In-Use",
                value: data?.inUse || 0,
                subTitle: "Total In Use",
                icon: GlobalICONS.IN_USE,
                hasDecrement: false,
                hasIncrement: true,
                color: "violet",
            },
            {
                title: "Not in support",
                value: data.notInSupport || 0,
                subTitle: "Total not in support",
                icon: GlobalICONS.NOT_IN_SUPPORT,
                hasDecrement: true,
                hasIncrement: false,
                color: "orange",
            },
            {
                title: "Expired",
                value: data?.expired || 0,
                subTitle: "Total Expired",
                icon: GlobalICONS.EXPIRED,
                hasDecrement: false,
                hasIncrement: false,
                color: "red",
            },
        ],
        [data]
    );
    //console.log(data);
    return {
        desktopsStatsConfig,
    };
};

export default useDesktopsStats;
