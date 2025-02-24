import { useEffect, useMemo } from "react";
import DesktopUtils from "../utils";
import { useDesktop } from "@/services/context/desktop";
import desktopConstants from "../utils/constants";
import { useDepartment } from "@/services/context/department";
import { useOperatingSystem } from "@/services/context/operatingSystem";

export const useDesktopInfoForm = (data = {}, onSuccess) => {
    const { desktopCreation, desktopUpdation } = useDesktop();
    const { departmentDropdownList } = useDepartment();
    const { operatingSystemDropdownList } = useOperatingSystem();

    useEffect(() => {
        departmentDropdownList.fetch({});
        operatingSystemDropdownList.fetch({});
    }, []);

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
        [data, departmentDropdownList.data, operatingSystemDropdownList.data]
    );

    const operation = data?.inventoryId ? desktopUpdation : desktopCreation;
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
