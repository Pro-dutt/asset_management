import AuthApiService from "@/services/api/auth";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import ApiUtils from "@/services/utils";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useLoginAuth = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const LOGIN_AUTH_KEY = apiConstants.loadingStateKeys.LOGIN_AUTH;

    const executeLogin = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(LOGIN_AUTH_KEY, true);
            const controller = new AbortController();

            try {
                const data = await AuthApiService.login(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: LOGIN_AUTH_KEY,
                        value: data,
                    });
                }
                if (data.access_token) {
                    await ApiUtils.storeAuthToken(data.access_token);
                }
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: LOGIN_AUTH_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(LOGIN_AUTH_KEY, false);
                return () => controller.abort();
            }
        },
        [LOGIN_AUTH_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        login: {
            execute: executeLogin,
            isLoading: isLoading(LOGIN_AUTH_KEY) || false,
            successMessages: successMessages?.[LOGIN_AUTH_KEY],
            errorMessages: errorMessages?.[LOGIN_AUTH_KEY],
        },
    };
};

export const useForgotPassword = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const FORGOT_PASSWORD_KEY = apiConstants.loadingStateKeys.FORGOT_PASSWORD;

    const executeForgotPassword = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(FORGOT_PASSWORD_KEY, true);
            const controller = new AbortController();

            try {
                const data = await AuthApiService.forgotPassword(payload, controller.signal);

                showSuccessNotification({
                    key: FORGOT_PASSWORD_KEY,
                    value: data,
                });

                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: FORGOT_PASSWORD_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(FORGOT_PASSWORD_KEY, false);
                return () => controller.abort();
            }
        },
        [FORGOT_PASSWORD_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        forgotPassword: {
            execute: executeForgotPassword,
            isLoading: isLoading(FORGOT_PASSWORD_KEY) || false,
            successMessages: successMessages?.[FORGOT_PASSWORD_KEY],
            errorMessages: errorMessages?.[FORGOT_PASSWORD_KEY],
        },
    };
};

export const useChangePassword = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const CHANGE_PASSWORD_KEY = apiConstants.loadingStateKeys.CHANGE_PASSWORD;

    const executeChangePassword = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CHANGE_PASSWORD_KEY, true);
            const controller = new AbortController();

            try {
                const data = await AuthApiService.changePassword(payload, controller.signal);

                showSuccessNotification({
                    key: CHANGE_PASSWORD_KEY,
                    value: data,
                });

                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CHANGE_PASSWORD_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(CHANGE_PASSWORD_KEY, false);
                return () => controller.abort();
            }
        },
        [CHANGE_PASSWORD_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        changePassword: {
            execute: executeChangePassword,
            isLoading: isLoading(CHANGE_PASSWORD_KEY) || false,
            successMessages: successMessages?.[CHANGE_PASSWORD_KEY],
            errorMessages: errorMessages?.[CHANGE_PASSWORD_KEY],
        },
    };
};

export const useGetCurrentUser = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const [currentUserData, setCurrentUser] = useState({ routes: [], extraPermissionsRoutes: [] });
    const { isLoading, setLoading } = useLoading();

    const GET_CURRENT_USER_KEY = apiConstants.loadingStateKeys.GET_CURRENT_USER;

    const fetchGetCurrentUser = useCallback(
        async ({ params, onSuccess, onError, options }) => {
            setLoading(GET_CURRENT_USER_KEY, true);
            const controller = new AbortController();

            try {
                const data = await AuthApiService.getCurrentUser(params, controller.signal);

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
                // showErrorNotification({
                //     key: GET_CURRENT_USER_KEY,
                //     value: error || "Failed to complete creation",
                // });

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
                const data = await AuthApiService.updateUserPicture(payload, controller.signal);

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
                const data = await AuthApiService.updateUserDetails(payload, controller.signal);

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
                const data = await AuthApiService.updateAuthPassword(payload, controller.signal);

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
