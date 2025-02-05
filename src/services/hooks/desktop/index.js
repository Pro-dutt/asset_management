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

export const useDesktopUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_DESKTOP_KEY = apiConstants.loadingStateKeys.UPDATE_DESKTOP;

    const executeDesktopUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_DESKTOP_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DesktopApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_DESKTOP_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_DESKTOP_KEY,
                    value: error || "Failed to complete updation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_DESKTOP_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_DESKTOP_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        desktopUpdation: {
            execute: executeDesktopUpdate,
            isLoading: isLoading(UPDATE_DESKTOP_KEY) || false,
            successMessages: successMessages?.[UPDATE_DESKTOP_KEY],
            errorMessages: errorMessages?.[UPDATE_DESKTOP_KEY],
        },
    };
};

export const useDesktopDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_DESKTOP_KEY = apiConstants.loadingStateKeys.DELETE_DESKTOP;

    const executeDesktopDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_DESKTOP_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DesktopApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_DESKTOP_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_DESKTOP_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_DESKTOP_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_DESKTOP_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        desktopDeletion: {
            execute: executeDesktopDelete,
            isLoading: isLoading(DELETE_DESKTOP_KEY) || false,
            successMessages: successMessages?.[DELETE_DESKTOP_KEY],
            errorMessages: errorMessages?.[DELETE_DESKTOP_KEY],
        },
    };
};
