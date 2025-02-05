import { useMemo } from "react";
import { useWebApplication } from "@/services/context/webApplication";
import WebApplicationUtils from "../utils";
import webApplicationConstants from "../utils/constants";

export const useWebApplicationInfoForm = (data = {}, onSuccess) => {
    const { webApplicationCreation, webApplicationUpdation } = useWebApplication();

    const formConfig = useMemo(
        () => [
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.GENERAL_INFORMATION, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.AUTHENTICATION_ACCESS, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.NETWORK_CONNECTIVITY, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.ENVIRONMENT_DETAILS, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.ACCOUNTABILITY_CONTACT, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.COMPLIANCE_SECURITY, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.BACKUP_RESTORATION, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        const operation = data?.inventoryId ? webApplicationUpdation : webApplicationCreation;

        operation.execute({
            ...(data?.inventoryId && { id: data.inventoryId }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: webApplicationCreation?.isLoading, WebApplicationInfoFormErrors: webApplicationCreation?.errorMessages };
};
