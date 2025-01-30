import GlobalICONS from "@/lib/utils/icons";

const virtualMachineConstants = {
    STATUS: Object.freeze({
        RUNNING: 1,
        STOPPED: 2,
        SUSPENDED: 3,
    }),

    ENVIRONMENTS: Object.freeze({
        DEVELOPMENT: 1,
        STAGING: 2,
        TESTING: 3,
        PRODUCTION: 4,
    }),

    VIRTUALIZATION_PLATFORM: Object.freeze({
        VMWARE: 1,
        VIRTUALBOX: 2,
        HYPERV: 3,
        PROXMOX: 4,
        KVM: 5,
        XENSERVER: 6,
        OTHERS: 7,
    }),

    BUSINESS_IMPACT: Object.freeze({
        AFFECTS_BUSINESS: 1,
        AFFECTS_DEPARTMENT: 2,
        AFFECTS_USER: 3,
        MEDIUM: 4,
        LOW: 5,
    }),

    PROTOCOLS: Object.freeze({
        RDP: 1,
        SSH: 2,
        VNC: 3,
        TELNET: 4,
        HTTPS: 5,
        SFTP: 6,
        OTHERS: 7,
    }),

    BACKUP_FREQUENCIES: Object.freeze({
        REAL_TIME: 1,
        HOURLY: 2,
        DAILY: 3,
        WEEKLY: 4,
        MONTHLY: 5,
        AD_HOC: 6,
        ON_DEMAND: 7,
    }),

    BACKUP_LOCATIONS: Object.freeze({
        EXTERNAL_DISK: 1,
        UNIFIED_STORAGE: 2,
        CLOUD: 3,
        OTHERS: 4,
    }),

    PATCH_LEVELS: Object.freeze({
        FULLY_PATCHED: 1,
        PARTIALLY_PATCHED: 2,
        NOT_PATCHED: 3,
    }),

    DEPARTMENTS: Object.freeze({
        HR: 1,
        FINANCE: 2,
        LEGAL: 3,
    }),

    FORM_SECTIONS: Object.freeze({
        VM_DETAILS: {
            title: "VM Details",
            icon: GlobalICONS.DESKTOP,
            description: "Configure the basic details of your virtual machine",
        },
        HOST_DETAILS: {
            title: "Host Details",
            icon: GlobalICONS.WEBSITE,
            description: "Configure the host machine details",
        },
        RESOURCE_ALLOCATION: {
            title: "Resource Allocation",
            icon: GlobalICONS.DATA_CENTER,
            description: "Configure resource allocation for your virtual machine",
        },
        NETWORK_CONNECTIVITY: {
            title: "Network & Connectivity",
            icon: GlobalICONS.NETWORKING_DEVICE,
            description: "Configure network and connectivity settings",
        },
        AUTHENTICATION_ACCESS: {
            title: "Authentication & Access",
            icon: GlobalICONS.AUTHENTICATION,
            description: "Configure user authentication and access settings.",
        },
        BACKUP_RESTORATION: {
            title: "Backup & Restoration",
            icon: GlobalICONS.BACKUP,
            description: "Set preferences for data backup and restoration.",
        },
        COMPLIANCE_SECURITY: {
            title: "Compliance and Security",
            icon: GlobalICONS.SECURITY,
            description: "Define security policies and compliance configurations.",
        },
        ACCOUNTABILITY_CONTACT: {
            title: "Accountability & Contact",
            icon: GlobalICONS.USERS,
            description: "Provide accountability details and contact information.",
        },
        ASSOCIATED_FILES: {
            title: "Associated Files",
            icon: GlobalICONS.ATTACHMENT,
            description: "Manage and link associated files to configurations.",
        },
    }),
};

// Create option arrays using the frozen virtualMachineConstants
virtualMachineConstants.STATUS_OPTIONS = Object.freeze([
    { value: virtualMachineConstants.STATUS.RUNNING, label: "Running" },
    { value: virtualMachineConstants.STATUS.STOPPED, label: "Stopped" },
    { value: virtualMachineConstants.STATUS.SUSPENDED, label: "Suspended" },
]);

virtualMachineConstants.ENVIRONMENT_OPTIONS = Object.freeze([
    { value: virtualMachineConstants.ENVIRONMENTS.DEVELOPMENT, label: "Development" },
    { value: virtualMachineConstants.ENVIRONMENTS.STAGING, label: "Staging" },
    { value: virtualMachineConstants.ENVIRONMENTS.TESTING, label: "Testing" },
    { value: virtualMachineConstants.ENVIRONMENTS.PRODUCTION, label: "Production" },
]);

