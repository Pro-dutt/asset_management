import { useMemo } from "react";
import DesktopUtils from "../utils";
import { useDesktop } from "@/services/context/desktop";
import desktopConstants from "../utils/constants";

export const useDesktopInfoForm = (data = {}, onSuccess) => {
    const { desktopCreation, desktopUpdation } = useDesktop();
    const formConfig = useMemo(
        () => [
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.DEVICE_PROPERTIES, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.NETWORK_DETAILS, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.PROCUREMENT_DETAILS, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.OPERATION_DETAILS, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        const operation = data?.inventoryId ? desktopUpdation : desktopCreation;

        operation.execute({
            ...(data?.inventoryId && { id: data.inventoryId }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: desktopCreation?.isLoading, desktopInfoFormErrors: desktopCreation?.errorMessages };
};
