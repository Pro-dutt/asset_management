import globalConstants, { createEnum } from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";

const virtualMachineConstants = {
    STATUS: createEnum([
        { key: "RUNNING", value: 1, label: "Running" },
        { key: "STOPPED", value: 2, label: "Stopped" },
        { key: "SUSPENDED", value: 3, label: "Suspended" },
    ]),

    USERS: createEnum([
        { key: "MANOJ", value: "manoj", label: "Manoj" },
        { key: "ANUJ", value: "anuj", label: "Anuj" },
        { key: "AAUSAF", value: "aausaf", label: "Aausaf" },
    ]),

    VIRTUALIZATION_PLATFORM: createEnum([
        { key: "VMWARE", value: "VMWARE", label: "VMware" },
        { key: "VIRTUALBOX", value: "VIRTUALBOX", label: "VirtualBox" },
        { key: "HYPERV", value: "HYPERV", label: "Hyper-V" },
        { key: "PROXMOX", value: "PROXMOX", label: "Proxmox" },
        { key: "KVM", value: "KVM", label: "KVM" },
        { key: "XENSERVER", value: "XENSERVER", label: "XenServer" },
        { key: "OTHERS", value: "OTHER", label: "Others" },
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
