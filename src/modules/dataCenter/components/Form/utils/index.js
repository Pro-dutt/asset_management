import globalConstants from "@/lib/utils/contants";
import dataCenterConstants from "./constants";

class DataCenterUtils {
    static getDeviceCategoryFormFields(data) {
        return [
            {
                type: "select",
                name: "deviceCategory",
                label: "Device Category",
                grid: 4,
                defaultValue: data?.deviceCategory,
                options: dataCenterConstants.DEVICE_CATEGORIES.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
        ];
    }

    static getDevicePropertiesFormFields(data) {
        return [
            {
                type: "text",
                name: "deviceType",
                label: "Device Type",
                grid: 4,
                defaultValue: data?.deviceType,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "itemName",
                label: "Device Name",
                grid: 4,
                defaultValue: data?.itemName,
                validateOnChange: true,
                validationRules: {},
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
                name: "firmwareVersion",
                label: "Firmware Version",
                grid: 4,
                defaultValue: data?.firmwareVersion,
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
                name: "cpe",
                label: "CPE",
                grid: 4,
                defaultValue: data?.cpe,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "select",
                name: "statusName",
                label: "Device Status",
                grid: 4,
                defaultValue: data?.statusName,
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
                options: globalConstants.IP_TYPES.getOptions(),
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
                name: "subnetMask",
                label: "Subnet Mask",
                grid: 4,
                defaultValue: data?.subnetMask,
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
                type: "text",
                name: "dnsName",
                label: "DNS Name",
                grid: 4,
                defaultValue: data?.dnsName,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "nicCount",
                label: "Number of Interfaces",
                grid: 4,
                defaultValue: data?.nicCount,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "linkSpeed",
                label: "Link Speed",
                grid: 4,
                defaultValue: data?.linkSpeed,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "estimatedBandwidth",
                label: "Estimated Bandwidth",
                grid: 4,
                defaultValue: data?.estimatedBandwidth,
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
                name: "custodianDepartment",
                label: "Department",
                grid: 4,
                defaultValue: data?.custodianDepartment,
                options: globalConstants.DEPARTMENTS.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                name: "custodianName",
                label: "Responsible (Managed By)",
                grid: 4,
                defaultValue: data?.custodianName,
                validationRules: {},
                validateOnChange: true,
            },
            {
                name: "responsibleForItem",
                label: "Accountable (Owned By)",
                grid: 4,
                defaultValue: data?.responsibleForItem,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "email",
                name: "custodianEmail",
                label: "Support Contact (Email)",
                grid: 4,
                defaultValue: data?.custodianEmail,
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
                name: "capEx",
                label: "Capital Expenditure (CapEx)",
                grid: 4,
                defaultValue: data?.capEx,
                validationRules: {},
                validateOnChange: true,
            },
            {
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
                name: "lastMaintenanceDate",
                label: "Last Maintenance Date",
                grid: 4,
                defaultValue: data?.lastMaintenanceDate,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "maintenanceDate",
                label: "Scheduled Maintenance Date",
                grid: 4,
                defaultValue: data?.maintenanceDate,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "lastConfigurationBackupDate",
                label: "Last Configuration Backup Date",
                grid: 4,
                defaultValue: data?.lastConfigurationBackupDate,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "scheduledConfigurationBackupDate",
                label: "Scheduled Configuration Backup Date",
                grid: 4,
                defaultValue: data?.scheduledConfigurationBackupDate,
                validateOnChange: true,
                validationRules: {},
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
                name: "reachabilityStatus",
                label: "Reachability Status",
                grid: 4,
                defaultValue: data?.reachabilityStatus,
                options: dataCenterConstants.REACHABILITY_STATUS.getOptions(),
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
        [dataCenterConstants.FORM_SECTIONS.DEVICE_CATEGORY.title]: this.getDeviceCategoryFormFields,
        [dataCenterConstants.FORM_SECTIONS.DEVICE_PROPERTIES.title]: this.getDevicePropertiesFormFields,
        [dataCenterConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT.title]: this.getLifecycleManagementFormFields,
        [dataCenterConstants.FORM_SECTIONS.NETWORK_DETAILS.title]: this.getNetworkConnectivityFormFields,
        [dataCenterConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS.title]: this.getAssignmentDetailsFormFields,
        [dataCenterConstants.FORM_SECTIONS.PROCUREMENT_DETAILS.title]: this.getProcurementDetailsFormFields,
        [dataCenterConstants.FORM_SECTIONS.OPERATION_DETAILS.title]: this.getOperationsDetailsFormFields,
        [dataCenterConstants.FORM_SECTIONS.ASSOCIATED_FILES.title]: this.getAssociatedFilesFormFields,
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

export default DataCenterUtils;
