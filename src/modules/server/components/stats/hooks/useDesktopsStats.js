import { useMemo } from "react";
import sampleDesktopsStatsData from "../utils/seeds";
import GlobalICONS from "@/lib/utils/icons";


const useDesktopsStats = (data = sampleDesktopsStatsData) => {
    const desktopsStatsConfig = useMemo(
        () => [
            {
                title: "Laptop",
                value: data.laptops,
                subTitle: "Total Laptops",
                icon: GlobalICONS.LAPTOP,
                hasDecrement: false,
                hasIncrement: true,
                color: "orange"

            },
            {
                _id: "6486cae1284e1728606f902c",
                title: "Desktop",
                value: data?.desktops,
                subTitle: "Total Desktop",
                icon: GlobalICONS.DESKTOP,
                hasDecrement: false,
                hasIncrement: true,
                color: "violet"
            },
            {
                _id: "6486cae1284e1728606f902c",
                title: "Network Device",
                value: data.networkDevices,
                subTitle: "Total Network Device",
                icon: GlobalICONS.NETWORKING_DEVICE,
                hasDecrement: true,
                hasIncrement: false,
                color: "red"

            },
            {
                _id: "6486cae1284e1728606f902c",
                title: "Virtual Machine",
                value: data?.virtualMachines,
                subTitle: "Total Virtual Machine",
                icon: GlobalICONS.DESKTOP,
                hasDecrement: false,
                hasIncrement: false,
                color: "green"

            },
        ],
        [data]
    );
    console.log(data);
    return {
        desktopsStatsConfig,
    };
};

export default useDesktopsStats;
