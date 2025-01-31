import WebApplicationApiService from "@/services/api/webApplications";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback } from "react";

export const useWebApplicationCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_WEB_APPLICATION_KEY = apiConstants.loadingStateKeys.CREATE_WEB_APPLICATION;

    const executeWebApplicationCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_WEB_APPLICATION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await WebApplicationApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_WEB_APPLICATION_KEY,
                        value: data,
                        hideNotification: true,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_WEB_APPLICATION_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_WEB_APPLICATION_KEY, false);
            }
        },
        [CREATE_WEB_APPLICATION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        virtualMachineCreation: {
            execute: executeWebApplicationCreation,
            isLoading: isLoading(CREATE_WEB_APPLICATION_KEY) || false,
            successMessages: successMessages?.[CREATE_WEB_APPLICATION_KEY],
            errorMessages: errorMessages?.[CREATE_WEB_APPLICATION_KEY],
        },
    };
};
