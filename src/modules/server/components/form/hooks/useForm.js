import { useMemo } from "react";
import ServerUtils from "../utils";
import { useServer } from "@/services/context/server";
import serverConstants from "../utils/constants";

export const useServerInfoForm = (data = {}, onSuccess) => {
    const { serverCreation, serverUpdation } = useServer();

    const formConfig = useMemo(
        () => [
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.DEVICE_PROPERTIES, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.LIFECYCLE_MANAGEMENT, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.NETWORK_DETAILS, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.ASSIGNMENT_DETAILS, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.PROCUREMENT_DETAILS, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.OPERATION_DETAILS, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.BACKUP_RESTORATION, data),
            ...ServerUtils.createFormSection(serverConstants.FORM_SECTIONS.ASSOCIATED_FILES, data),
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        const operation = data?.inventoryId ? serverUpdation : serverCreation;

        operation.execute({
            ...(data?.inventoryId && { id: data.inventoryId }),
            payload: formData,
            onSuccess: onSuccess,
            options: { showNotification: true },
        });
    };

    return { formConfig, handleFormSubmit, isLoading: serverCreation?.isLoading, serverInfoFormErrors: serverCreation?.errorMessages };
};
