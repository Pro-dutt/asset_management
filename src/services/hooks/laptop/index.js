import LaptopApiService from "@/services/api/laptop";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback } from "react";

export const useLaptopCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_LAPTOP_KEY = apiConstants.loadingStateKeys.CREATE_LAPTOP;

    const executeLaptopCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_LAPTOP_KEY, true);
            const controller = new AbortController();

            try {
                const data = await LaptopApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_LAPTOP_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_LAPTOP_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_LAPTOP_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_LAPTOP_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        laptopCreation: {
            execute: executeLaptopCreation,
            isLoading: isLoading(CREATE_LAPTOP_KEY) || false,
            successMessages: successMessages?.[CREATE_LAPTOP_KEY],
            errorMessages: errorMessages?.[CREATE_LAPTOP_KEY],
        },
    };
};

export const useLaptopUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_LAPTOP_KEY = apiConstants.loadingStateKeys.UPDATE_LAPTOP;

    const executeLaptopUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_LAPTOP_KEY, true);
            const controller = new AbortController();

            try {
                const data = await LaptopApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_LAPTOP_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_LAPTOP_KEY,
                    value: error || "Failed to complete updation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_LAPTOP_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_LAPTOP_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        laptopUpdation: {
            execute: executeLaptopUpdate,
            isLoading: isLoading(UPDATE_LAPTOP_KEY) || false,
            successMessages: successMessages?.[UPDATE_LAPTOP_KEY],
            errorMessages: errorMessages?.[UPDATE_LAPTOP_KEY],
        },
    };
};

export const useLaptopDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_LAPTOP_KEY = apiConstants.loadingStateKeys.DELETE_LAPTOP;

    const executeLaptopDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_LAPTOP_KEY, true);
            const controller = new AbortController();

            try {
                const data = await LaptopApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_LAPTOP_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_LAPTOP_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_LAPTOP_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_LAPTOP_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        laptopDeletion: {
            execute: executeLaptopDelete,
            isLoading: isLoading(DELETE_LAPTOP_KEY) || false,
            successMessages: successMessages?.[DELETE_LAPTOP_KEY],
            errorMessages: errorMessages?.[DELETE_LAPTOP_KEY],
        },
    };
};
