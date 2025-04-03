import { useEffect, useMemo } from "react";
import ServerUtils from "../utils";
import { useServer } from "@/services/context/server";
import serverConstants from "../utils/constants";
import tenantConstants from "@/modules/tenant/utils/constants";
import { useTenant } from "@/services/context/tenant";
import { useDepartment } from "@/services/context/department";
import { useOperatingSystem } from "@/services/context/operatingSystem";

export const useServerInfoForm = (data = {}, onSuccess) => {
    const { serverCreation, serverUpdation } = useServer();
    const { tenantDropdownList } = useTenant();
    const { departmentDropdownList } = useDepartment();
    const { operatingSystemDropdownList } = useOperatingSystem();

    useEffect(() => {
        tenantDropdownList.fetch({});
        departmentDropdownList.fetch({});
        operatingSystemDropdownList.fetch({});
    }, []);

    useEffect(() => {}, []);

    const formConfig = useMemo(
        () => [
            ...ServerUtils.createFormSection(tenantConstants.FORM_TENANT_SECTION, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.DEVICE_PROPERTIES, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.NETWORK_DETAILS, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.PROCUREMENT_DETAILS, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.OPERATION_DETAILS, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.BACKUP_RESTORATION, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data, tenantDropdownList.data, departmentDropdownList.data, operatingSystemDropdownList.data]
    );

    const operation = data?.inventoryId ? serverUpdation : serverCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?.inventoryId && { id: data.inventoryId }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, serverInfoFormErrors: operation?.errorMessages };
};
