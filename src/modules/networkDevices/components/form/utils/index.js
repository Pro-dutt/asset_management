import globalConstants from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";
import networkDeviceConstants from "./constants";
import GlobalUtils from "@/lib/utils";
import tenantConstants from "@/modules/tenant/utils/constants";
import TenantUtils from "@/modules/tenant/utils";
import { useDepartment } from "@/services/context/department";

class NetworkDeviceUtils {
    static getDeviceCategoryFormFields(data) {
        return [
            {
                type: "select",
                name: "deviceCategory",
                label: "Device Category",
                grid: 4,
                defaultValue: data?.deviceCategory,
                options: networkDeviceConstants.DEVICE_CATEGORIES.getOptions(),
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
                defaultValue: GlobalUtils.formatDateForDateInput(data?.procurementDate),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "receivedOn",
                label: "Acquisition Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.receivedOn),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "warrantyEndDate",
                label: "Warranty Expiry",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.warrantyEndDate),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "endOfSupport",
                label: "End of Support",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.endOfSupport),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "endOfLife",
                label: "End of Life",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.endOfLife),
                validationRules: {},
                validateOnChange: true,
            },
            {
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
                type: "number",
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
        const { departmentDropdownList } = useDepartment();
        return [
            {
                type: "date",
                name: "assetHandoverDate",
                label: "Assigned Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.assetHandoverDate),
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
                options: GlobalUtils.formatOptionsData(departmentDropdownList.data) || [],
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
                defaultValue: GlobalUtils.formatDateForDateInput(data?.billOrderDate),
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
                name: "lastMaintenanceDate",
                label: "Last Maintenance Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.lastMaintenanceDate),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "maintenanceDate",
                label: "Scheduled Maintenance Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.maintenanceDate),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "lastConfigurationBackupDate",
                label: "Last Configuration Backup Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.lastConfigurationBackupDate),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "scheduledConfigurationBackupDate",
                label: "Scheduled Configuration Backup Date",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.scheduledConfigurationBackupDate),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "lastAuditDate",
                label: "Last Audit Date (If Any)",
                grid: 4,
                defaultValue: GlobalUtils.formatDateForDateInput(data?.lastAuditDate),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "select",
                name: "reachabilityStatus",
                label: "Reachability Status",
                grid: 4,
                defaultValue: data?.reachabilityStatus,
                options: networkDeviceConstants.REACHABILITY_STATUS.getOptions(),
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
        [tenantConstants.FORM_TENANT_SECTION.title]: TenantUtils.getTenantFormFields,
        [networkDeviceConstants.FORM_SECTIONS.DEVICE_CATEGORY.title]: this.getDeviceCategoryFormFields,
        [networkDeviceConstants.FORM_SECTIONS.DEVICE_PROPERTIES.title]: this.getDevicePropertiesFormFields,
        [networkDeviceConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT.title]: this.getLifecycleManagementFormFields,
        [networkDeviceConstants.FORM_SECTIONS.NETWORK_DETAILS.title]: this.getNetworkConnectivityFormFields,
        [networkDeviceConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS.title]: this.getAssignmentDetailsFormFields,
        [networkDeviceConstants.FORM_SECTIONS.PROCUREMENT_DETAILS.title]: this.getProcurementDetailsFormFields,
        [networkDeviceConstants.FORM_SECTIONS.OPERATION_DETAILS.title]: this.getOperationsDetailsFormFields,
        [networkDeviceConstants.FORM_SECTIONS.ASSOCIATED_FILES.title]: this.getAssociatedFilesFormFields,
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

export default NetworkDeviceUtils;
