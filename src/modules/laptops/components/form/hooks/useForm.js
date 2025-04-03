import DesktopUtils from "@/modules/desktops/components/form/utils";
import desktopConstants from "@/modules/desktops/components/form/utils/constants";
import { useDepartment } from "@/services/context/department";
import tenantConstants from "@/modules/tenant/utils/constants";
import { useLaptop } from "@/services/context/laptop";
import { useOperatingSystem } from "@/services/context/operatingSystem";
import { useTenant } from "@/services/context/tenant";
import { useEffect, useMemo } from "react";

export const useLaptopInfoForm = (data = {}, onSuccess) => {
    const { laptopCreation, laptopUpdation } = useLaptop();
    const { departmentDropdownList } = useDepartment();
    const { operatingSystemDropdownList } = useOperatingSystem();
    const { tenantDropdownList } = useTenant();

    useEffect(() => {
        departmentDropdownList.fetch({});
        operatingSystemDropdownList.fetch({});
        tenantDropdownList.fetch({});
    }, []);

    const formConfig = useMemo(
        () => [
            ...DesktopUtils.createFormSection(tenantConstants.FORM_TENANT_SECTION, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.DEVICE_PROPERTIES, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.NETWORK_DETAILS, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.PROCUREMENT_DETAILS, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.OPERATION_DETAILS, data),
            ...DesktopUtils.createFormSection(desktopConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data, departmentDropdownList.data, operatingSystemDropdownList.data, tenantDropdownList.data]
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
