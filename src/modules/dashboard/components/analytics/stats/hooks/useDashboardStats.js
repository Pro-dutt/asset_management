import { useMemo } from "react";
import sampleDashboardStatsData from "../utils/seeds";
import GlobalICONS from "@/lib/utils/icons";

const useDashboardStats = (data = sampleDashboardStatsData) => {
    const dashboardStatsConfig = useMemo(
        () => [
            {
                title: "Laptop",
                value: data?.totalLaptops,
                subTitle: "Total Laptops",
                icon: GlobalICONS.LAPTOP,
                hasDecrement: false,
                hasIncrement: true,
                color: "orange"

            },
            {
                title: "Desktop",
                value: data?.totalDesktops,
                subTitle: "Total Desktop",
                icon: GlobalICONS.DESKTOP,
                hasDecrement: false,
                hasIncrement: true,
                color: "violet"
            },
            {
                title: "Network Device",
                value: data?.totalNetworkDevices,
                subTitle: "Total Network Device",
                icon: GlobalICONS.NETWORKING_DEVICE,
                hasDecrement: true,
                hasIncrement: false,
                color: "red"

            },
            {
                title: "Virtual Machine",
                value: data?.totalVitualMachines,
                subTitle: "Total Virtual Machine",
                icon: GlobalICONS.VIRTUAL_MACHINE,
                hasDecrement: false,
                hasIncrement: false,
                color: "green"

            },
        ],
        [data]
    );
    return {
        dashboardStatsConfig,
    };
};

export default useDashboardStats;
