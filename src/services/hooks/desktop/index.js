import DesktopApiService from "@/services/api/desktop";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback } from "react";

export const useDesktopCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_DESKTOP_KEY = apiConstants.loadingStateKeys.CREATE_DESKTOP;

    const executeDesktopCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_DESKTOP_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DesktopApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_DESKTOP_KEY,
                        value: data,
                        hideNotification: true,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_DESKTOP_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_DESKTOP_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_DESKTOP_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        desktopCreation: {
            execute: executeDesktopCreation,
            isLoading: isLoading(CREATE_DESKTOP_KEY) || false,
            successMessages: successMessages?.[CREATE_DESKTOP_KEY],
            errorMessages: errorMessages?.[CREATE_DESKTOP_KEY],
        },
    };
};
