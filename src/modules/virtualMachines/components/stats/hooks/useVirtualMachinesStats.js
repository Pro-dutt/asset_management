import { useMemo } from "react";
import sampleVirtualMachinesStatsData from "../utils/seeds";
import GlobalICONS from "@/lib/utils/icons";


const useVirtualMachinesStats = (data = sampleVirtualMachinesStatsData) => {
    const virtualMachinesStatsConfig = useMemo(
        () => [
            {
                title: "In-Store",
                value: data?.inStore,
                subTitle: "Total In-Store",
                icon: GlobalICONS.WAREHOUSE,
                hasDecrement: false,
                hasIncrement: true,
                color: "green"
            },
            {
                title: "In-Use",
                value: data?.inUse,
                subTitle: "Total In-Use",
                icon: GlobalICONS.IN_USE,
                hasDecrement: false,
                hasIncrement: true,
                color: "violet"
            },
            {
                title: "Not in support",
                value: data?.notInSupport,
                subTitle: "Total Not in support",
                icon: GlobalICONS.NOT_IN_SUPPORT,
                hasDecrement: true,
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
        virtualMachinesStatsConfig,
    };
};

export default useVirtualMachinesStats;
