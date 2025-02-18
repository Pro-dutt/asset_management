const FILTER_OPTIONS = {
    status: {
        options: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
        ],
        placeholder: "select site status",
    },
};

const TABLE_LIMITS = {
    defaultValue: "10",
    limitStart: "10",
    limitEnd: "50",
    multipleOf: "10",
};

const tenantTableConstants = {
    TABLE_API_URL: "/user",
    FILTER_OPTIONS,
    TABLE_LIMITS,
    externalFilters: {
        title: "Site List",
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
        initialSort: "Tenant Id",
        initialSortOrder: "asc",
    },
};

export default tenantTableConstants;
