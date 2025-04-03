import UsersApiService from "@/services/api/users";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useUsersCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_USERS_KEY = apiConstants.loadingStateKeys.CREATE_USERS;

    const executeUsersCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_USERS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await UsersApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_USERS_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_USERS_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_USERS_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_USERS_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        userCreation: {
            execute: executeUsersCreation,
            isLoading: isLoading(CREATE_USERS_KEY) || false,
            successMessages: successMessages?.[CREATE_USERS_KEY],
            errorMessages: errorMessages?.[CREATE_USERS_KEY],
        },
    };
};

export const useUsersGetDropDownList = () => {
    const [dropdownList, setDropDownList] = useState([]);
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const GET_DROPDOWN_LIST_USERS_KEY = apiConstants.loadingStateKeys.GET_DROPDOWN_LIST_USERS;

    const fetchDropdownList = useCallback(
        async ({ onSuccess, onError, options }) => {
            setLoading(GET_DROPDOWN_LIST_USERS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await UsersApiService.getDropDownList(controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_DROPDOWN_LIST_USERS_KEY,
                        value: data,
                    });
                }
                setDropDownList(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_DROPDOWN_LIST_USERS_KEY,
                    value: error || "Failed to complete fetch list",
                });
                setDropDownList([]);
                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_DROPDOWN_LIST_USERS_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_DROPDOWN_LIST_USERS_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        usersDropdownList: {
            fetch: fetchDropdownList,
            data: dropdownList,
            isLoading: isLoading(GET_DROPDOWN_LIST_USERS_KEY) || false,
            successMessages: successMessages?.[GET_DROPDOWN_LIST_USERS_KEY],
            errorMessages: errorMessages?.[GET_DROPDOWN_LIST_USERS_KEY],
        },
    };
};

export const useUsersDetails = () => {
    const [userDetails, setUsersDetails] = useState({});
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DETAILS_USERS_KEY = apiConstants.loadingStateKeys.DETAILS_USERS;

    const fetchUsersDetails = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DETAILS_USERS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await UsersApiService.details(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DETAILS_USERS_KEY,
                        value: data,
                    });
                }
                setUsersDetails(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DETAILS_USERS_KEY,
                    value: error || "Failed to complete details request",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(DETAILS_USERS_KEY, false);
                return () => controller.abort();
            }
        },
        [DETAILS_USERS_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        userDetails: {
            fetch: fetchUsersDetails,
            data: userDetails,
            isLoading: isLoading(DETAILS_USERS_KEY) || false,
            successMessages: successMessages?.[DETAILS_USERS_KEY],
            errorMessages: errorMessages?.[DETAILS_USERS_KEY],
        },
    };
};

export const useUsersUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_USERS_KEY = apiConstants.loadingStateKeys.UPDATE_USERS;

    const executeUsersUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_USERS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await UsersApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_USERS_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_USERS_KEY,
                    value: error || "Failed to complete updating",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_USERS_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_USERS_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        userUpdating: {
            execute: executeUsersUpdate,
            isLoading: isLoading(UPDATE_USERS_KEY) || false,
            successMessages: successMessages?.[UPDATE_USERS_KEY],
            errorMessages: errorMessages?.[UPDATE_USERS_KEY],
        },
    };
};

export const useUsersDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_USERS_KEY = apiConstants.loadingStateKeys.DELETE_USERS;

    const executeUsersDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_USERS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await UsersApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_USERS_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_USERS_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_USERS_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_USERS_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        userDeletion: {
            execute: executeUsersDelete,
            isLoading: isLoading(DELETE_USERS_KEY) || false,
            successMessages: successMessages?.[DELETE_USERS_KEY],
            errorMessages: errorMessages?.[DELETE_USERS_KEY],
        },
    };
};
