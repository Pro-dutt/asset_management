import OperatingSystemApiService from "@/services/api/operatingSystem";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useOperatingSystemCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_OPERATING_SYSTEM_KEY = apiConstants.loadingStateKeys.CREATE_OPERATING_SYSTEM;

    const executeOperatingSystemCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_OPERATING_SYSTEM_KEY, true);
            const controller = new AbortController();

            try {
                const data = await OperatingSystemApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_OPERATING_SYSTEM_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_OPERATING_SYSTEM_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_OPERATING_SYSTEM_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_OPERATING_SYSTEM_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        operatingSystemCreation: {
            execute: executeOperatingSystemCreation,
            isLoading: isLoading(CREATE_OPERATING_SYSTEM_KEY) || false,
            successMessages: successMessages?.[CREATE_OPERATING_SYSTEM_KEY],
            errorMessages: errorMessages?.[CREATE_OPERATING_SYSTEM_KEY],
        },
    };
};

export const useOperatingSystemGetDropDownList = () => {
    const [dropdownList, setDropDownList] = useState([]);
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const GET_DROPDOWN_LIST_OPERATING_SYSTEM_KEY = apiConstants.loadingStateKeys.GET_DROPDOWN_LIST_OPERATING_SYSTEM;

    const fetchDropdownList = useCallback(
        async ({ onSuccess, onError, options }) => {
            setLoading(GET_DROPDOWN_LIST_OPERATING_SYSTEM_KEY, true);
            const controller = new AbortController();

            try {
                const data = await OperatingSystemApiService.getDropDownList(controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_DROPDOWN_LIST_OPERATING_SYSTEM_KEY,
                        value: data,
                    });
                }
                setDropDownList(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_DROPDOWN_LIST_OPERATING_SYSTEM_KEY,
                    value: error || "Failed to complete fetch list",
                });
                setDropDownList([]);
                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_DROPDOWN_LIST_OPERATING_SYSTEM_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_DROPDOWN_LIST_OPERATING_SYSTEM_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        operatingSystemDropdownList: {
            fetch: fetchDropdownList,
            data: dropdownList,
            isLoading: isLoading(GET_DROPDOWN_LIST_OPERATING_SYSTEM_KEY) || false,
            successMessages: successMessages?.[GET_DROPDOWN_LIST_OPERATING_SYSTEM_KEY],
            errorMessages: errorMessages?.[GET_DROPDOWN_LIST_OPERATING_SYSTEM_KEY],
        },
    };
};

export const useOperatingSystemDetails = () => {
    const [operatingSystemDetails, setOperatingSystemDetails] = useState({});
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DETAILS_OPERATING_SYSTEM_KEY = apiConstants.loadingStateKeys.DETAILS_OPERATING_SYSTEM;

    const fetchOperatingSystemDetails = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DETAILS_OPERATING_SYSTEM_KEY, true);
            const controller = new AbortController();

            try {
                const data = await OperatingSystemApiService.details(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DETAILS_OPERATING_SYSTEM_KEY,
                        value: data,
                    });
                }
                setOperatingSystemDetails(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DETAILS_OPERATING_SYSTEM_KEY,
                    value: error || "Failed to complete details request",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(DETAILS_OPERATING_SYSTEM_KEY, false);
                return () => controller.abort();
            }
        },
        [DETAILS_OPERATING_SYSTEM_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        operatingSystemDetails: {
            fetch: fetchOperatingSystemDetails,
            data: operatingSystemDetails,
            isLoading: isLoading(DETAILS_OPERATING_SYSTEM_KEY) || false,
            successMessages: successMessages?.[DETAILS_OPERATING_SYSTEM_KEY],
            errorMessages: errorMessages?.[DETAILS_OPERATING_SYSTEM_KEY],
        },
    };
};

export const useOperatingSystemUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_OPERATING_SYSTEM_KEY = apiConstants.loadingStateKeys.UPDATE_OPERATING_SYSTEM;

    const executeOperatingSystemUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_OPERATING_SYSTEM_KEY, true);
            const controller = new AbortController();

            try {
                const data = await OperatingSystemApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_OPERATING_SYSTEM_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_OPERATING_SYSTEM_KEY,
                    value: error || "Failed to complete updating",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_OPERATING_SYSTEM_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_OPERATING_SYSTEM_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        operatingSystemUpdating: {
            execute: executeOperatingSystemUpdate,
            isLoading: isLoading(UPDATE_OPERATING_SYSTEM_KEY) || false,
            successMessages: successMessages?.[UPDATE_OPERATING_SYSTEM_KEY],
            errorMessages: errorMessages?.[UPDATE_OPERATING_SYSTEM_KEY],
        },
    };
};

export const useOperatingSystemDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_OPERATING_SYSTEM_KEY = apiConstants.loadingStateKeys.DELETE_OPERATING_SYSTEM;

    const executeOperatingSystemDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_OPERATING_SYSTEM_KEY, true);
            const controller = new AbortController();

            try {
                const data = await OperatingSystemApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_OPERATING_SYSTEM_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_OPERATING_SYSTEM_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_OPERATING_SYSTEM_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_OPERATING_SYSTEM_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        operatingSystemDeletion: {
            execute: executeOperatingSystemDelete,
            isLoading: isLoading(DELETE_OPERATING_SYSTEM_KEY) || false,
            successMessages: successMessages?.[DELETE_OPERATING_SYSTEM_KEY],
            errorMessages: errorMessages?.[DELETE_OPERATING_SYSTEM_KEY],
        },
    };
};
