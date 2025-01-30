import { useMemo } from "react";
import virtualMachineConstants from "../utils/constants";
import { useVirtualMachines } from "@/services/context/virtualMachines";

export const useVirtualMachineInfoForm = (data = {}) => {
    const { virtualMachineCreation } = useVirtualMachines();

    const formConfig = useMemo(
        () => [
            {
                type: "rowHeader",
                label: "VM Details",
            },
            {
                type: "text",
                name: "vmName",
                label: "VM Name",
                grid: 4,
                defaultValue: data?.vmName,
                placeholder: "Ubuntu",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "status",
                label: "VM Status",
                grid: 4,
                defaultValue: data?.status,
                options: virtualMachineConstants.STATUS_OPTIONS,
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "text",
                name: "osVersion",
                label: "Operating System (with version)",
                grid: 4,
                defaultValue: data?.osVersion,
                placeholder: "V.19.0.1",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "environment",
                label: "Environment",
                grid: 4,
                defaultValue: data?.environment,
                options: virtualMachineConstants.ENVIRONMENT_OPTIONS,
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "text",
                name: "assetId",
                label: "VM Asset ID",
                grid: 4,
                defaultValue: data?.assetId,
                placeholder: "123",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "virtualizationPlatform",
                label: "Hypervisor Platform",
                grid: 4,
                defaultValue: data?.virtualizationPlatform,
                options: virtualMachineConstants.VIRTUALIZATION_PLATFORM_OPTIONS,
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "select",
                name: "businessImpact",
                label: "Business Impact",
                grid: 4,
                defaultValue: data?.businessImpact,
                options: virtualMachineConstants.BUSINESS_IMPACT_OPTIONS,
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "rowHeader",
                label: "Host Details",
            },
            {
                type: "text",
                name: "hostServerID",
                label: "Host Machine Asset ID",
                grid: 4,
                defaultValue: data?.hostServerID,
                placeholder: "123",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "hostIpAddress",
                label: "Host IP Address",
                grid: 4,
                defaultValue: data?.hostIpAddress,
                placeholder: "192.168.90.43",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "hostPhysicalLocation",
                label: "Host Physical Location",
                grid: 4,
                defaultValue: data?.hostPhysicalLocation,
                placeholder: "Banglore",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "rowHeader",
                label: "Resource Allocation",
            },
            {
                type: "text",
                name: "storage",
                label: "Disk Space (GB)",
                grid: 4,
                defaultValue: data?.storage,
                placeholder: "128",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "memory",
                label: "RAM (GB)",
                grid: 4,
                defaultValue: data?.memory,
                placeholder: "16",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "cpuCores",
                label: "CPU Core Count",
                grid: 4,
                defaultValue: data?.cpuCores,
                placeholder: "4",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "rowHeader",
                label: "Network & Connectivity",
            },
            {
                type: "text",
                name: "ipAddress",
                label: "IP Address",
                grid: 4,
                defaultValue: data?.ipAddress,
                placeholder: "128",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "ipType",
                label: "IP Allocation Type",
                grid: 4,
                defaultValue: data?.ipType,
                placeholder: "16",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "macAddress",
                label: "MAC Address",
                grid: 4,
                defaultValue: data?.macAddress,
                placeholder: "4",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "runningServices.serviceName",
                label: "Running Services",
                grid: 4,
                defaultValue: data?.runningServices?.serviceName,
                placeholder: "4",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "runningServices.port",
                label: "Service Ports",
                grid: 4,
                defaultValue: data?.runningServices?.port,
                placeholder: "4",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        virtualMachineCreation.execute({
            payload: formData,
            onSuccess: () => {
                // onboardedUser.fetch({});
            },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: virtualMachineCreation.isLoading, virtualMachineInfoFormErrors: virtualMachineCreation.errorMessages };
};
