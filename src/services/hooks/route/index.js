import RouteApiService from "@/services/api/route";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useRouteGetDropDownList = () => {
    const [dropdownList, setDropDownList] = useState([]);
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const GET_DROPDOWN_LIST_ROUTE_KEY = apiConstants.loadingStateKeys.GET_DROPDOWN_LIST_ROUTE;

    const fetchDropdownList = useCallback(
        async ({ onSuccess, onError, options }) => {
            setLoading(GET_DROPDOWN_LIST_ROUTE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await RouteApiService.getDropDownList(controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_DROPDOWN_LIST_ROUTE_KEY,
                        value: data,
                    });
                }
                setDropDownList(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_DROPDOWN_LIST_ROUTE_KEY,
                    value: error || "Failed to complete creation",
                });
                setDropDownList([]);
                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_DROPDOWN_LIST_ROUTE_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_DROPDOWN_LIST_ROUTE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        routeDropdownList: {
            fetch: fetchDropdownList,
            data: dropdownList,
            isLoading: isLoading(GET_DROPDOWN_LIST_ROUTE_KEY) || false,
            successMessages: successMessages?.[GET_DROPDOWN_LIST_ROUTE_KEY],
            errorMessages: errorMessages?.[GET_DROPDOWN_LIST_ROUTE_KEY],
        },
    };
};
export const useRouteCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_ROUTE_KEY = apiConstants.loadingStateKeys.CREATE_ROUTE;

    const executeRouteCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_ROUTE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await RouteApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_ROUTE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_ROUTE_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_ROUTE_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_ROUTE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        routeCreation: {
            execute: executeRouteCreation,
            isLoading: isLoading(CREATE_ROUTE_KEY) || false,
            successMessages: successMessages?.[CREATE_ROUTE_KEY],
            errorMessages: errorMessages?.[CREATE_ROUTE_KEY],
        },
    };
};

export const useRouteUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_ROUTE_KEY = apiConstants.loadingStateKeys.UPDATE_ROUTE;

    const executeRouteUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_ROUTE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await RouteApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_ROUTE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_ROUTE_KEY,
                    value: error || "Failed to complete updating",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_ROUTE_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_ROUTE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        routeUpdating: {
            execute: executeRouteUpdate,
            isLoading: isLoading(UPDATE_ROUTE_KEY) || false,
            successMessages: successMessages?.[UPDATE_ROUTE_KEY],
            errorMessages: errorMessages?.[UPDATE_ROUTE_KEY],
        },
    };
};

export const useRouteDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_ROUTE_KEY = apiConstants.loadingStateKeys.DELETE_ROUTE;

    const executeRouteDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_ROUTE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await RouteApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_ROUTE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_ROUTE_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_ROUTE_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_ROUTE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        routeDeletion: {
            execute: executeRouteDelete,
            isLoading: isLoading(DELETE_ROUTE_KEY) || false,
            successMessages: successMessages?.[DELETE_ROUTE_KEY],
            errorMessages: errorMessages?.[DELETE_ROUTE_KEY],
        },
    };
};
