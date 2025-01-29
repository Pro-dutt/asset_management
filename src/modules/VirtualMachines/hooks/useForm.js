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
