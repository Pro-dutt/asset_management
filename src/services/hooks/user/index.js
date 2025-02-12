import UserApiService from "@/services/api/user";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useGetCurrentUser = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const [currentUserData, setCurrentUser] = useState({});
    const { isLoading, setLoading } = useLoading();

    const GET_CURRENT_USER_KEY = apiConstants.loadingStateKeys.GET_CURRENT_USER;

    const fetchGetCurrentUser = useCallback(
        async ({ params, onSuccess, onError, options }) => {
            setLoading(GET_CURRENT_USER_KEY, true);
            const controller = new AbortController();

            try {
                const data = await UserApiService.getCurrentUser(params, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_CURRENT_USER_KEY,
                        value: data,
                    });
                }
                setCurrentUser(data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_CURRENT_USER_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(GET_CURRENT_USER_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_CURRENT_USER_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        getCurrentUser: {
            fetch: fetchGetCurrentUser,
            data: currentUserData,
            isLoading: isLoading(GET_CURRENT_USER_KEY) || false,
            successMessages: successMessages?.[GET_CURRENT_USER_KEY],
            errorMessages: errorMessages?.[GET_CURRENT_USER_KEY],
        },
    };
};

export const useUpdateUserPicture = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_USER_PICTURE_KEY = apiConstants.loadingStateKeys.UPDATE_USER_PICTURE;

    const executeUpdateUserPicture = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_USER_PICTURE_KEY, true);
            const controller = new AbortController();

            try {
                const data = await UserApiService.updateUserPicture(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_USER_PICTURE_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_USER_PICTURE_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_USER_PICTURE_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_USER_PICTURE_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        updateUserProfilePicture: {
            execute: executeUpdateUserPicture,
            isLoading: isLoading(UPDATE_USER_PICTURE_KEY) || false,
            successMessages: successMessages?.[UPDATE_USER_PICTURE_KEY],
            errorMessages: errorMessages?.[UPDATE_USER_PICTURE_KEY],
        },
    };
};

export const useUpdateUserDetails = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_USER_DETAILS_KEY = apiConstants.loadingStateKeys.UPDATE_USER_DETAILS;

    const executeUpdateUserDetails = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_USER_DETAILS_KEY, true);
            const controller = new AbortController();

            try {
                const data = await UserApiService.updateUserDetails(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_USER_DETAILS_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_USER_DETAILS_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_USER_DETAILS_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_USER_DETAILS_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        updateUserDetails: {
            execute: executeUpdateUserDetails,
            isLoading: isLoading(UPDATE_USER_DETAILS_KEY) || false,
            successMessages: successMessages?.[UPDATE_USER_DETAILS_KEY],
            errorMessages: errorMessages?.[UPDATE_USER_DETAILS_KEY],
        },
    };
};

export const useUpdateUserPassword = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_USER_PASSWORD_KEY = apiConstants.loadingStateKeys.UPDATE_USER_PASSWORD;

    const executeUpdateUserPassword = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_USER_PASSWORD_KEY, true);
            const controller = new AbortController();

            try {
                const data = await UserApiService.updateUserPassword(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_USER_PASSWORD_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_USER_PASSWORD_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_USER_PASSWORD_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_USER_PASSWORD_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        updateUserPassword: {
            execute: executeUpdateUserPassword,
            isLoading: isLoading(UPDATE_USER_PASSWORD_KEY) || false,
            successMessages: successMessages?.[UPDATE_USER_PASSWORD_KEY],
            errorMessages: errorMessages?.[UPDATE_USER_PASSWORD_KEY],
        },
    };
};
