import GlobalUtils from "@/lib/utils";
import globalConstants from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";

const desktopConstants = {
    REACHABILITY_STATUS: GlobalUtils.createEnum([
        { key: "REACHABLE", value: 1, label: "Reachable" },
        { key: "NOT_REACHABLE", value: 2, label: "Not Reachable" },
    ]),

    ANTIVIRUS_STATUS: GlobalUtils.createEnum([
        { key: "ACTIVE", value: 1, label: "Active" },
        { key: "INACTIVE", value: 2, label: "Inactive" },
        { key: "NOT_INSTALLED", value: 3, label: "Not Installed" },
    ]),

    ASSET_TYPE: GlobalUtils.createEnum([
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
