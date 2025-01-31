import { createEnum } from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";

const networkDeviceConstants = {
    DEVICE_CATEGORIES: createEnum([
        { key: "FIREWALL", value: 1, label: "Firewall" },
        { key: "SWITCH", value: 2, label: "Switch" },
        { key: "ACCESS_POINT", value: 3, label: "Access Point (AP)" },
        { key: "ROUTER", value: 4, label: "Router" },
        { key: "WLC", value: 5, label: "Wireless LAN Controller (WLC)" },
        { key: "NETWORK_HUB", value: 6, label: "Network Hub" },
        { key: "LOAD_BALANCER", value: 7, label: "Load Balancer" },
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

    REACHABILITY_STATUS: createEnum([
        { key: "REACHABLE", value: 1, label: "Reachable" },
        { key: "NOT_REACHABLE", value: 2, label: "Not Reachable" },
    ]),

    FORM_SECTIONS: Object.freeze({
        DEVICE_CATEGORY: {
            title: "Device Category",
            icon: GlobalICONS.DEVICE,
            description: "Define and categorize the type of device for better management",
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
};

// Freeze the entire networkDeviceConstants object
Object.freeze(networkDeviceConstants);

export default networkDeviceConstants;
