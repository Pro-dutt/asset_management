const endPointsConstants = {
    FILTER_OPTIONS: {
        deviceStatus: ["In Use", "In Storage", "Assigned", "Inactive"],
        oem: ["Dell", "HP", "Lenovo", "Apple"],
        ram: ["8", "16", "32"],
    },
    TABLE_LIMITS: {
        defaultValue: "20",
        limitStart: "10",
        limitEnd: "50",
        multipleOf: "10",
    },
};

export default endPointsConstants;
