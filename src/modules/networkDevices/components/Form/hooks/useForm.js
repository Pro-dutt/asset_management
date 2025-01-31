import { useMemo } from "react";
import NetworkDeviceUtils from "../utils";
import NetworkDeviceConstants from "../utils/constants";
import { useNetworkDevice } from "@/services/context/networkDevice";

export const useNetworkDeviceInfoForm = (data = {}) => {
    const { NetworkDeviceCreation } = useNetworkDevice();

    const formConfig = useMemo(
        () => [
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.DEVICE_CATEGORY, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.DEVICE_PROPERTIES, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.NETWORK_DETAILS, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.PROCUREMENT_DETAILS, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.OPERATION_DETAILS, data),
            ...NetworkDeviceUtils.createFormSection(NetworkDeviceConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        NetworkDeviceCreation.execute({
            payload: formData,
            onSuccess: () => {
                // onboardedUser.fetch({});
            },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: NetworkDeviceCreation?.isLoading, NetworkDeviceInfoFormErrors: NetworkDeviceCreation?.errorMessages };
};
