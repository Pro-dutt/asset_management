import DataCenterApiService from "@/services/api/dataCenter";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback } from "react";

export const useDataCenterCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_DATA_CENTER_KEY = apiConstants.loadingStateKeys.CREATE_DATA_CENTER;

    const executeDataCenterCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_DATA_CENTER_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DataCenterApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_DATA_CENTER_KEY,
                        value: data,
                        hideNotification: true,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_DATA_CENTER_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_DATA_CENTER_KEY, false);
            }
        },
        [CREATE_DATA_CENTER_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        dataCenterCreation: {
            execute: executeDataCenterCreation,
            isLoading: isLoading(CREATE_DATA_CENTER_KEY) || false,
            successMessages: successMessages?.[CREATE_DATA_CENTER_KEY],
            errorMessages: errorMessages?.[CREATE_DATA_CENTER_KEY],
        },
    };
};
