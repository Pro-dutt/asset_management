import GlobalUtils from "@/lib/utils";
import globalConstants from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";

const networkDeviceConstants = {
    DEVICE_CATEGORIES: GlobalUtils.createEnum([
        { key: "FIREWALL", value: "firewall", label: "Firewall" },
        { key: "SWITCH", value: "switch", label: "Switch" },
        { key: "ACCESS_POINT", value: "access-point", label: "Access Point (AP)" },
        { key: "ROUTER", value: "router", label: "Router" },
        { key: "WLC", value: "wlc", label: "Wireless LAN Controller (WLC)" },
        { key: "NETWORK_HUB", value: "network-hub", label: "Network Hub" },
        { key: "LOAD_BALANCER", value: "load-balancer", label: "Load Balancer" },
    ]),

    REACHABILITY_STATUS: GlobalUtils.createEnum([
        { key: "REACHABLE", value: 1, label: "Reachable" },
        { key: "NOT_REACHABLE", value: 2, label: "Not Reachable" },
    ]),

    FORM_SECTIONS: Object.freeze({
        DEVICE_CATEGORY: {
            title: "Device Category",
            icon: GlobalICONS.DEVICE,
            description: "Define and categorize the type of device for better management",
        },
        ...globalConstants.DEVICE_MANAGEMENT_FORM_SECTIONS,
    }),
};

// Freeze the entire networkDeviceConstants object
Object.freeze(networkDeviceConstants);

export default networkDeviceConstants;
