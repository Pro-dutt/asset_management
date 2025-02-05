import VirtualMachinesApiService from "@/services/api/virtualMachines";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback } from "react";

export const useVirtutalMachinesCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_VIRTUAL_MACHINE_KEY = apiConstants.loadingStateKeys.CREATE_VIRTUAL_MACHINE;

    const executeVirtualMahinesCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_VIRTUAL_MACHINE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await VirtualMachinesApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_VIRTUAL_MACHINE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_VIRTUAL_MACHINE_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_VIRTUAL_MACHINE_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_VIRTUAL_MACHINE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        virtualMachineCreation: {
            execute: executeVirtualMahinesCreation,
            isLoading: isLoading(CREATE_VIRTUAL_MACHINE_KEY) || false,
            successMessages: successMessages?.[CREATE_VIRTUAL_MACHINE_KEY],
            errorMessages: errorMessages?.[CREATE_VIRTUAL_MACHINE_KEY],
        },
    };
};

export const useVirtutalMachinesUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_VIRTUAL_MACHINE_KEY = apiConstants.loadingStateKeys.UPDATE_VIRTUAL_MACHINE;

    const executeVirtualMahinesUpdation = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_VIRTUAL_MACHINE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await VirtualMachinesApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_VIRTUAL_MACHINE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_VIRTUAL_MACHINE_KEY,
                    value: error || "Failed to complete updation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_VIRTUAL_MACHINE_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_VIRTUAL_MACHINE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        virtualMachineUpdation: {
            execute: executeVirtualMahinesUpdation,
            isLoading: isLoading(UPDATE_VIRTUAL_MACHINE_KEY) || false,
            successMessages: successMessages?.[UPDATE_VIRTUAL_MACHINE_KEY],
            errorMessages: errorMessages?.[UPDATE_VIRTUAL_MACHINE_KEY],
        },
    };
};
