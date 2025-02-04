import globalConstants from "@/lib/utils/contants";
import serverConstants from "./constants";

class ServerUtils {
    static getDevicePropertiesFormFields(data) {
        return [
            {
                type: "text",
                name: "itemName",
                label: "Product Name",
                grid: 4,
                defaultValue: data?.itemName,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "serialNumber",
                label: "Serial Number",
                grid: 4,
                defaultValue: data?.serialNumber,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "serviceTag",
                label: "Service Tag",
                grid: 4,
                defaultValue: data?.serviceTag,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "oem",
                label: "OEM",
                grid: 4,
                defaultValue: data?.oem,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "model",
                label: "Model",
                grid: 4,
                defaultValue: data?.model,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "processor",
                label: "Processor",
                grid: 4,
                defaultValue: data?.processor,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "storage",
                label: "Disk Space (GB)",
                grid: 4,
                defaultValue: data?.storage,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "ram",
                label: "RAM (GB)",
                grid: 4,
                defaultValue: data?.ram,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "number",
                name: "core",
                label: "CPU Core Count",
                grid: 4,
                defaultValue: data?.core,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "cpe",
                label: "CPE",
                grid: 4,
                defaultValue: data?.cpe,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "select",
                name: "statusId",
                label: "Device Status",
                grid: 4,
                defaultValue: data?.statusId,
                options: globalConstants.STATUS_CATEGORIES.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
        ];
    }

    static getLifecycleManagementFormFields(data) {
        return [
            {
                type: "date",
                name: "procurementDate",
                label: "Procurement Date",
                grid: 4,
                defaultValue: data?.procurementDate,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "receivedOn",
                label: "Acquisition Date",
                grid: 4,
                defaultValue: data?.receivedOn,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "warrantyEndDate",
                label: "Warranty Expiry",
                grid: 4,
                defaultValue: data?.warrantyEndDate,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "endOfSupport",
                label: "End of Support",
                grid: 4,
                defaultValue: data?.endOfSupport,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "endOfLife",
                label: "End of Life",
                grid: 4,
                defaultValue: data?.endOfLife,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "procurementPeriod",
                label: "Procurement Period",
                grid: 4,
                defaultValue: data?.procurementPeriod,
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getNetworkConnectivityFormFields(data) {
        return [
            {
                type: "text",
                name: "ipAddress",
                label: "IP Address",
                grid: 4,
                defaultValue: data?.ip,
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
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "number",
                name: "nicCount",
                label: "Number of Interfaces",
                grid: 4,
                defaultValue: data?.nicCount,
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getAssignmentDetailsFormFields(data) {
        return [
            {
                type: "date",
                name: "assetHandoverDate",
                label: "Assigned Date",
                grid: 4,
                defaultValue: data?.assetHandoverDate,
                validationRules: {},
                validateOnChange: true,
            },
            {
                name: "assetId",
                label: "Asset ID",
                grid: 4,
                defaultValue: data?.assetId,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "assetLocation",
                label: "Asset Location",
                grid: 4,
                defaultValue: data?.assetLocation,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "operatingSystem",
                label: "Operating System (with version)",
                grid: 4,
                options: globalConstants.OPERATING_SYSTEMS.getOptions(),
                defaultValue: data?.operatingSystem,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "adUserName",
                label: "AD User Name",
                grid: 4,
                defaultValue: data?.adUserName,
                validationRules: {},
                validateOnChange: true,
            },
            {
                name: "responsibleForItem",
                label: "Responsible (Managed By)",
                grid: 4,
                defaultValue: data?.responsibleForItem,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "custodianName",
                label: "Custodian Name",
                grid: 4,
                defaultValue: data?.custodianName,
                validationRules: {},
                validateOnChange: true,
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
                label: "Department",
                grid: 4,
                defaultValue: data?.custodianDepartment,
                options: globalConstants.DEPARTMENTS.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "businessImpact",
                label: "Business Impact",
                grid: 4,
                defaultValue: data?.businessImpact,
                options: globalConstants.BUSINESS_IMPACT.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "antivirusStatus",
                label: "Antivirus Status",
                grid: 4,
                defaultValue: data?.antivirusStatus,
                options: serverConstants.ANTIVIRUS_STATUS.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getProcurementDetailsFormFields(data) {
        return [
            {
                type: "text",
                name: "vendor",
                label: "Vendor",
                grid: 4,
                defaultValue: data?.vendor,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "deviceSource",
                label: "Device Source",
                grid: 4,
                defaultValue: data?.deviceSource,
                validationRules: {},
                validateOnChange: true,
            },
            {
                name: "billOrderNumber",
                label: "Bill Order Number",
                grid: 4,
                defaultValue: data?.billOrderNumber,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "billOrderDate",
                label: "Bill Order Date",
                grid: 4,
                defaultValue: data?.billOrderDate,
                validateOnChange: true,
                validationRules: {},
            },
            {
                name: "storeItemNumber",
                label: "Store Item Number",
                grid: 4,
                defaultValue: data?.storeItemNumber,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "number",
                name: "capEx",
                label: "Capital Expenditure (CapEx)",
                grid: 4,
                defaultValue: data?.capEx,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "number",
                name: "opEx",
                label: "Operational Expenditure (OpEx)",
                grid: 4,
                defaultValue: data?.opEx,
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getOperationsDetailsFormFields(data) {
        return [
            {
                type: "select",
                name: "deviceState",
                label: "Device State",
                grid: 4,
                defaultValue: data?.deviceState,
                options: globalConstants.DEVICE_STATES.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "lastAuditDate",
                label: "Last Audit Date (If Any)",
                grid: 4,
                defaultValue: data?.lastAuditDate,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "select",
                name: "patchLevel",
                label: "Patch Level",
                grid: 4,
                defaultValue: data?.patchLevel,
                options: globalConstants.PATCH_LEVELS.getOptions(),
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
                defaultValue: data?.lastBackupDate,
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
        [serverConstants.FORM_SECTIONS.DEVICE_PROPERTIES.title]: this.getDevicePropertiesFormFields,
        [serverConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT.title]: this.getLifecycleManagementFormFields,
        [serverConstants.FORM_SECTIONS.NETWORK_DETAILS.title]: this.getNetworkConnectivityFormFields,
        [serverConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS.title]: this.getAssignmentDetailsFormFields,
        [serverConstants.FORM_SECTIONS.PROCUREMENT_DETAILS.title]: this.getProcurementDetailsFormFields,
        [serverConstants.FORM_SECTIONS.OPERATION_DETAILS.title]: this.getOperationsDetailsFormFields,
        [serverConstants.FORM_SECTIONS.BACKUP_RESTORATION.title]: this.getBackupRestorationDetailsFormFields,
        [serverConstants.FORM_SECTIONS.ASSOCIATED_FILES.title]: this.getAssociatedFilesFormFields,
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

export default ServerUtils;