virtualMachineConstants.VIRTUALIZATION_PLATFORM_OPTIONS = Object.freeze([
    { value: virtualMachineConstants.VIRTUALIZATION_PLATFORM.VMWARE, label: "VMware" },
    { value: virtualMachineConstants.VIRTUALIZATION_PLATFORM.VIRTUALBOX, label: "VirtualBox" },
    { value: virtualMachineConstants.VIRTUALIZATION_PLATFORM.HYPERV, label: "Hyper-V" },
    { value: virtualMachineConstants.VIRTUALIZATION_PLATFORM.PROXMOX, label: "Proxmox" },
    { value: virtualMachineConstants.VIRTUALIZATION_PLATFORM.KVM, label: "KVM" },
    { value: virtualMachineConstants.VIRTUALIZATION_PLATFORM.XENSERVER, label: "XenServer" },
    { value: virtualMachineConstants.VIRTUALIZATION_PLATFORM.OTHERS, label: "Others" },
]);

virtualMachineConstants.BUSINESS_IMPACT_OPTIONS = Object.freeze([
    { value: virtualMachineConstants.BUSINESS_IMPACT.AFFECTS_BUSINESS, label: "Affects Business" },
    { value: virtualMachineConstants.BUSINESS_IMPACT.AFFECTS_DEPARTMENT, label: "Affects Department" },
    { value: virtualMachineConstants.BUSINESS_IMPACT.AFFECTS_USER, label: "Affects User" },
    { value: virtualMachineConstants.BUSINESS_IMPACT.MEDIUM, label: "Medium" },
    { value: virtualMachineConstants.BUSINESS_IMPACT.LOW, label: "Low" },
]);

virtualMachineConstants.PROTOCOL_OPTIONS = Object.freeze([
    { value: virtualMachineConstants.PROTOCOLS.RDP, label: "RDP" },
    { value: virtualMachineConstants.PROTOCOLS.SSH, label: "SSH" },
    { value: virtualMachineConstants.PROTOCOLS.VNC, label: "VNC" },
    { value: virtualMachineConstants.PROTOCOLS.TELNET, label: "Telnet" },
    { value: virtualMachineConstants.PROTOCOLS.HTTPS, label: "HTTPS" },
    { value: virtualMachineConstants.PROTOCOLS.SFTP, label: "SFTP" },
    { value: virtualMachineConstants.PROTOCOLS.OTHERS, label: "Others" },
]);

virtualMachineConstants.BACKUP_STATUS_OPTIONS = Object.freeze([
    { value: 1, label: "Yes" },
    { value: 0, label: "No" },
]);

virtualMachineConstants.BACKUP_FREQUENCY_OPTIONS = Object.freeze([
    { value: virtualMachineConstants.BACKUP_FREQUENCIES.REAL_TIME, label: "Real-Time" },
    { value: virtualMachineConstants.BACKUP_FREQUENCIES.HOURLY, label: "Hourly" },
    { value: virtualMachineConstants.BACKUP_FREQUENCIES.DAILY, label: "Daily" },
    { value: virtualMachineConstants.BACKUP_FREQUENCIES.WEEKLY, label: "Weekly" },
    { value: virtualMachineConstants.BACKUP_FREQUENCIES.MONTHLY, label: "Monthly" },
    { value: virtualMachineConstants.BACKUP_FREQUENCIES.AD_HOC, label: "Ad-Hoc" },
    { value: virtualMachineConstants.BACKUP_FREQUENCIES.ON_DEMAND, label: "On-Demand" },
]);

virtualMachineConstants.BACKUP_LOCATION_OPTIONS = Object.freeze([
    { value: virtualMachineConstants.BACKUP_LOCATIONS.EXTERNAL_DISK, label: "External Disk" },
    { value: virtualMachineConstants.BACKUP_LOCATIONS.UNIFIED_STORAGE, label: "Unified Storage (NAS/SAN)" },
    { value: virtualMachineConstants.BACKUP_LOCATIONS.CLOUD, label: "Cloud" },
    { value: virtualMachineConstants.BACKUP_LOCATIONS.OTHERS, label: "Others" },
]);

virtualMachineConstants.PATCH_LEVEL_OPTIONS = Object.freeze([
    { value: virtualMachineConstants.PATCH_LEVELS.FULLY_PATCHED, label: "Fully Patched" },
    { value: virtualMachineConstants.PATCH_LEVELS.PARTIALLY_PATCHED, label: "Partially Patched" },
    { value: virtualMachineConstants.PATCH_LEVELS.NOT_PATCHED, label: "Not Patched" },
]);

virtualMachineConstants.DEPARTMENT_OPTIONS = Object.freeze([
    { value: virtualMachineConstants.DEPARTMENTS.HR, label: "HR" },
    { value: virtualMachineConstants.DEPARTMENTS.FINANCE, label: "Finance" },
    { value: virtualMachineConstants.DEPARTMENTS.LEGAL, label: "Legal" },
]);

// Freeze the entire virtualMachineConstants object
Object.freeze(virtualMachineConstants);

export default virtualMachineConstants;
