import TenantApiService from "@/services/api/tenant";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useTenantCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_TENANT_KEY = apiConstants.loadingStateKeys.CREATE_TENANT;

    const executeTenantCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_TENANT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await TenantApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_TENANT_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_TENANT_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_TENANT_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_TENANT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        tenantCreation: {
            execute: executeTenantCreation,
            isLoading: isLoading(CREATE_TENANT_KEY) || false,
            successMessages: successMessages?.[CREATE_TENANT_KEY],
            errorMessages: errorMessages?.[CREATE_TENANT_KEY],
        },
    };
};

export const useTenantGetDropDownList = () => {
    const [dropdownList, setDropDownList] = useState([]);
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const GET_DROPDOWN_LIST_TENANT_KEY = apiConstants.loadingStateKeys.GET_DROPDOWN_LIST_TENANT;

    const fetchDropdownList = useCallback(
        async ({ onSuccess, onError, options }) => {
            setLoading(GET_DROPDOWN_LIST_TENANT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await TenantApiService.getDropDownList(controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_DROPDOWN_LIST_TENANT_KEY,
                        value: data,
                    });
                }
                setDropDownList(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_DROPDOWN_LIST_TENANT_KEY,
                    value: error || "Failed to complete fetch list",
                });
                setDropDownList([]);
                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_DROPDOWN_LIST_TENANT_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_DROPDOWN_LIST_TENANT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        tenantDropdownList: {
            fetch: fetchDropdownList,
            data: dropdownList,
            isLoading: isLoading(GET_DROPDOWN_LIST_TENANT_KEY) || false,
            successMessages: successMessages?.[GET_DROPDOWN_LIST_TENANT_KEY],
            errorMessages: errorMessages?.[GET_DROPDOWN_LIST_TENANT_KEY],
        },
    };
};

export const useTenantDetails = () => {
    const [tenantDetails, setTenantDetails] = useState({});
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DETAILS_TENANT_KEY = apiConstants.loadingStateKeys.DETAILS_TENANT;

    const fetchTenantDetails = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DETAILS_TENANT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await TenantApiService.details(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DETAILS_TENANT_KEY,
                        value: data,
                    });
                }
                setTenantDetails(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DETAILS_TENANT_KEY,
                    value: error || "Failed to complete details request",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(DETAILS_TENANT_KEY, false);
                return () => controller.abort();
            }
        },
        [DETAILS_TENANT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        tenantDetails: {
            fetch: fetchTenantDetails,
            data: tenantDetails,
            isLoading: isLoading(DETAILS_TENANT_KEY) || false,
            successMessages: successMessages?.[DETAILS_TENANT_KEY],
            errorMessages: errorMessages?.[DETAILS_TENANT_KEY],
        },
    };
};

export const useTenantUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_TENANT_KEY = apiConstants.loadingStateKeys.UPDATE_TENANT;

    const executeTenantUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_TENANT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await TenantApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_TENANT_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_TENANT_KEY,
                    value: error || "Failed to complete updating",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_TENANT_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_TENANT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        tenantUpdation: {
            execute: executeTenantUpdate,
            isLoading: isLoading(UPDATE_TENANT_KEY) || false,
            successMessages: successMessages?.[UPDATE_TENANT_KEY],
            errorMessages: errorMessages?.[UPDATE_TENANT_KEY],
        },
    };
};

export const useTenantDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_TENANT_KEY = apiConstants.loadingStateKeys.DELETE_TENANT;

    const executeTenantDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_TENANT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await TenantApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_TENANT_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_TENANT_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_TENANT_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_TENANT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        tenantDeletion: {
            execute: executeTenantDelete,
            isLoading: isLoading(DELETE_TENANT_KEY) || false,
            successMessages: successMessages?.[DELETE_TENANT_KEY],
            errorMessages: errorMessages?.[DELETE_TENANT_KEY],
        },
    };
};
