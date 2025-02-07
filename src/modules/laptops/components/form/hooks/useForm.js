import DesktopUtils from "@/modules/desktops/components/form/utils";
import desktopConstants from "@/modules/desktops/components/form/utils/constants";
import { useLaptop } from "@/services/context/laptop";
import { useMemo } from "react";

export const useLaptopInfoForm = (data = {}, onSuccess) => {
    const { laptopCreation, laptopUpdation } = useLaptop();
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

    const operation = data?.inventoryId ? laptopUpdation : laptopCreation;

    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?.inventoryId && { id: data.inventoryId }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, desktopInfoFormErrors: operation?.errorMessages };
};
