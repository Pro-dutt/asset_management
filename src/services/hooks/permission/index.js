import PermissionApiService from "@/services/api/permission";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const usePermissionCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_PERMISSION_KEY = apiConstants.loadingStateKeys.CREATE_PERMISSION;

    const executePermissionCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_PERMISSION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await PermissionApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_PERMISSION_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_PERMISSION_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_PERMISSION_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_PERMISSION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        permissionCreation: {
            execute: executePermissionCreation,
            isLoading: isLoading(CREATE_PERMISSION_KEY) || false,
            successMessages: successMessages?.[CREATE_PERMISSION_KEY],
            errorMessages: errorMessages?.[CREATE_PERMISSION_KEY],
        },
    };
};

export const usePermissionGetDropDownList = () => {
    const [dropdownList, setDropDownList] = useState([]);
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const GET_DROPDOWN_LIST_PERMISSION_KEY = apiConstants.loadingStateKeys.GET_DROPDOWN_LIST_PERMISSION;

    const fetchDropdownList = useCallback(
        async ({ onSuccess, onError, options }) => {
            setLoading(GET_DROPDOWN_LIST_PERMISSION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await PermissionApiService.getDropDownList(controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_DROPDOWN_LIST_PERMISSION_KEY,
                        value: data,
                    });
                }
                setDropDownList(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_DROPDOWN_LIST_PERMISSION_KEY,
                    value: error || "Failed to complete fetch list",
                });
                setDropDownList([]);
                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_DROPDOWN_LIST_PERMISSION_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_DROPDOWN_LIST_PERMISSION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        permissionDropdownList: {
            fetch: fetchDropdownList,
            data: dropdownList,
            isLoading: isLoading(GET_DROPDOWN_LIST_PERMISSION_KEY) || false,
            successMessages: successMessages?.[GET_DROPDOWN_LIST_PERMISSION_KEY],
            errorMessages: errorMessages?.[GET_DROPDOWN_LIST_PERMISSION_KEY],
        },
    };
};

export const usePermissionUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_PERMISSION_KEY = apiConstants.loadingStateKeys.UPDATE_PERMISSION;

    const executePermissionUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_PERMISSION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await PermissionApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_PERMISSION_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_PERMISSION_KEY,
                    value: error || "Failed to complete updating",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_PERMISSION_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_PERMISSION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        permissionUpdating: {
            execute: executePermissionUpdate,
            isLoading: isLoading(UPDATE_PERMISSION_KEY) || false,
            successMessages: successMessages?.[UPDATE_PERMISSION_KEY],
            errorMessages: errorMessages?.[UPDATE_PERMISSION_KEY],
        },
    };
};

export const usePermissionDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_PERMISSION_KEY = apiConstants.loadingStateKeys.DELETE_PERMISSION;

    const executePermissionDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_PERMISSION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await PermissionApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_PERMISSION_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_PERMISSION_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_PERMISSION_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_PERMISSION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        permissionDeletion: {
            execute: executePermissionDelete,
            isLoading: isLoading(DELETE_PERMISSION_KEY) || false,
            successMessages: successMessages?.[DELETE_PERMISSION_KEY],
            errorMessages: errorMessages?.[DELETE_PERMISSION_KEY],
        },
    };
};
