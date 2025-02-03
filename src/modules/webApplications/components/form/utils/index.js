import globalConstants from "@/lib/utils/contants";
import webApplicationConstants from "./constants";

class WebApplicationUtils {
    static getGeneralInfoFormFields(data) {
        return [
            {
                type: "text",
                name: "applicationName",
                label: "Application Name",
                grid: 4,
                defaultValue: data?.applicationName,
                placeholder: "e.g., HRMS",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "status",
                label: "Status",
                grid: 4,
                defaultValue: data?.status,
                options: webApplicationConstants.STATUS.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "text",
                name: "version",
                label: "Version",
                grid: 4,
                defaultValue: data?.version,
                placeholder: "V.19.0.1",
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "hostAssetId",
                label: "Host Asset Id (If Any)",
                grid: 4,
                defaultValue: data?.hostAssetId,
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

    static getAuthenticationDetailsFormFields(data) {
        return [
            {
                type: "select",
                name: "crlClientAuthentication",
                label: "Authentication Method",
                grid: 4,
                defaultValue: data?.crlClientAuthentication,
                options: webApplicationConstants.CLIENT_AUTH_METHODS.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "userAccessMethod",
                label: "User Access Profile",
                grid: 4,
                defaultValue: data?.userAccessMethod,
                options: webApplicationConstants.USER_ACCESS_PROFILES.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "select",
                name: "face",
                label: "Face/Exposure Level",
                grid: 4,
                defaultValue: data?.face,
                options: webApplicationConstants.FACE_LEVELS.getOptions(),
                validateOnChange: true,
                validationRules: {},
            },
        ];
    }

    static getNetworkFormFields(data) {
        return [
            {
                type: "text",
                name: "ip",
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
                name: "url",
                label: "URL",
                grid: 4,
                defaultValue: data?.url,
                placeholder: "e.g., www.example.com",
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getEnvironmentDetailsFormFields(data) {
        return [
            {
                type: "select",
                name: "env",
                label: "Environment",
                grid: 4,
                defaultValue: data?.env,
                options: globalConstants.ENVIRONMENTS.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "locationDetail",
                label: "Asset Location",
                grid: 4,
                defaultValue: data?.locationDetail,
                placeholder: "e.g., Kanpur",
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getAccountabilityDetailsFormFields(data) {
        return [
            {
                name: "accountable",
                label: "Accountable (Owned By)",
                grid: 4,
                defaultValue: data?.accountable,
                validationRules: {},
                validateOnChange: true,
            },
            {
                name: "responsible",
                label: "Responsible (Managed By)",
                grid: 4,
                defaultValue: data?.responsible,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "email",
                name: "contactEmail",
                label: "Contact Email",
                grid: 4,
                defaultValue: data?.contactEmail,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "select",
                name: "department",
                label: "Department",
                grid: 4,
                defaultValue: data?.department,
                options: globalConstants.DEPARTMENTS.getOptions(),
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "email",
                name: "escalationEmail",
                label: "Escalation Contact Email",
                grid: 4,
                defaultValue: data?.escalationEmail,
                validationRules: {},
                validateOnChange: true,
            },
        ];
    }

    static getComplianceDetailsFormFields(data) {
        return [
            {
                type: "text",
                name: "vulnerabilityTrackerLink",
                label: "Vulnerability Tracker Link",
                grid: 4,
                defaultValue: data?.vulnerabilityTrackerLink,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "text",
                name: "openVulnerabilities",
                label: "Open Vulnerabilities (Count)",
                grid: 4,
                defaultValue: data?.openVulnerabilities,
                validationRules: {},
                validateOnChange: true,
            },
            {
                type: "date",
                name: "lastVaptDate",
                label: "Last VAPT Date",
                grid: 4,
                defaultValue: data?.lastVaptDate,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "lastCodeReviewDate",
                label: "Last Code Review Date",
                grid: 4,
                defaultValue: data?.lastCodeReviewDate,
                validateOnChange: true,
                validationRules: {},
            },
            {
                type: "date",
                name: "lastAuditDate",
                label: "Last Audit Date",
                grid: 4,
                defaultValue: data?.lastAuditDate,
                validationRules: {},
                validateOnChange: true,
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
        [webApplicationConstants.FORM_SECTIONS.GENERAL_INFORMATION.title]: this.getGeneralInfoFormFields,
        [webApplicationConstants.FORM_SECTIONS.AUTHENTICATION_ACCESS.title]: this.getAuthenticationDetailsFormFields,
        [webApplicationConstants.FORM_SECTIONS.NETWORK_CONNECTIVITY.title]: this.getNetworkFormFields,
        [webApplicationConstants.FORM_SECTIONS.ENVIRONMENT_DETAILS.title]: this.getEnvironmentDetailsFormFields,
        [webApplicationConstants.FORM_SECTIONS.ACCOUNTABILITY_CONTACT.title]: this.getAccountabilityDetailsFormFields,
        [webApplicationConstants.FORM_SECTIONS.COMPLIANCE_SECURITY.title]: this.getComplianceDetailsFormFields,
        [webApplicationConstants.FORM_SECTIONS.BACKUP_RESTORATION.title]: this.getBackupRestorationDetailsFormFields,
        [webApplicationConstants.FORM_SECTIONS.ASSOCIATED_FILES.title]: this.getAssociatedFilesFormFields,
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

export default WebApplicationUtils;
