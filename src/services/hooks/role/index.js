import RoleApiService from "@/services/api/role";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useRoleCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_ROLE_KEY = apiConstants.loadingStateKeys.CREATE_ROLE;

    const executeRoleCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_ROLE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await RoleApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_ROLE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_ROLE_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_ROLE_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_ROLE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        roleCreation: {
            execute: executeRoleCreation,
            isLoading: isLoading(CREATE_ROLE_KEY) || false,
            successMessages: successMessages?.[CREATE_ROLE_KEY],
            errorMessages: errorMessages?.[CREATE_ROLE_KEY],
        },
    };
};

export const useRoleGetDropDownList = () => {
    const [dropdownList, setDropDownList] = useState([]);
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const GET_DROPDOWN_LIST_ROLE_KEY = apiConstants.loadingStateKeys.GET_DROPDOWN_LIST_ROLE;

    const fetchDropdownList = useCallback(
        async ({ onSuccess, onError, options }) => {
            setLoading(GET_DROPDOWN_LIST_ROLE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await RoleApiService.getDropDownList(controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_DROPDOWN_LIST_ROLE_KEY,
                        value: data,
                    });
                }
                setDropDownList(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_DROPDOWN_LIST_ROLE_KEY,
                    value: error || "Failed to complete fetch list",
                });
                setDropDownList([]);
                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_DROPDOWN_LIST_ROLE_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_DROPDOWN_LIST_ROLE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        roleDropdownList: {
            fetch: fetchDropdownList,
            data: dropdownList,
            isLoading: isLoading(GET_DROPDOWN_LIST_ROLE_KEY) || false,
            successMessages: successMessages?.[GET_DROPDOWN_LIST_ROLE_KEY],
            errorMessages: errorMessages?.[GET_DROPDOWN_LIST_ROLE_KEY],
        },
    };
};

export const useRoleDetails = () => {
    const [roleDetails, setRoleDetails] = useState({});
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DETAILS_ROLE_KEY = apiConstants.loadingStateKeys.DETAILS_ROLE;

    const fetchRoleDetails = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DETAILS_ROLE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await RoleApiService.details(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DETAILS_ROLE_KEY,
                        value: data,
                    });
                }
                setRoleDetails(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DETAILS_ROLE_KEY,
                    value: error || "Failed to complete details request",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(DETAILS_ROLE_KEY, false);
                return () => controller.abort();
            }
        },
        [DETAILS_ROLE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        roleDetails: {
            fetch: fetchRoleDetails,
            data: roleDetails,
            isLoading: isLoading(DETAILS_ROLE_KEY) || false,
            successMessages: successMessages?.[DETAILS_ROLE_KEY],
            errorMessages: errorMessages?.[DETAILS_ROLE_KEY],
        },
    };
};

export const useRoleUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_ROLE_KEY = apiConstants.loadingStateKeys.UPDATE_ROLE;

    const executeRoleUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_ROLE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await RoleApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_ROLE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_ROLE_KEY,
                    value: error || "Failed to complete updating",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_ROLE_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_ROLE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        roleUpdating: {
            execute: executeRoleUpdate,
            isLoading: isLoading(UPDATE_ROLE_KEY) || false,
            successMessages: successMessages?.[UPDATE_ROLE_KEY],
            errorMessages: errorMessages?.[UPDATE_ROLE_KEY],
        },
    };
};

export const useRoleDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_ROLE_KEY = apiConstants.loadingStateKeys.DELETE_ROLE;

    const executeRoleDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_ROLE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await RoleApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_ROLE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_ROLE_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_ROLE_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_ROLE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        roleDeletion: {
            execute: executeRoleDelete,
            isLoading: isLoading(DELETE_ROLE_KEY) || false,
            successMessages: successMessages?.[DELETE_ROLE_KEY],
            errorMessages: errorMessages?.[DELETE_ROLE_KEY],
        },
    };
};
