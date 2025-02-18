import DataNotFound from "@/components/DataNotFound";
import GlobalICONS from "@/lib/utils/icons";
import { useMemo } from "react";
import sampleNetworkingDevicesDetails from "../utils/seeds";
import globalConstants from "@/lib/utils/contants";
import GlobalUtils from "@/lib/utils";

const useNetworkingDevicesDetails = (data = sampleNetworkingDevicesDetails) => {
    const networkingDevicesDetailsConfig = useMemo(
        () => [
            {
                heading: {
                    label: "Device Category",
                    icon: GlobalICONS.DEVICE,
                    description: "Category of the network device",
                },
                body: {
                    deviceCategory: data.deviceCategory,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Device Properties",
                    icon: GlobalICONS.PROPERTY,
                    description: "Detailed properties of the device",
                },
                body: {
                    deviceType: data.deviceType,
                    itemName: data.itemName,
                    serialNumber: data.serialNumber,
                    serviceTag: data.serviceTag,
                    firmwareVersion: data.firmwareVersion,
                    oem: data.oem,
                    model: data.model,
                    cpe: data.cpe,
                    statusId: globalConstants.STATUS_CATEGORIES.getLabel(data.statusId),
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Lifecycle Management",
                    icon: GlobalICONS.LIFE_CYCLE,
                    description: "Lifecycle details of the web application",
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
                    description: "Network configuration details of the web application",
                },
                body: {
                    ipAddress: data.ip,
                    ipType: data.ipType,
                    subnetMask: data.subnetMask,
                    macAddress: data.macAddress,
                    dnsName: data.dnsName,
                    nicCount: data.nicCount,
                    linkSpeed: data.linkSpeed,
                    estimatedBandwidth: data.estimatedBandwidth,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Assignment Details",
                    icon: GlobalICONS.ASSIGNMENT,
                    description: "Assignment and ownership details of the asset",
                },
                body: {
                    assetHandoverDate: data.assetHandoverDate,
                    assetId: data.assetId,
                    assetLocation: data.assetLocation,
                    custodianDepartment: GlobalUtils.capitalizeEachWord(data.custodianDepartment),
                    custodianName: data.custodianName,
                    responsibleForItem: data.responsibleForItem,
                    custodianEmail: data.custodianEmail,
                    businessImpact: globalConstants.BUSINESS_IMPACT.getLabel(data.businessImpact),
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Procurement & Financial Details",
                    icon: GlobalICONS.PROCUREMENT,
                    description: "Details related to procurement and financial expenditure",
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
                    description: "Operational status, maintenance, and audit details",
                },
                body: {
                    deviceState: globalConstants.DEVICE_STATES.getLabel(data.deviceState),
                    lastMaintenanceDate: data.lastMaintenanceDate,
                    maintenanceDate: data.maintenanceDate,
                    lastConfigurationBackupDate: data.lastConfigurationBackupDate,
                    scheduledConfigurationBackupDate: data.scheduledConfigurationBackupDate,
                    lastAuditDate: data.lastAuditDate,
                    reachabilityStatus: data.reachabilityStatus,
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
        networkingDevicesDetailsConfig,
    };
};

export default useNetworkingDevicesDetails;
