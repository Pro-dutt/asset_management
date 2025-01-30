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
            icon: GlobalICONS.NETWORKING_DEVICE,
            description: "Configure authentication & access settings",
        },
        BACKUP_RESTORATION: {
            title: "Backup & Restoration",
            icon: GlobalICONS.NETWORKING_DEVICE,
            description: "Configure Backup & Restoration settings",
        },
        COMPLIANCE_SECURITY: {
            title: "Compliance and Security",
            icon: GlobalICONS.NETWORKING_DEVICE,
            description: "Configure Compliance and Security settings",
        },
        ACCOUNTABILITY_CONTACT: {
            title: "Accountability & Contact",
            icon: GlobalICONS.NETWORKING_DEVICE,
            description: "Configure Accountability & Contact settings",
        },
        ASSOCIATED_FILES: {
            title: "Associated Files",
            icon: GlobalICONS.NETWORKING_DEVICE,
            description: "Configure Associated Files settings",
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

// Freeze the entire virtualMachineConstants object
Object.freeze(virtualMachineConstants);

export default virtualMachineConstants;
