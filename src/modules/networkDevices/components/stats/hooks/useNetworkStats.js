import { useMemo } from "react";
import sampleNetworkStatsData from "../utils/seeds";
import GlobalICONS from "@/lib/utils/icons";


const useNetworkStats = (data = sampleNetworkStatsData) => {
    const networkStatsConfig = useMemo(
        () => [
            {
                title: "Firewall",
                value: data?.firewall,
                subTitle: "Total Firewalls",
                icon: GlobalICONS.FIREWALL,
                hasDecrement: false,
                hasIncrement: false,
                color: "green"
            },
            {
                title: "Switches",
                value: data?.switches,
                subTitle: "Total Switches",
                icon: GlobalICONS.SWITCH,
                hasDecrement: false,
                hasIncrement: false,
                color: "violet"
            },
            {
                title: "Not in support",
                value: data?.notInSupport,
                subTitle: "Total not in support",
                icon: GlobalICONS.NOT_IN_SUPPORT,
                hasDecrement: false,
                hasIncrement: false,
                color: "orange"

            },
            {
                title: "Expired",
                value: data?.expired,
                subTitle: "Total Expired",
                icon: GlobalICONS.EXPIRED,
                hasDecrement: false,
                hasIncrement: false,
                color: "red"
            },
        ],
        [data]
    );
    console.log(data);
    return {
        networkStatsConfig,
    };
};

export default useNetworkStats;
