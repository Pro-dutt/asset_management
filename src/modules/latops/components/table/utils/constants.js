const FILTER_OPTIONS = {
    deviceStatus: [
        { label: "In Use", value: "in_use" },
        { label: "In Storage", value: "in_storage" },
        { label: "Assigned", value: "assigned" },
        { label: "Inactive", value: "inactive" },
    ],
    oem: [
        { label: "Dell", value: "dell" },
        { label: "HP", value: "hp" },
        { label: "Lenovo", value: "lenovo" },
        { label: "Apple", value: "apple" },
    ],
    ram: [
        { label: "8 GB", value: "8" },
        { label: "16 GB", value: "16" },
        { label: "32 GB", value: "32" },
    ],
};

const TABLE_LIMITS = {
    defaultValue: "20",
    limitStart: "10",
    limitEnd: "50",
    multipleOf: "10",
};

const laptopsTableConstants = {
    TABLE_API_URL: "/laptop",
    FILTER_OPTIONS,
    TABLE_LIMITS,
    externalFilters: {
        title: "Laptop List",
        filterFields: Object.keys(FILTER_OPTIONS).map((key) => ({
            type: "select",
            name: key,
            grid: 3,
            options: FILTER_OPTIONS[key],
            placeholder: `Select ${key.replace(/([A-Z])/g, " $1").trim()}`,
        })),
        parentPayloadKey: `[search][filters]`,
    },
    TABLE_SORTING: {
        initialSort: "Asset ID",
        initialSortOrder: "asc",
    },
};

export default laptopsTableConstants;
