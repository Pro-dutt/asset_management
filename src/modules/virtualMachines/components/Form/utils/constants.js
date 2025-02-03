import globalConstants, { createEnum } from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";

const virtualMachineConstants = {
    STATUS: createEnum([
        { key: "RUNNING", value: 1, label: "Running" },
        { key: "STOPPED", value: 2, label: "Stopped" },
        { key: "SUSPENDED", value: 3, label: "Suspended" },
    ]),

    VIRTUALIZATION_PLATFORM: createEnum([
        { key: "VMWARE", value: 1, label: "VMware" },
        { key: "VIRTUALBOX", value: 2, label: "VirtualBox" },
        { key: "HYPERV", value: 3, label: "Hyper-V" },
        { key: "PROXMOX", value: 4, label: "Proxmox" },
        { key: "KVM", value: 5, label: "KVM" },
        { key: "XENSERVER", value: 6, label: "XenServer" },
        { key: "OTHERS", value: 7, label: "Others" },
    ]),

    PROTOCOLS: createEnum([
        { key: "RDP", value: 1, label: "RDP" },
        { key: "SSH", value: 2, label: "SSH" },
        { key: "VNC", value: 3, label: "VNC" },
        { key: "TELNET", value: 4, label: "Telnet" },
        { key: "HTTPS", value: 5, label: "HTTPS" },
        { key: "SFTP", value: 6, label: "SFTP" },
        { key: "OTHERS", value: 7, label: "Others" },
    ]),

    PATCH_LEVELS: createEnum([
        { key: "FULLY_PATCHED", value: 1, label: "Fully Patched" },
        { key: "PARTIALLY_PATCHED", value: 2, label: "Partially Patched" },
        { key: "NOT_PATCHED", value: 3, label: "Not Patched" },
    ]),

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
        ...globalConstants.CONFIGURATION_FORM_SECTIONS,
    }),
};

// Freeze the entire virtualMachineConstants object
Object.freeze(virtualMachineConstants);

export default virtualMachineConstants;
