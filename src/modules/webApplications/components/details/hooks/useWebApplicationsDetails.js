import DataNotFound from "@/components/DataNotFound";
import GlobalICONS from "@/lib/utils/icons";
import { useMemo } from "react";
import sampleWebApplicationsDetails from "../utils/seeds";
import webApplicationConstants from "../../form/utils/constants";
import globalConstants from "@/lib/utils/contants";
import GlobalUtils from "@/lib/utils";

const useWebApplicationsDetails = (data = sampleWebApplicationsDetails) => {
    const webApplicationsDetailsConfig = useMemo(
        () => [
            {
                heading: {
                    label: "General Information",
                    icon: GlobalICONS.INFORMATION,
                    description: "general details of  web application",
                },
                body: {
                    applicationName: data.applicationName,
                    status: webApplicationConstants.STATUS.getLabel(data.status),
                    version: data.version,
                    hostAssetId: data.hostAssetId,
                    businessImpact: globalConstants.BUSINESS_IMPACT.getLabel(data.businessImpact),
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Authentication & Access Details",
                    icon: GlobalICONS.AUTHENTICATION,
                    description: "Authentication-related details of the web application",
                },
                body: {
                    crlClientAuthentication: webApplicationConstants.CLIENT_AUTH_METHODS.getLabel(data.crlClientAuthentication),
                    userAccessMethod: webApplicationConstants.USER_ACCESS_PROFILES.getLabel(data.userAccessMethod),
                    face: webApplicationConstants.FACE_LEVELS.getLabel(data.face),
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Network Details",
                    icon: GlobalICONS.NETWORKING_DEVICE,
                    description: "Network-related details of the web application",
                },
                body: {
                    ip: data.ip,
                    ipType: data.ipType,
                    url: data.url,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Environment Details",
                    icon: GlobalICONS.ENVIRONMENT,
                    description: "Environment-related details of the web application",
                },
                body: {
                    env: data.env,
                    locationDetail: data.locationDetail,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Accountability & Contact Details",
                    icon: GlobalICONS.USERS,
                    description: "Ownership and contact details for the web application",
                },
                body: {
                    accountable: data.accountable,
                    responsible: data.responsible,
                    contactEmail: data.contactEmail,
                    department: GlobalUtils.capitalizeEachWord(data.department),
                    escalationEmail: data.escalationEmail,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Security & Compliance Details",
                    icon: GlobalICONS.SECURITY,
                    description: "Compliance and security assessment details of the web application",
                },
                body: {
                    vulnerabilityTrackerLink: data.vulnerabilityTrackerLink,
                    openVulnerabilities: data.openVulnerabilities,
                    lastVaptDate: data.lastVaptDate,
                    lastCodeReviewDate: data.lastCodeReviewDate,
                    lastAuditDate: data.lastAuditDate,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Backup & Restoration Details",
                    icon: GlobalICONS.BACKUP,
                    description: "Backup and restoration details of the web application",
                },
                body: {
                    backupEnabled: globalConstants.BACKUP_STATUS.getLabel(data.backupEnabled ? 1 : 0),
                    backupFrequency: globalConstants.BACKUP_FREQUENCIES.getLabel(data.backupFrequency),
                    lastBackupDate: data.lastBackupDate,
                    backupLocation: globalConstants.BACKUP_LOCATIONS.getLabel(data.backupLocation),
                    recoveryTime: data.recoveryTime,
                },
                grid: 3,
            },
            // {
            //     heading: {
            //         label: "No Data Available",
            //         icon: GlobalICONS.DESKTOP,
            //         description: "No available information for this section",
            //     },
            //     customBody: <DataNotFound />,
            //     grid: 1,
            // },
        ],
        [data]
    );
    console.log(data);
    return {
        webApplicationsDetailsConfig,
    };
};

export default useWebApplicationsDetails;
