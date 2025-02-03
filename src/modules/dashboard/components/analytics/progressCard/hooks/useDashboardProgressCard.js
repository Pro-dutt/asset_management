import { useMemo } from "react";
import sampleDashboardProgressCardData from "../utils/seeds";
import GlobalICONS from "@/lib/utils/icons";

const useDashboardProgressCard = (data = sampleDashboardProgressCardData) => {
    const dashboardProgressCardConfig = useMemo(
        () => [
            {
                title: "Desktops",
                unit: "Desktop",
                total: data?.desktops?.total,
                used: data?.desktops?.used,
                remaining: data?.desktops?.remaining,
                percentage: Math.round(data?.desktops?.used / data?.desktops?.total * 100),
                icon: GlobalICONS.GREATER_THEN,
            },
            {
                title: "Laptops",
                unit: "Laptop",
                total: data?.laptops?.total,
                used: data?.laptops?.used,
                remaining: data?.laptops?.remaining,
                percentage: Math.round(data?.laptops?.used / data?.laptops?.total * 100),
                icon: GlobalICONS.GREATER_THEN,
            },

            {
                title: "Servers",
                unit: "Server",
                total: data?.servers?.total,
                used: data?.servers?.used,
                remaining: data?.servers?.remaining,
                percentage: Math.round(data?.servers?.used / data?.servers?.total * 100),
                icon: GlobalICONS.GREATER_THEN,
            },
            {
                title: "Network Devices",
                unit: "Network Device",
                total: data?.networkDevices?.total,
                used: data?.networkDevices?.used,
                remaining: data?.networkDevices?.remaining,
                percentage: Math.round(data?.networkDevices?.used / data?.networkDevices?.total * 100),
                icon: GlobalICONS.GREATER_THEN,
            },
            {
                title: "Licenses",
                unit: "License",
                total: data?.licenses?.total,
                used: data?.licenses?.used,
                remaining: data?.licenses?.remaining,
                percentage: Math.round(data?.licenses?.used / data?.licenses?.total * 100),
                icon: GlobalICONS.GREATER_THEN,
            },
        ],
        [data]
    );
    return {
        dashboardProgressCardConfig,
    };
};

export default useDashboardProgressCard;
