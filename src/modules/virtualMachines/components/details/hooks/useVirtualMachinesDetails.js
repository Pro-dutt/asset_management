import DataNotFound from "@/components/DataNotFound";
import GlobalICONS from "@/lib/utils/icons";
import { useMemo } from "react";
import sampleVirtualMachinesDetails from "../utils/seeds";

const useVirtualMachinesDetails = (data = sampleVirtualMachinesDetails) => {
    const virtualMachinesDetailsConfig = useMemo(
        () => [
            {
                heading: {
                    label: "Virtual Machine Details",
                    icon: GlobalICONS.DESKTOP,
                    description: "Manage VM details including status, OS version, and business impact",
                },
                body: {
                    vmName: data.vmName,
                    status: data.status,
                    osVersion: data.osVersion,
                    environment: data.environment,
                    assetId: data.assetId,
                    virtualizationPlatform: data.virtualizationPlatform,
                    businessImpact: data.businessImpact,
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
                    acquisitionDate: data.acquisitionDate,
                    procurementPeriod: data.procurementPeriod,
                    warrantyExpiry: data.warrantyExpiry,
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
                    assignedDate: data.assignedDate,
                    responsibleManagedBy: data.responsibleManagedBy,
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
                    antivirusStatus: data.antivirusStatus,
                    businessImpact: data.businessImpact,
                    patchLevel: data.patchLevel,
                    lastAuditDateIfAny: data.lastAuditDateIfAny,
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
                    capitalExpenditureCapEx: data.capitalExpenditureCapEx,
                    operationalExpenditureOpEx: data.operationalExpenditureOpEx,
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
                    deviceStatus: data.deviceStatus,
                    deviceState: data.deviceState,
                    ipAllocationType: data.ipAllocationType,
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
        virtualMachinesDetailsConfig,
    };
};

export default useVirtualMachinesDetails;
