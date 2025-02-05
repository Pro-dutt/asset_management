import NetworkDeviceApiService from "@/services/api/networkDevices";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback } from "react";

export const useNetworkDeviceCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_NETWORK_DEVICE_KEY = apiConstants.loadingStateKeys.CREATE_NETWORK_DEVICE;

    const executeNetworkDeviceCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_NETWORK_DEVICE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await NetworkDeviceApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_NETWORK_DEVICE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_NETWORK_DEVICE_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_NETWORK_DEVICE_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_NETWORK_DEVICE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        networkDeviceCreation: {
            execute: executeNetworkDeviceCreation,
            isLoading: isLoading(CREATE_NETWORK_DEVICE_KEY) || false,
            successMessages: successMessages?.[CREATE_NETWORK_DEVICE_KEY],
            errorMessages: errorMessages?.[CREATE_NETWORK_DEVICE_KEY],
        },
    };
};

export const useNetworkDeviceUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_NETWORK_DEVICE_KEY = apiConstants.loadingStateKeys.UPDATE_NETWORK_DEVICE;

    const executeNetworkDeviceUpdation = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_NETWORK_DEVICE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await NetworkDeviceApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_NETWORK_DEVICE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_NETWORK_DEVICE_KEY,
                    value: error || "Failed to complete updation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_NETWORK_DEVICE_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_NETWORK_DEVICE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        networkDeviceUpdation: {
            execute: executeNetworkDeviceUpdation,
            isLoading: isLoading(UPDATE_NETWORK_DEVICE_KEY) || false,
            successMessages: successMessages?.[UPDATE_NETWORK_DEVICE_KEY],
            errorMessages: errorMessages?.[UPDATE_NETWORK_DEVICE_KEY],
        },
    };
};
