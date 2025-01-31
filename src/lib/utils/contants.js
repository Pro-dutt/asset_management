import GlobalICONS from "./icons";

export const createEnum = (definitions) => {
    const enumObject = {};
    const labels = {};

    // Create enum values and labels
    definitions.forEach(({ key, value, label }) => {
        enumObject[key] = value;
        labels[value] = label;
    });

    return Object.freeze({
        ...enumObject,
        labels,
        getLabel: function (value) {
            return this.labels[value] || "";
        },
        getOptions: function () {
            return Object.entries(this.labels).map(([value, label]) => ({
                value: Number(value),
                label,
            }));
        },
    });
};

const globalConstants = {
    ENVIRONMENTS: createEnum([
        { key: "DEVELOPMENT", value: 1, label: "Development" },
        { key: "STAGING", value: 2, label: "Staging" },
        { key: "TESTING", value: 3, label: "Testing" },
        { key: "PRODUCTION", value: 4, label: "Production" },
    ]),

    BUSINESS_IMPACT: createEnum([
        { key: "AFFECTS_BUSINESS", value: 1, label: "Affects Business" },
        { key: "AFFECTS_DEPARTMENT", value: 2, label: "Affects Department" },
        { key: "AFFECTS_USER", value: 3, label: "Affects User" },
        { key: "MEDIUM", value: 4, label: "Medium" },
        { key: "LOW", value: 5, label: "Low" },
    ]),

    BACKUP_FREQUENCIES: createEnum([
        { key: "REAL_TIME", value: 1, label: "Real-Time" },
        { key: "HOURLY", value: 2, label: "Hourly" },
        { key: "DAILY", value: 3, label: "Daily" },
        { key: "WEEKLY", value: 4, label: "Weekly" },
        { key: "MONTHLY", value: 5, label: "Monthly" },
        { key: "AD_HOC", value: 6, label: "Ad-Hoc" },
        { key: "ON_DEMAND", value: 7, label: "On-Demand" },
    ]),

    BACKUP_LOCATIONS: createEnum([
        { key: "EXTERNAL_DISK", value: 1, label: "External Disk" },
        { key: "UNIFIED_STORAGE", value: 2, label: "Unified Storage (NAS/SAN)" },
        { key: "CLOUD", value: 3, label: "Cloud" },
        { key: "OTHERS", value: 4, label: "Others" },
    ]),

    DEPARTMENTS: createEnum([
        { key: "HR", value: 1, label: "HR" },
        { key: "FINANCE", value: 2, label: "Finance" },
        { key: "LEGAL", value: 3, label: "Legal" },
    ]),

    IP_TYPES: createEnum([
        { key: "STATIC", value: 1, label: "Static" },
        { key: "DHCP", value: 2, label: "DHCP" },
    ]),

    BACKUP_STATUS: createEnum([
        { key: "YES", value: 1, label: "Yes" },
        { key: "NO", value: 0, label: "No" },
    ]),

    STATUS_CATEGORIES: createEnum([
        { key: "IN_STORE", value: 1, label: "In-Store" },
        { key: "IN_USE", value: 2, label: "In-Use" },
        { key: "IN_MAINTENANCE", value: 3, label: "In-Maintenance" },
        { key: "DISPOSED", value: 4, label: "Disposed" },
        { key: "MISSING", value: 5, label: "Missing" },
        { key: "RESERVED", value: 6, label: "Reserved" },
    ]),

    DEVICE_STATES: createEnum([
        { key: "ACTIVE", value: 1, label: "Active" },
        { key: "ACTIVE_UNSUPPORTED", value: 2, label: "Active (Unsupported)" },
        { key: "INACTIVE", value: 3, label: "In-Active" },
        { key: "STANDBY", value: 4, label: "Standby" },
        { key: "DISCONNECTED", value: 5, label: "Disconnected" },
        { key: "TEST_MODE", value: 6, label: "Test Mode" },
        { key: "EXPIRED", value: 7, label: "Expired" },
    ]),

    CONFIGURATION_FORM_SECTIONS: {
        AUTHENTICATION_ACCESS: {
            title: "Authentication & Access",
            icon: GlobalICONS.AUTHENTICATION,
            description: "Configure authentication and access settings",
        },
        NETWORK_CONNECTIVITY: {
            title: "Network & Connectivity",
            icon: GlobalICONS.NETWORKING_DEVICE,
            description: "Configure network and connectivity settings",
        },
        ACCOUNTABILITY_CONTACT: {
            title: "Accountability & Contact",
            icon: GlobalICONS.USERS,
            description: "Provide accountability details and contact information",
        },
        COMPLIANCE_SECURITY: {
            title: "Security & Compliance",
            icon: GlobalICONS.SECURITY,
            description: "Define security policies and compliance configurations",
        },
        BACKUP_RESTORATION: {
            title: "Backup & Restoration",
            icon: GlobalICONS.BACKUP,
            description: "Set preferences for data backup and restoration",
        },
        ASSOCIATED_FILES: {
            title: "Associated Files",
            icon: GlobalICONS.ATTACHMENT,
            description: "Manage and link associated files to configurations",
        },
    },

    DEVICE_MANAGEMENT_FORM_SECTIONS: Object.freeze({
        DEVICE_PROPERTIES: {
            title: "Device Properties",
            icon: GlobalICONS.PROPERTY,
            description: "Specify key properties and configurations of the device",
        },
        LIFECYCLE_MANAGEMENT: {
            title: "Lifecycle Management",
            icon: GlobalICONS.LIFE_CYCLE,
            description: "Manage the device lifecycle from procurement to decommissioning",
        },
        NETWORK_DETAILS: {
            title: "Network & Connectivity",
            icon: GlobalICONS.NETWORKING_DEVICE,
            description: "Configure network settings and connectivity information",
        },
        ASSIGNMENT_DETAILS: {
            title: "Assignment Details",
            icon: GlobalICONS.ASSIGNMENT,
            description: "Assign devices to users, teams, or departments as required",
        },
        PROCUREMENT_DETAILS: {
            title: "Procurement & Financial Details",
            icon: GlobalICONS.PROCUREMENT,
            description: "Record procurement, cost, and financial details of the device",
        },
        OPERATION_DETAILS: {
            title: "Operations Details",
            icon: GlobalICONS.OPERATION,
            description: "Track operational status, maintenance schedules, and usage",
        },
        ASSOCIATED_FILES: {
            title: "Associated Files",
            icon: GlobalICONS.ATTACHMENT,
            description: "Attach and manage files related to the device",
        },
    }),
};

export default globalConstants;
