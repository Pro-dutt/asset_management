import { useMemo } from "react";
import sampleVirtualMachinesStatsData from "../utils/seeds";
import GlobalICONS from "@/lib/utils/icons";


const useVirtualMachinesStats = (data = sampleVirtualMachinesStatsData) => {
    const virtualMachinesStatsConfig = useMemo(
        () => [
            {
                title: "Virtual Machines",
                value: data?.totalVirtualMachines,
                subTitle: "Total Virtual Machines",
                icon: GlobalICONS.VIRTUAL_MACHINE,
                hasDecrement: false,
                hasIncrement: true,
                color: "green"
            },
            {
                title: "In-Production",
                value: data?.inProduction,
                subTitle: "Total In-Production",
                icon: GlobalICONS.IN_USE,
                hasDecrement: false,
                hasIncrement: true,
                color: "violet"
            },
            {
                title: "In-Staging",
                value: data?.inStaging,
                subTitle: "Total In-Staging",
                icon: GlobalICONS.NOT_IN_SUPPORT,
                hasDecrement: true,
                hasIncrement: false,
                color: "orange"

            },
            {
                title: "In-Development",
                value: data?.inDevelopment,
                subTitle: "Total In-Development",
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
