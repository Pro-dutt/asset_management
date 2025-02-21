import { useEffect, useMemo } from "react";
import NetworkDeviceUtils from "../utils";
import NetworkDeviceConstants from "../utils/constants";
import { useNetworkDevice } from "@/services/context/networkDevice";
import tenantConstants from "@/modules/tenant/utils/constants";
import { useTenant } from "@/services/context/tenant";

export const useNetworkDeviceInfoForm = (data = {}, onSuccess) => {
    const { networkDeviceCreation, networkDeviceUpdation } = useNetworkDevice();
    const { tenantDropdownList } = useTenant();

    useEffect(() => {
        tenantDropdownList.fetch({});
    }, []);
    const formConfig = useMemo(
        () => [
            ...NetworkDeviceUtils.createFormSection(tenantConstants.FORM_TENANT_SECTION, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.DEVICE_CATEGORY, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.DEVICE_PROPERTIES, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.NETWORK_DETAILS, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.PROCUREMENT_DETAILS, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.OPERATION_DETAILS, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data, tenantDropdownList.data]
    );

    const operation = data?.inventoryId ? networkDeviceUpdation : networkDeviceCreation;
    const handleFormSubmit = (formData) => {
        operation.execute({
            ...(data?.inventoryId && { id: data.inventoryId }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: operation?.isLoading, NetworkDeviceInfoFormErrors: operation?.errorMessages };
};
