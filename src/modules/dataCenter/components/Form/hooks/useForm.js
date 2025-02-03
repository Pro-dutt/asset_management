import { useMemo } from "react";
import DataCenterUtils from "../utils";
import { useDataCenter } from "@/services/context/dataCenter";
import dataCenterConstants from "../utils/constants";

export const useDataCenterInfoForm = (data = {}) => {
    const { dataCenterCreation } = useDataCenter();

    const formConfig = useMemo(
        () => [
            ...DataCenterUtils.createFormSection(dataCenterConstants.FORM_SECTIONS.DEVICE_PROPERTIES, data),
            ...DataCenterUtils.createFormSection(dataCenterConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT, data),
            ...DataCenterUtils.createFormSection(dataCenterConstants.FORM_SECTIONS.NETWORK_DETAILS, data),
            ...DataCenterUtils.createFormSection(dataCenterConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS, data),
            ...DataCenterUtils.createFormSection(dataCenterConstants.FORM_SECTIONS.PROCUREMENT_DETAILS, data),
            ...DataCenterUtils.createFormSection(dataCenterConstants.FORM_SECTIONS.OPERATION_DETAILS, data),
            ...DataCenterUtils.createFormSection(dataCenterConstants.FORM_SECTIONS.BACKUP_RESTORATION, data),
            ...DataCenterUtils.createFormSection(dataCenterConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        dataCenterCreation.execute({
            payload: formData,
            onSuccess: () => {
                // onboardedUser.fetch({});
            },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: dataCenterCreation?.isLoading, dataCenterInfoFormErrors: dataCenterCreation?.errorMessages };
};
