import DataNotFound from "@/components/DataNotFound";
import GlobalICONS from "@/lib/utils/icons";
import { useMemo } from "react";
import sampleDesktopsDetails from "../utils/seeds";
import globalConstants from "@/lib/utils/contants";
import desktopConstants from "../../form/utils/constants";

const useDesktopsDetails = (data = sampleDesktopsDetails) => {
    const desktopsDetailsConfig = useMemo(
        () => [
            {
                heading: {
                    label: "Device Details",
                    icon: GlobalICONS.DESKTOP,
                    description: "Details of the assigned desktop device",
                },
                body: {
                    productName: data.itemName,
                    serialNumber: data.serialNumber,
                    serviceTag: data.serviceTag,
                    model: data.model,
                    processor: data.processor,
                    diskSpaceGB: data.storage,
                    ramGB: data.ram,
                    cpuCoreCount: data.core,
                    ipAddress: data.ipAddress,
                    macAddress: data.macAddress,
                    nicCount: data.nicCount,
                    operatingSystemWithVersion: data.operatingSystem,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Procurement & Warranty",
                    icon: GlobalICONS.WEBSITE,
                    description: "Procurement and warranty details of the device",
                },
                body: {
                    procurementDate: data.procurementDate,
                    acquisitionDate: data.receivedOn,
                    procurementPeriod: data.procurementPeriod,
                    warrantyExpiry: data.warrantyEndDate,
                    endOfSupport: data.endOfSupport,
                    endOfLife: data.endOfLife,
                    deviceSource: data.deviceSource,
                    vendor: data.vendor,
                    billOrderNumber: data.billOrderNumber,
                    billOrderDate: data.billOrderDate,
                    storeItemNumber: data.storeItemNumber,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Asset & Assignment",
                    icon: GlobalICONS.DATA_CENTER,
                    description: "Asset identification and assignment details",
                },
                body: {
                    assetId: data.assetId,
                    assetLocation: data.assetLocation,
                    assignedDate: data.assetHandoverDate,
                    responsibleManagedBy: data.responsibleForItem,
                    custodianName: data.custodianName,
                    custodianEmail: data.custodianEmail,
                    custodianDepartment: data.custodianDepartment,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Security & Compliance",
                    icon: GlobalICONS.SECURITY,
                    description: "Security status and compliance information",
                },
                body: {
                    antivirusStatus: desktopConstants.ANTIVIRUS_STATUS.getLabel(data.antivirusStatus),
                    businessImpact: globalConstants.BUSINESS_IMPACT.getLabel(data.businessImpact),
                    patchLevel: globalConstants.PATCH_LEVELS.getLabel(data.patchLevel),
                    lastAuditDateIfAny: data.lastAuditDate,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Financial Details",
                    icon: GlobalICONS.FINANCE,
                    description: "Financial expenditure details of the device",
                },
                body: {
                    capitalExpenditureCapEx: data?.capEx,
                    operationalExpenditureOpEx: data?.opEx,
                },
                grid: 3,
            },
            {
                heading: {
                    label: "Device State",
                    icon: GlobalICONS.DEVICE,
                    description: "Current state and status of the device",
                },
                body: {
                    deviceStatus: data.statusName,
                    deviceState: globalConstants.DEVICE_STATES.getLabel(data.deviceState),
                    ipAllocationType: data.ipType,
                    cpe: data.cpe,
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
        desktopsDetailsConfig,
    };
};

export default useDesktopsDetails;
