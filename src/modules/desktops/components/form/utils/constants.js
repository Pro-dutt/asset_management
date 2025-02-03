import globalConstants, { createEnum } from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";

const desktopConstants = {
    DEVICE_CATEGORIES: createEnum([
        { key: "FIREWALL", value: 1, label: "Firewall" },
        { key: "SWITCH", value: 2, label: "Switch" },
        { key: "ACCESS_POINT", value: 3, label: "Access Point (AP)" },
        { key: "ROUTER", value: 4, label: "Router" },
        { key: "WLC", value: 5, label: "Wireless LAN Controller (WLC)" },
        { key: "NETWORK_HUB", value: 6, label: "Network Hub" },
        { key: "LOAD_BALANCER", value: 7, label: "Load Balancer" },
    ]),

    REACHABILITY_STATUS: createEnum([
        { key: "REACHABLE", value: 1, label: "Reachable" },
        { key: "NOT_REACHABLE", value: 2, label: "Not Reachable" },
    ]),

    ANTIVIRUS_STATUS: createEnum([
        { key: "ACTIVE", value: 1, label: "Active" },
        { key: "INACTIVE", value: 2, label: "Inactive" },
        { key: "NOT_INSTALLED", value: 3, label: "Not Installed" },
    ]),

    ASSET_TYPE: createEnum([
        { key: "DESKTOP", value: "desktop", label: "Desktop" },
        { key: "LAPTOP", value: "laptop", label: "Laptop" },
    ]),

    FORM_SECTIONS: Object.freeze({
        ASSET_TYPE: {
            title: "Asset Type",
            icon: GlobalICONS.DEVICE,
            description: "Define and categorize the type of asset for better management",
        },
        ...globalConstants.DEVICE_MANAGEMENT_FORM_SECTIONS,
    }),
};

// Freeze the entire desktopConstants object
Object.freeze(desktopConstants);

export default desktopConstants;
