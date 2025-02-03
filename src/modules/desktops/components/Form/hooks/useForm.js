import { useMemo } from "react";
import DesktopUtils from "../utils";
import { useDesktop } from "@/services/context/desktop";
import desktopConstants from "../utils/constants";

export const useDesktopInfoForm = (data = {}) => {
    const { desktopCreation } = useDesktop();

    const formConfig = useMemo(
        () => [
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.ASSET_TYPE, data),
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
        desktopCreation.execute({
            payload: formData,
            onSuccess: () => {
                // onboardedUser.fetch({});
            },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: desktopCreation?.isLoading, desktopInfoFormErrors: desktopCreation?.errorMessages };
};
