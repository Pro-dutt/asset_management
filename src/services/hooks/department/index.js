import DepartmentApiService from "@/services/api/department";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useDepartmentCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_DEPARTMENT_KEY = apiConstants.loadingStateKeys.CREATE_DEPARTMENT;

    const executeDepartmentCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_DEPARTMENT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DepartmentApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_DEPARTMENT_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_DEPARTMENT_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_DEPARTMENT_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_DEPARTMENT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        departmentCreation: {
            execute: executeDepartmentCreation,
            isLoading: isLoading(CREATE_DEPARTMENT_KEY) || false,
            successMessages: successMessages?.[CREATE_DEPARTMENT_KEY],
            errorMessages: errorMessages?.[CREATE_DEPARTMENT_KEY],
        },
    };
};

export const useDepartmentGetDropDownList = () => {
    const [dropdownList, setDropDownList] = useState([]);
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const GET_DROPDOWN_LIST_DEPARTMENT_KEY = apiConstants.loadingStateKeys.GET_DROPDOWN_LIST_DEPARTMENT;

    const fetchDropdownList = useCallback(
        async ({ onSuccess, onError, options }) => {
            setLoading(GET_DROPDOWN_LIST_DEPARTMENT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DepartmentApiService.getDropDownList(controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_DROPDOWN_LIST_DEPARTMENT_KEY,
                        value: data,
                    });
                }
                setDropDownList(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_DROPDOWN_LIST_DEPARTMENT_KEY,
                    value: error || "Failed to complete fetch list",
                });
                setDropDownList([]);
                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_DROPDOWN_LIST_DEPARTMENT_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_DROPDOWN_LIST_DEPARTMENT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        departmentDropdownList: {
            fetch: fetchDropdownList,
            data: dropdownList,
            isLoading: isLoading(GET_DROPDOWN_LIST_DEPARTMENT_KEY) || false,
            successMessages: successMessages?.[GET_DROPDOWN_LIST_DEPARTMENT_KEY],
            errorMessages: errorMessages?.[GET_DROPDOWN_LIST_DEPARTMENT_KEY],
        },
    };
};

export const useDepartmentDetails = () => {
    const [departmentDetails, setDepartmentDetails] = useState({});
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DETAILS_DEPARTMENT_KEY = apiConstants.loadingStateKeys.DETAILS_DEPARTMENT;

    const fetchDepartmentDetails = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DETAILS_DEPARTMENT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DepartmentApiService.details(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DETAILS_DEPARTMENT_KEY,
                        value: data,
                    });
                }
                setDepartmentDetails(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DETAILS_DEPARTMENT_KEY,
                    value: error || "Failed to complete details request",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(DETAILS_DEPARTMENT_KEY, false);
                return () => controller.abort();
            }
        },
        [DETAILS_DEPARTMENT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        departmentDetails: {
            fetch: fetchDepartmentDetails,
            data: departmentDetails,
            isLoading: isLoading(DETAILS_DEPARTMENT_KEY) || false,
            successMessages: successMessages?.[DETAILS_DEPARTMENT_KEY],
            errorMessages: errorMessages?.[DETAILS_DEPARTMENT_KEY],
        },
    };
};

export const useDepartmentUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_DEPARTMENT_KEY = apiConstants.loadingStateKeys.UPDATE_DEPARTMENT;

    const executeDepartmentUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_DEPARTMENT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DepartmentApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_DEPARTMENT_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_DEPARTMENT_KEY,
                    value: error || "Failed to complete updating",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_DEPARTMENT_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_DEPARTMENT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        departmentUpdating: {
            execute: executeDepartmentUpdate,
            isLoading: isLoading(UPDATE_DEPARTMENT_KEY) || false,
            successMessages: successMessages?.[UPDATE_DEPARTMENT_KEY],
            errorMessages: errorMessages?.[UPDATE_DEPARTMENT_KEY],
        },
    };
};

export const useDepartmentDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_DEPARTMENT_KEY = apiConstants.loadingStateKeys.DELETE_DEPARTMENT;

    const executeDepartmentDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_DEPARTMENT_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DepartmentApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_DEPARTMENT_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_DEPARTMENT_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_DEPARTMENT_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_DEPARTMENT_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        departmentDeletion: {
            execute: executeDepartmentDelete,
            isLoading: isLoading(DELETE_DEPARTMENT_KEY) || false,
            successMessages: successMessages?.[DELETE_DEPARTMENT_KEY],
            errorMessages: errorMessages?.[DELETE_DEPARTMENT_KEY],
        },
    };
};
