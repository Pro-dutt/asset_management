import DeviceCategoryApiService from "@/services/api/deviceCategory";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useDeviceCategoryCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_DEVICE_CATEGORY_KEY = apiConstants.loadingStateKeys.CREATE_DEVICE_CATEGORY;

    const executeDeviceCategoryCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_DEVICE_CATEGORY_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DeviceCategoryApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_DEVICE_CATEGORY_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_DEVICE_CATEGORY_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_DEVICE_CATEGORY_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_DEVICE_CATEGORY_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        deviceCategoryCreation: {
            execute: executeDeviceCategoryCreation,
            isLoading: isLoading(CREATE_DEVICE_CATEGORY_KEY) || false,
            successMessages: successMessages?.[CREATE_DEVICE_CATEGORY_KEY],
            errorMessages: errorMessages?.[CREATE_DEVICE_CATEGORY_KEY],
        },
    };
};

export const useDeviceCategoryGetDropDownList = () => {
    const [dropdownList, setDropDownList] = useState([]);
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const GET_DROPDOWN_LIST_DEVICE_CATEGORY_KEY = apiConstants.loadingStateKeys.GET_DROPDOWN_LIST_DEVICE_CATEGORY;

    const fetchDropdownList = useCallback(
        async ({ onSuccess, onError, options }) => {
            setLoading(GET_DROPDOWN_LIST_DEVICE_CATEGORY_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DeviceCategoryApiService.getDropDownList(controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_DROPDOWN_LIST_DEVICE_CATEGORY_KEY,
                        value: data,
                    });
                }
                setDropDownList(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_DROPDOWN_LIST_DEVICE_CATEGORY_KEY,
                    value: error || "Failed to complete fetch list",
                });
                setDropDownList([]);
                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_DROPDOWN_LIST_DEVICE_CATEGORY_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_DROPDOWN_LIST_DEVICE_CATEGORY_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        deviceCategoryDropdownList: {
            fetch: fetchDropdownList,
            data: dropdownList,
            isLoading: isLoading(GET_DROPDOWN_LIST_DEVICE_CATEGORY_KEY) || false,
            successMessages: successMessages?.[GET_DROPDOWN_LIST_DEVICE_CATEGORY_KEY],
            errorMessages: errorMessages?.[GET_DROPDOWN_LIST_DEVICE_CATEGORY_KEY],
        },
    };
};

export const useDeviceCategoryDetails = () => {
    const [deviceCategoryDetails, setDeviceCategoryDetails] = useState({});
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DETAILS_DEVICE_CATEGORY_KEY = apiConstants.loadingStateKeys.DETAILS_DEVICE_CATEGORY;

    const fetchDeviceCategoryDetails = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DETAILS_DEVICE_CATEGORY_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DeviceCategoryApiService.details(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DETAILS_DEVICE_CATEGORY_KEY,
                        value: data,
                    });
                }
                setDeviceCategoryDetails(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DETAILS_DEVICE_CATEGORY_KEY,
                    value: error || "Failed to complete details request",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(DETAILS_DEVICE_CATEGORY_KEY, false);
                return () => controller.abort();
            }
        },
        [DETAILS_DEVICE_CATEGORY_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        deviceCategoryDetails: {
            fetch: fetchDeviceCategoryDetails,
            data: deviceCategoryDetails,
            isLoading: isLoading(DETAILS_DEVICE_CATEGORY_KEY) || false,
            successMessages: successMessages?.[DETAILS_DEVICE_CATEGORY_KEY],
            errorMessages: errorMessages?.[DETAILS_DEVICE_CATEGORY_KEY],
        },
    };
};

export const useDeviceCategoryUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_DEVICE_CATEGORY_KEY = apiConstants.loadingStateKeys.UPDATE_DEVICE_CATEGORY;

    const executeDeviceCategoryUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_DEVICE_CATEGORY_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DeviceCategoryApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_DEVICE_CATEGORY_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_DEVICE_CATEGORY_KEY,
                    value: error || "Failed to complete updating",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_DEVICE_CATEGORY_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_DEVICE_CATEGORY_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        deviceCategoryUpdating: {
            execute: executeDeviceCategoryUpdate,
            isLoading: isLoading(UPDATE_DEVICE_CATEGORY_KEY) || false,
            successMessages: successMessages?.[UPDATE_DEVICE_CATEGORY_KEY],
            errorMessages: errorMessages?.[UPDATE_DEVICE_CATEGORY_KEY],
        },
    };
};

export const useDeviceCategoryDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_DEVICE_CATEGORY_KEY = apiConstants.loadingStateKeys.DELETE_DEVICE_CATEGORY;

    const executeDeviceCategoryDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_DEVICE_CATEGORY_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DeviceCategoryApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_DEVICE_CATEGORY_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_DEVICE_CATEGORY_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_DEVICE_CATEGORY_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_DEVICE_CATEGORY_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        deviceCategoryDeletion: {
            execute: executeDeviceCategoryDelete,
            isLoading: isLoading(DELETE_DEVICE_CATEGORY_KEY) || false,
            successMessages: successMessages?.[DELETE_DEVICE_CATEGORY_KEY],
            errorMessages: errorMessages?.[DELETE_DEVICE_CATEGORY_KEY],
        },
    };
};
