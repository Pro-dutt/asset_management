import GlobalUtils from ".";
import GlobalICONS from "./icons";

const globalConstants = {
    THEME: {
        LIGHT: "light",
        DARK: "dark",
    },

    ROLES: {
        ADMINISTRATOR: "administrator",
        AUTHENTICATED: "authenticated",
        SOME: "some",
        USER: "User",
    },

    ENVIRONMENTS: GlobalUtils.createEnum([
        { key: "DEVELOPMENT", value: "DEVELOPMENT", label: "Development" },
        { key: "STAGING", value: "STAGING", label: "Staging" },
        { key: "PRODUCTION", value: "PRODUCTION", label: "Production" },
    ]),

    OPERATING_SYSTEMS: GlobalUtils.createEnum([
        { key: "WINDOWS_10_HOME", value: "WINDOWS_10_HOME", label: "Windows 10 Home" },
        { key: "WINDOWS_10_PRO", value: "WINDOWS_10_PRO", label: "Windows 10 Pro" },
        { key: "WINDOWS_11_HOME", value: "WINDOWS_11_HOME", label: "Windows 11 Home" },
        { key: "WINDOWS_11_PRO", value: "WINDOWS_11_PRO", label: "Windows 11 Pro" },
        { key: "WINDOWS_SERVER_2016", value: "WINDOWS_SERVER_2016", label: "Windows Server 2016" },
        { key: "WINDOWS_SERVER_2019", value: "WINDOWS_SERVER_2019", label: "Windows Server 2019" },
        { key: "WINDOWS_SERVER_2022", value: "WINDOWS_SERVER_2022", label: "Windows Server 2022" },
        { key: "UBUNTU_2004", value: "Ubuntu_2004", label: "Ubuntu 20.04" },
        { key: "UBUNTU_2204", value: "Ubuntu_2204", label: "Ubuntu 22.04" },
        { key: "UBUNTU_2404", value: "Ubuntu_2404", label: "Ubuntu 24.04" },
        { key: "REDHAT_ENTERPRISE_LINUX_7", value: "REDHAT_ENTERPRISE_LINUX_7", label: "Red Hat Enterprise Linux 7" },
        { key: "REDHAT_ENTERPRISE_LINUX_8", value: "REDHAT_ENTERPRISE_LINUX_8", label: "Red Hat Enterprise Linux 8" },
        { key: "REDHAT_ENTERPRISE_LINUX_9", value: "REDHAT_ENTERPRISE_LINUX_9", label: "Red Hat Enterprise Linux 9" },
        { key: "KALI_LINUX", value: "KALI_LINUX", label: "Kali Linux" },
        { key: "OTHER", value: "OTHER", label: "Other" },
    ]),

    BUSINESS_IMPACT: GlobalUtils.createEnum([
        { key: "AFFECTS_BUSINESS", value: 1, label: "Affects Business" },
        { key: "AFFECTS_DEPARTMENT", value: 2, label: "Affects Department" },
        { key: "AFFECTS_USER", value: 3, label: "Affects User" },
        { key: "MEDIUM", value: 4, label: "Medium" },
        { key: "LOW", value: 5, label: "Low" },
    ]),

    BACKUP_FREQUENCIES: GlobalUtils.createEnum([
        { key: "REAL_TIME", value: 1, label: "Real-Time" },
        { key: "HOURLY", value: 2, label: "Hourly" },
        { key: "DAILY", value: 3, label: "Daily" },
        { key: "WEEKLY", value: 4, label: "Weekly" },
        { key: "MONTHLY", value: 5, label: "Monthly" },
        { key: "AD_HOC", value: 6, label: "Ad-Hoc" },
        { key: "ON_DEMAND", value: 7, label: "On-Demand" },
    ]),

    BACKUP_LOCATIONS: GlobalUtils.createEnum([
        { key: "EXTERNAL_DISK", value: 1, label: "External Disk" },
        { key: "UNIFIED_STORAGE", value: 2, label: "Unified Storage (NAS/SAN)" },
        { key: "CLOUD", value: 3, label: "Cloud" },
        { key: "OTHERS", value: 4, label: "Others" },
    ]),

    PATCH_LEVELS: GlobalUtils.createEnum([
        { key: "FULLY_PATCHED", value: 1, label: "Fully Patched" },
        { key: "PARTIALLY_PATCHED", value: 2, label: "Partially Patched" },
        { key: "NOT_PATCHED", value: 3, label: "Not Patched" },
    ]),

    DEPARTMENTS: GlobalUtils.createEnum([
        { key: "HR", value: "hr", label: "HR" },
        { key: "FINANCE", value: "finance", label: "Finance" },
        { key: "LEGAL", value: "legal", label: "Legal" },
    ]),

    IP_TYPES: GlobalUtils.createEnum([
        { key: "STATIC", value: "static", label: "Static" },
        { key: "DHCP", value: "dhcp", label: "DHCP" },
    ]),

    BACKUP_STATUS: GlobalUtils.createEnum([
        { key: "YES", value: 1, label: "Yes" },
        { key: "NO", value: 0, label: "No" },
    ]),

    STATUS_CATEGORIES: GlobalUtils.createEnum([
        { key: "IN_STORE", value: 1, label: "In-Store" },
        { key: "IN_USE", value: 2, label: "In-Use" },
        { key: "IN_MAINTENANCE", value: 3, label: "In-Maintenance" },
        { key: "DISPOSED", value: 4, label: "Disposed" },
        { key: "MISSING", value: 5, label: "Missing" },
        { key: "RESERVED", value: 6, label: "Reserved" },
    ]),

    DEVICE_STATES: GlobalUtils.createEnum([
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
        TENANT_ID: {
            title: "Tenant",
            icon: GlobalICONS.ADD_TENANT,
            description: "Specify details of tenant",
        },
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
    AD_STATUS: GlobalUtils.createEnum([
        { key: "YES", value: 1, label: "Yes" },
        { key: "NO", value: 0, label: "No" },
    ]),
    AGENT_STATUS: GlobalUtils.createEnum([
        { key: "YES", value: "YES", label: "Yes" },
        { key: "NO", value: "NO", label: "No" },
    ]),
};

export default globalConstants;
