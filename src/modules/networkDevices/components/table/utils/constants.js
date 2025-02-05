import globalConstants from "@/lib/utils/contants";
import networkDeviceConstants from "../../form/utils/constants";

const FILTER_OPTIONS = {
    statusId: { placeholder: "Select asset status", options: globalConstants.STATUS_CATEGORIES.getOptions() },
    deviceCategory: { options: networkDeviceConstants.DEVICE_CATEGORIES.getOptions() },
    businessImpact: { options: globalConstants.BUSINESS_IMPACT.getOptions() },
};

const TABLE_LIMITS = {
    defaultValue: "20",
    limitStart: "10",
    limitEnd: "50",
    multipleOf: "10",
};

const networkingDevicesTableConstants = {
    TABLE_API_URL: "/network-device",
    FILTER_OPTIONS,
    TABLE_LIMITS,
    externalFilters: {
        title: "Networking Device List",
        filterFields: Object.keys(FILTER_OPTIONS).map((key) => ({
            type: "select",
            name: key,
            grid: 3,
            options: FILTER_OPTIONS[key].options,
            placeholder: FILTER_OPTIONS[key].placeholder || `Select ${key.replace(/([A-Z])/g, " $1").trim()}`,
        })),
        parentPayloadKey: `[search][filters]`,
    },
    TABLE_SORTING: {
        initialSort: "Asset ID",
        initialSortOrder: "asc",
    },
};

export default networkingDevicesTableConstants;
