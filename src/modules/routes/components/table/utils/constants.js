const FILTER_OPTIONS = {
    method: {
        placeholder: "Select method",
        options: [
            { label: "GET", value: "GET" },
            { label: "POST", value: "POST" },
            { label: "PUT", value: "PUT" },
            { label: "DELETE", value: "DELETE" },
        ],
    },
};

const TABLE_LIMITS = {
    defaultValue: "10",
    limitStart: "10",
    limitEnd: "50",
    multipleOf: "10",
};

const routesTableConstants = {
    TABLE_API_URL: "/route",
    FILTER_OPTIONS,
    TABLE_LIMITS,
    externalFilters: {
        title: "Route List",
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

export default routesTableConstants;
