import { useEffect, useMemo } from "react";
import { Country } from "country-state-city";
import BoardingUtils from "../utils";
import boardingConstants from "../utils/constants";
import ColorOptions from "../components/colorOptions";
import ThemeOptions from "../components/themeOptions";
import { useInstitute } from "@/services/context/institute";
import { useWizardStep } from "./useWizardStep";
import LandingTemplateOption from "../components/landingTemplateOption";
import GlobalUtils from "@/lib/utils";
import { useTemplate } from "@/services/context/template";

export const VirtualMachineInfoForm = (data) => {
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
                options: BoardingUtils.getInstituteOptions(),
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
                options: BoardingUtils.getInstituteOptions(),
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
                options: BoardingUtils.getInstituteOptions(),
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
                options: BoardingUtils.getInstituteOptions(),
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        const options = {
            targetKeys: ["ownerName", "ownerPhone", "instituteName", "instituteType", "brandName"],
            trimStrings: true,
            precisionForNumbers: 2,
            ignoreEmptyValues: true,
        };
        if (GlobalUtils.hasFormChanges(formData, onboardedUser.data, options)) {
            instituteSetupBasicInfo.execute({
                payload: formData,
                onSuccess: () => {
                    onboardedUser.fetch({});
                    handleStepChange(currentStep + 1);
                },
            });
        } else {
            handleStepChange(currentStep + 1);
        }
    };

    return { formConfig, handleFormSubmit, isBasicFormLoading: instituteSetupBasicInfo.isLoading, basicInfoFormErrors: instituteSetupBasicInfo.errorMessages };
};
