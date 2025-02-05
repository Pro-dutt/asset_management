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
                return () => controller.abort();
            }
        },
        [CREATE_WEB_APPLICATION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        webApplicationCreation: {
            execute: executeWebApplicationCreation,
            isLoading: isLoading(CREATE_WEB_APPLICATION_KEY) || false,
            successMessages: successMessages?.[CREATE_WEB_APPLICATION_KEY],
            errorMessages: errorMessages?.[CREATE_WEB_APPLICATION_KEY],
        },
    };
};

export const useWebApplicationUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_WEB_APPLICATION_KEY = apiConstants.loadingStateKeys.UPDATE_WEB_APPLICATION;

    const executeWebApplicationUpdation = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_WEB_APPLICATION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await WebApplicationApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_WEB_APPLICATION_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_WEB_APPLICATION_KEY,
                    value: error || "Failed to complete updation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_WEB_APPLICATION_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_WEB_APPLICATION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        webApplicationUpdation: {
            execute: executeWebApplicationUpdation,
            isLoading: isLoading(UPDATE_WEB_APPLICATION_KEY) || false,
            successMessages: successMessages?.[UPDATE_WEB_APPLICATION_KEY],
            errorMessages: errorMessages?.[UPDATE_WEB_APPLICATION_KEY],
        },
    };
};

export const useWebApplicationDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_WEB_APPLICATION_KEY = apiConstants.loadingStateKeys.DELETE_WEB_APPLICATION;

    const executeWebApplicationDeletion = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_WEB_APPLICATION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await WebApplicationApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_WEB_APPLICATION_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_WEB_APPLICATION_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_WEB_APPLICATION_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_WEB_APPLICATION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        webApplicationDeletion: {
            execute: executeWebApplicationDeletion,
            isLoading: isLoading(DELETE_WEB_APPLICATION_KEY) || false,
            successMessages: successMessages?.[DELETE_WEB_APPLICATION_KEY],
            errorMessages: errorMessages?.[DELETE_WEB_APPLICATION_KEY],
        },
    };
};
