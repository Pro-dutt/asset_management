import GlobalUtils from "@/lib/utils";
import virtualMachineConstants from "./constants";
import globalConstants from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";
import { useDepartment } from "@/services/context/department";
import { useOperatingSystem } from "@/services/context/operatingSystem";

class VirtualMachineUtils {
    static getVMDetailsFormFields(data) {
        const { operatingSystemDropdownList } = useOperatingSystem();
        return [
            {
                type: "text",
                name: "vmName",
                label: "VM Name",
                grid: 4,
                defaultValue: data?.vmName,
                placeholder: "Ubuntu",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "status",
                label: "VM Status",
                grid: 4,
                defaultValue: data?.status,
                options: virtualMachineConstants.STATUS.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "select",
                name: "osVersion",
                label: "Operating System (with version)",
                grid: 4,
                defaultValue: data?.osVersion,
                options: GlobalUtils.formatOptionsData(operatingSystemDropdownList.data) || [],
                placeholder: "V.19.0.1",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "environment",
                label: "Environment",
                grid: 4,
                defaultValue: data?.environment,
                options: globalConstants.ENVIRONMENTS.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "assetId",
                label: "VM Asset ID",
                grid: 4,
                defaultValue: data?.assetId,
                placeholder: "123",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "virtualizationPlatform",
                label: "Hypervisor Platform",
                grid: 4,
                defaultValue: data?.virtualizationPlatform,
                options: virtualMachineConstants.VIRTUALIZATION_PLATFORM.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "select",
                name: "businessImpact",
                label: "Business Impact",
                grid: 4,
                defaultValue: data?.businessImpact,
                options: globalConstants.BUSINESS_IMPACT.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
        ];
    }

    static getHostDetailsFormFields(data) {
        return [
            {
                type: "number",
                name: "hostServerID",
                label: "Host Machine Asset ID",
                grid: 4,
                defaultValue: data?.hostServerID,
                placeholder: "123",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "hostIpAddress",
                label: "Host IP Address",
                grid: 4,
                defaultValue: data?.hostIpAddress,
                placeholder: "192.168.X.X",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "hostPhysicalLocation",
                label: "Host Physical Location",
                grid: 4,
                defaultValue: data?.hostPhysicalLocation,
                placeholder: "Banglore",
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getResourceAllocationFormFields(data) {
        return [
            {
                type: "number",
                name: "storage",
                label: "Disk Space (GB)",
                grid: 4,
                defaultValue: data?.storage,
                placeholder: "128",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "number",
                name: "memory",
                label: "RAM (GB)",
                grid: 4,
                defaultValue: data?.memory,
                placeholder: "16",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "number",
                name: "cpuCores",
                label: "CPU Core Count",
                grid: 4,
                defaultValue: data?.cpuCores,
                placeholder: "4",
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getNetworkFormFields(data) {
        return [
            {
                type: "text",
                name: "ipAddress",
                label: "IP Address",
                grid: 4,
                defaultValue: data?.ipAddress,
                placeholder: "e.g., 192.168.X.X",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "ipType",
                label: "IP Allocation Type",
                grid: 4,
                defaultValue: data?.ipType,
                options: globalConstants.IP_TYPES.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "macAddress",
                label: "MAC Address",
                grid: 4,
                defaultValue: data?.macAddress,
                placeholder: "e.g., 00:1A:2B:3C:4D:5E",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "serviceName",
                label: "Running Services",
                grid: 4,
                defaultValue: data?.runningServices?.serviceName,
                placeholder: "e.g., Nginx, MySQL",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "port",
                label: "Service Ports",
                grid: 4,
                defaultValue: data?.runningServices?.port,
                placeholder: "e.g., 80, 443",
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getAuthenticationDetailsFormFields(data) {
        return [
            // {
            //     type: "select",
            //     name: "accessControl",
            //     label: "User Access List",
            //     grid: 4,
            //     options: virtualMachineConstants.USERS.getOptions(),
            //     defaultValue: data?.accessControl,
            //     placeholder: "",
            //     validationRules: {},
            //     validateOnChange: true,
            // },
            {
                type: "select",
                name: "remoteAccessProtocol",
                label: "Remote Access Protocol",
                grid: 4,
                defaultValue: data?.remoteAccessProtocol,
                options: virtualMachineConstants.PROTOCOLS.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
        ];
    }

    static getBackupRestorationDetailsFormFields(data) {
        return [
            {
                type: "select",
                name: "backupEnabled",
                label: "Backup Enabled",
                grid: 4,
                defaultValue: data?.backupEnabled,
                options: globalConstants.BACKUP_STATUS.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "backupFrequency",
                label: "Backup Frequency",
                grid: 4,
                defaultValue: data?.backupFrequency,
                options: globalConstants.BACKUP_FREQUENCIES.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "lastBackupDate",
                label: "Last Backup Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.lastBackupDate),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "backupLocation",
                label: "Backup Location",
                grid: 4,
                defaultValue: data?.backupLocation,
                options: globalConstants.BACKUP_LOCATIONS.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
            // {
            //     name: "snapshots",
            //     label: "Snapshot Details",
            //     grid: 2,
            //     groupFields: [
            //         {
            //             type: "text",
            //             name: "snapshotName",
            //             label: "Latest Snapshot Name",
            //             grid: 4,
            //             placeholder: "i.e. test",
            //             validationRules: {},
            //             validateOnChange: true,
            //         },
            //         {
            //             type: "date",
            //             name: "date",
            //             label: "Latest Snapshot Date",
            //             grid: 4,
            //             validateOnChange: true,
            //             validationRules: {},
            //         },
            //     ],

            //     defaultGroups: [
            //         [
            //             {
            //                 type: "text",
            //                 name: "snapshotName",
            //                 label: "Latest Snapshot Name",
            //                 grid: 4,
            //                 defaultValue: data?.snapshots[1]?.snapshotName,
            //                 placeholder: "i.e. test",
            //                 validationRules: {},
            //                 validateOnChange: true,
            //             },
            //             {
            //                 type: "date",
            //                 name: "date",
            //                 label: "Latest Snapshot Date",
            //                 grid: 4,
            //                 defaultValue: GlobalUtils.formatDateForDateInput(data?.snapshots[1]?.date),
            //                 validateOnChange: true,
            //                 validationRules: {},
            //             },
            //         ],
            //         [
            //             {
            //                 type: "text",
            //                 name: "snapshotName",
            //                 label: "Latest Snapshot Name",
            //                 grid: 4,
            //                 defaultValue: data?.snapshots[1]?.snapshotName,
            //                 placeholder: "i.e. test",
            //                 validationRules: {},
            //                 validateOnChange: true,
            //             },
            //             {
            //                 type: "date",
            //                 name: "date",
            //                 label: "Latest Snapshot Date",
            //                 grid: 4,
            //                 defaultValue: GlobalUtils.formatDateForDateInput(data?.snapshots[1]?.date),
            //                 validateOnChange: true,
            //                 validationRules: {},
            //             },
            //         ],
            //     ],
            // },

            {
                type: "text",
                name: "snapshotName",
                label: "Latest Snapshot Name",
                grid: 4,
                defaultValue: data?.snapshots?.snapshotName,
                placeholder: "i.e. test",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "snapshotDate",
                label: "Latest Snapshot Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.snapshots?.date),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "recoveryTime",
                label: "Recovery Time Objective (RTO)",
                grid: 4,
                defaultValue: data?.recoveryTime,
                validateOnChange: true,
                validationRules: {},
            },
        ];
    }

    static getComplianceDetailsFormFields(data) {
        return [
            {
                type: "select",
                name: "patchLevel",
                label: "Patch Level",
                grid: 4,
                defaultValue: data?.patchLevel,
                options: globalConstants.PATCH_LEVELS.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "lastVaptDate",
                label: "Last VAPT Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.lastVaptDate),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "lastAuditDatcreateEnume",
                label: "Last Audit Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.lastAuditDate),
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getAccountabilityDetailsFormFields(data) {
        const { departmentDropdownList } = useDepartment();
        return [
            {
                name: "responsible",
                label: "Responsible (Managed By)",
                grid: 4,
                defaultValue: data?.responsible,
                validationRules: {},
                validateOnChange: true,
            },
            {
                name: "custodianName",
                label: "Custodian Name",
                grid: 4,
                defaultValue: data?.custodianName,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "email",
                name: "custodianEmail",
                label: "Custodian Email",
                grid: 4,
                defaultValue: data?.custodianEmail,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "custodianDepartment",
                label: "Custodian Department",
                grid: 4,
                defaultValue: data?.custodianDepartment,
                options: GlobalUtils.formatOptionsData(departmentDropdownList.data) || [],
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getAssociatedFilesFormFields(data) {
        return [
            {
                type: "file",
                name: "files",
                multiple: true,
                label: "Associated Files (If Any)",
                grid: 1,
                defaultValue: data?.files,
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static formFieldHandlers = {
        [virtualMachineConstants.FORM_SECTIONS.VM_DETAILS.title]: this.getVMDetailsFormFields,
        [virtualMachineConstants.FORM_SECTIONS.HOST_DETAILS.title]: this.getHostDetailsFormFields,
        [virtualMachineConstants.FORM_SECTIONS.RESOURCE_ALLOCATION.title]: this.getResourceAllocationFormFields,
        [virtualMachineConstants.FORM_SECTIONS.NETWORK_CONNECTIVITY.title]: this.getNetworkFormFields,
        [virtualMachineConstants.FORM_SECTIONS.AUTHENTICATION_ACCESS.title]: this.getAuthenticationDetailsFormFields,
        [virtualMachineConstants.FORM_SECTIONS.BACKUP_RESTORATION.title]: this.getBackupRestorationDetailsFormFields,
        [virtualMachineConstants.FORM_SECTIONS.COMPLIANCE_SECURITY.title]: this.getComplianceDetailsFormFields,
        [virtualMachineConstants.FORM_SECTIONS.ACCOUNTABILITY_CONTACT.title]: this.getAccountabilityDetailsFormFields,
        [virtualMachineConstants.FORM_SECTIONS.ASSOCIATED_FILES.title]: this.getAssociatedFilesFormFields,
    };

    static getFormFieldsBySection(section, data) {
        const handler = this.formFieldHandlers[section];
        return handler ? handler(data) : [];
    }

    static createFormSection(section, data) {
        const { title, icon, description } = section;

        return [
            {
                type: "rowHeader",
                label: title,
                icon: icon,
                description,
            },
            ...this.getFormFieldsBySection(section.title, data),
            { type: "divider" },
        ];
    }
}

export default VirtualMachineUtils;
