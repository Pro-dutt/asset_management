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

export const useServerUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_SERVER_KEY = apiConstants.loadingStateKeys.UPDATE_SERVER;

    const executeServerUpdation = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_SERVER_KEY, true);
            const controller = new AbortController();

            try {
                const data = await ServerApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_SERVER_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_SERVER_KEY,
                    value: error || "Failed to complete updation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_SERVER_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_SERVER_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        serverUpdation: {
            execute: executeServerUpdation,
            isLoading: isLoading(UPDATE_SERVER_KEY) || false,
            successMessages: successMessages?.[UPDATE_SERVER_KEY],
            errorMessages: errorMessages?.[UPDATE_SERVER_KEY],
        },
    };
};

export const useServerDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_SERVER_KEY = apiConstants.loadingStateKeys.DELETE_SERVER;

    const executeServerDeletion = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_SERVER_KEY, true);
            const controller = new AbortController();

            try {
                const data = await ServerApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_SERVER_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_SERVER_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_SERVER_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_SERVER_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        serverDeletion: {
            execute: executeServerDeletion,
            isLoading: isLoading(DELETE_SERVER_KEY) || false,
            successMessages: successMessages?.[DELETE_SERVER_KEY],
            errorMessages: errorMessages?.[DELETE_SERVER_KEY],
        },
    };
};
