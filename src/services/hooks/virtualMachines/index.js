import VirtualMachinesApiService from "@/services/api/virtualMachines";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback } from "react";

export const useVirtutalMachinesCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_VIRTUAL_MACHINE_KEY = apiConstants.loadingStateKeys.CREATE_VIRTUAL_MACHINE;

    /**
     * Handles the virtual machines creation process with loading states and error handling
     * @param {Object} payload - The machine data
     * @param {Object} params - Additional parameters for the vm request
     * @param {function} onSuccess - Callback to execute on successful creation
     * @param {function} onError - Callback to execute on creation failure
     */

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
