import globalConstants, { createEnum } from "@/lib/utils/contants";
import GlobalICONS from "@/lib/utils/icons";

const webApplicationConstants = {
    STATUS: createEnum([
        { key: "ACTIVE", value: 1, label: "Active" },
        { key: "INACTIVE", value: 2, label: "Inactive" },
        { key: "UNDER_MAINTENANCE", value: 3, label: "Under Maintenance" },
        { key: "DECOMISSIONED", value: 4, label: "Decomissioned" },
    ]),

    CLIENT_AUTH_METHODS: createEnum([
        { key: "ANONYMOUS", value: 1, label: "Anonymous" },
        { key: "PASSWORD", value: 2, label: "Password" },
        { key: "SSO", value: 3, label: "SSO" },
        { key: "TWO_FA", value: 4, label: "Two FA" },
        { key: "MULTI_FA", value: 5, label: "Multi FA" },
        { key: "CERTIFICATE", value: 6, label: "Certificate" },
        { key: "TOKEN", value: 7, label: "Token" },
        { key: "CAPTCHA", value: 8, label: "Captcha" },
        { key: "LDAP", value: 9, label: "LDAP" },
        { key: "OTHER", value: 10, label: "Other" },
    ]),

    USER_ACCESS_PROFILES: createEnum([
        { key: "END_USER", value: 1, label: "End User" },
        { key: "MANAGEMENT", value: 2, label: "Management" },
        { key: "DEVELOPER", value: 3, label: "Developer" },
        { key: "PUBLIC", value: 4, label: "Public" },
        { key: "CLIENT", value: 5, label: "Client" },
        { key: "VENDOR", value: 6, label: "Vendor" },
        { key: "OTHERS", value: 7, label: "Others" },
    ]),

    FACE_LEVELS: createEnum([
        { key: "PUBLIC", value: 1, label: "Public" },
        { key: "INTERNAL", value: 2, label: "Internal" },
        { key: "RESTRICTED", value: 3, label: "Restricted" },
        { key: "DMZ", value: 4, label: "DMZ" },
    ]),

    FORM_SECTIONS: Object.freeze({
        GENERAL_INFORMATION: {
            title: "General Information",
            icon: GlobalICONS.DESKTOP,
            description: "Configure the general details of your web application",
        },
        ENVIRONMENT_DETAILS: {
            title: "Environment Details",
            icon: GlobalICONS.ENVIRONMENT,
            description: "Configure the environment details",
        },
        ...globalConstants.FORM_SECTIONS,
    }),
};

// Freeze the entire webApplicationConstants object
Object.freeze(webApplicationConstants);

export default webApplicationConstants;
