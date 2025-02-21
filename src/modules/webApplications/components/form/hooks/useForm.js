import { useEffect, useMemo } from "react";
import { useWebApplication } from "@/services/context/webApplication";
import WebApplicationUtils from "../utils";
import webApplicationConstants from "../utils/constants";
import tenantConstants from "@/modules/tenant/utils/constants";
import { useTenant } from "@/services/context/tenant";

export const useWebApplicationInfoForm = (data = {}, onSuccess) => {
    const { webApplicationCreation, webApplicationUpdation } = useWebApplication();
    const { tenantDropdownList } = useTenant();

    useEffect(() => {
        tenantDropdownList.fetch({});
    }, []);
    const formConfig = useMemo(
        () => [
            ...WebApplicationUtils.createFormSection(tenantConstants.FORM_TENANT_SECTION, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.GENERAL_INFORMATION, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.AUTHENTICATION_ACCESS, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.NETWORK_CONNECTIVITY, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.ENVIRONMENT_DETAILS, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.ACCOUNTABILITY_CONTACT, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.COMPLIANCE_SECURITY, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.BACKUP_RESTORATION, data),
            ...WebApplicationUtils.createFormSection(webApplicationConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data, tenantDropdownList.data]
    );

    const operation = data?.inventoryId ? webApplicationUpdation : webApplicationCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?.inventoryId && { id: data.inventoryId }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, WebApplicationInfoFormErrors: operation?.errorMessages };
};
