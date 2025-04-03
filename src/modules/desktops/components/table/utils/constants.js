import globalConstants from "@/lib/utils/contants";

const FILTER_OPTIONS = {
    statusId: { placeholder: "Select asset status", options: globalConstants.STATUS_CATEGORIES.getOptions() },
    adStatus: { placeholder: "Select Ad Integrated", options: globalConstants.AD_STATUS.getOptions() },
    agentStatus: { placeholder: "Select Agent Installed", options: globalConstants.AGENT_STATUS.getOptions() },
};

const TABLE_LIMITS = {
    defaultValue: "20",
    limitStart: "10",
    limitEnd: "50",
    multipleOf: "10",
};

const desktopsTableConstants = {
    TABLE_API_URL: "/desktop",
    FILTER_OPTIONS,
    TABLE_LIMITS,
    externalFilters: {
        title: "Desktop List",
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

export default desktopsTableConstants;
