import DataNotFound from "@/components/DataNotFound";
import GlobalICONS from "@/lib/utils/icons";
import { useMemo } from "react";
import sampleServersDetails from "../utils/seeds";
import GlobalUtils from "@/lib/utils";
import globalConstants from "@/lib/utils/contants";
import serverConstants from "../../form/utils/constants";

const useServersDetails = (data = sampleServersDetails) => {
    const serversDetailsConfig = useMemo(
        () => [
            {
                heading: {
                    label: "Device Properties",
                    icon: GlobalICONS.PROPERTY,
                    description: "Device specifications and status details",
                },
                body: {
                    itemName: data.itemName,
                    serialNumber: data.serialNumber,
                    serviceTag: data.serviceTag,
                    oem: data.oem,
                    model: data.model,
                    processor: data.processor,
                    storage: data.storage,
                    ram: data.ram,
                    core: data.core,
                    cpe: data.cpe,
                    statusId: globalConstants.STATUS_CATEGORIES.getLabel(data.statusId),
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Lifecycle Management",
                    icon: GlobalICONS.LIFE_CYCLE,
                    description: "Track procurement, warranty, and support timelines",
                },
                body: {
                    procurementDate: data.procurementDate,
                    receivedOn: data.receivedOn,
                    warrantyEndDate: data.warrantyEndDate,
                    endOfSupport: data.endOfSupport,
                    endOfLife: data.endOfLife,
                    procurementPeriod: data.procurementPeriod,
                },

                grid: 3,
            },
            {
                heading: {
                    label: "Network & Connectivity",
                    icon: GlobalICONS.NETWORKING_DEVICE,
                    description: "Manage IP configurations and network interfaces",
                },
                body: {
                    ipAddress: data.ip,
                    ipType: data.ipType,
                    macAddress: data.macAddress,
                    nicCount: data.nicCount,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Assignment Details",
                    icon: GlobalICONS.ASSIGNMENT,
                    description: "Track asset assignments and responsible personnel",
                },
                body: {
                    assetHandoverDate: data.assetHandoverDate,
                    assetId: data.assetId,
                    assetLocation: data.assetLocation,
                    operatingSystem: data.operatingSystem,
                    adUserName: data.adUserName,
                    responsibleForItem: data.responsibleForItem,
                    custodianName: data.custodianName,
                    custodianEmail: data.custodianEmail,
                    custodianDepartment: GlobalUtils.capitalizeEachWord(data.custodianDepartment),
                    businessImpact: globalConstants.BUSINESS_IMPACT.getLabel(data.businessImpact),
                    antivirusStatus: serverConstants.ANTIVIRUS_STATUS.getLabel(data.antivirusStatus),
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Procurement Details",
                    icon: GlobalICONS.PROCUREMENT,
                    description: "Track procurement details, vendor information, and expenditures",
                },
                body: {
                    vendor: data.vendor,
                    deviceSource: data.deviceSource,
                    billOrderNumber: data.billOrderNumber,
                    billOrderDate: data.billOrderDate,
                    storeItemNumber: data.storeItemNumber,
                    capEx: data.capEx,
                    opEx: data.opEx,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Operations Details",
                    icon: GlobalICONS.OPERATION,
                    description: "Monitor device state, last audit date, and patch level",
                },
                body: {
                    deviceState: globalConstants.DEVICE_STATES.getLabel(data.deviceState),
                    lastAuditDate: data.lastAuditDate,
                    patchLevel: globalConstants.PATCH_LEVELS.getLabel(data.patchLevel),
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Backup & Restoration Details",
                    icon: GlobalICONS.BACKUP,
                    description: "Manage backup settings, frequency, and recovery objectives",
                },
                body: {
                    backupEnabled: globalConstants.BACKUP_STATUS.getLabel(data.backupEnabled === 1),
                    backupFrequency: globalConstants.BACKUP_FREQUENCIES.getLabel(data.backupFrequency),
                    lastBackupDate: GlobalUtils.formatDateForDateInput(data.lastBackupDate),
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
    //console.log(data);
    return {
        serversDetailsConfig,
    };
};

export default useServersDetails;
