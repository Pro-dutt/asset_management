import ServerApiService from "@/services/api/server";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback } from "react";

export const useServerCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_SERVER_KEY = apiConstants.loadingStateKeys.CREATE_SERVER;

    const executeServerCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_SERVER_KEY, true);
            const controller = new AbortController();

            try {
                const data = await ServerApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_SERVER_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_SERVER_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_SERVER_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_SERVER_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        serverCreation: {
            execute: executeServerCreation,
            isLoading: isLoading(CREATE_SERVER_KEY) || false,
            successMessages: successMessages?.[CREATE_SERVER_KEY],
            errorMessages: errorMessages?.[CREATE_SERVER_KEY],
        },
    };
};
