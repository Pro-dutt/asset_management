import { endPointsApiService } from "@/services/api/sampleEndPoints";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

/**
 * Custom hook to handle EndPoints signup functionality with loading and notification states
 * @returns {Object} Object containing EndPoints signup execution function and related states
 */

export const useEndPointsSignup = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const SIGNUP_KEY = apiConstants.loadingStateKeys.SIGN_UP;

    /**
     * Handles the EndPoints signup process with loading states and error handling
     * @param {Object} payload - The signup data
     * @param {Object} params - Additional parameters for the signup request
     * @param {function} onSuccess - Callback to execute on successful signup
     * @param {function} onError - Callback to execute on signup failure
     */

    const executeEndPointsSignup = useCallback(
        async ({ payload, onSuccess, onError, options }, params) => {
            setLoading(SIGNUP_KEY, true);
            const controller = new AbortController();

            try {
                const data = await endPointsApiService.createSignup(payload, params, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: SIGNUP_KEY,
                        value: data,
                        hideNotification: true,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: SIGNUP_KEY,
                    value: error || "Failed to complete signup",
                });

                onError?.();
                console.error("Signup error:", error);
                throw error;
            } finally {
                setLoading(SIGNUP_KEY, false);
            }
        },
        [SIGNUP_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        endPointsSignup: {
            execute: executeEndPointsSignup,
            isLoading: isLoading(SIGNUP_KEY) || false,
            successMessages: successMessages?.[SIGNUP_KEY],
            errorMessages: errorMessages?.[SIGNUP_KEY],
        },
    };
};

export const useEndPointsVerifyEmail = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const Verify_Email_KEY = apiConstants.loadingStateKeys.VERIFY_EMAIL;

    /**
     * Handles the EndPoints verify email process with loading states and error handling
     * @param {Object} payload - The verify email data
     * @param {Object} params - Additional parameters for the verify email request
     * @param {function} onSuccess - Callback to execute on successful verify email
     * @param {function} onError - Callback to execute on verify email failure
     */

    const executeEndPointsVerifyEmail = useCallback(
        async ({ payload, onSuccess, onError, options }, params) => {
            setLoading(Verify_Email_KEY, true);
            const controller = new AbortController();

            try {
                const data = await endPointsApiService.verifyEmail(payload, params, controller.signal);
                if (data?.data?.token) {
                    localStorage.setItem("endPoints_token", data.data.token);
                }
                showSuccessNotification({
                    key: Verify_Email_KEY,
                    value: data,
                    hideNotification: true,
                });
                if (onSuccess) onSuccess();
            } catch (error) {
                showErrorNotification({
                    key: Verify_Email_KEY,
                    value: error || "Failed to complete verify email",
                });
                if (onError) onError();
                console.error("verify email error:", error);
            } finally {
                setLoading(Verify_Email_KEY, false);
            }
        },
        [Verify_Email_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        endPointsVerifyEmail: {
            execute: executeEndPointsVerifyEmail,
            isLoading: isLoading(Verify_Email_KEY) || false,
            successMessages: successMessages?.[Verify_Email_KEY],
            errorMessages: errorMessages?.[Verify_Email_KEY],
        },
    };
};

export const useEndPointsOnboardedUser = () => {
    const [user, setUser] = useState({});
    const { showErrorNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const LOADING_KEY = apiConstants.loadingStateKeys.CURRENT_ONBOARDED_USER;

    const fetchUser = useCallback(
        async ({ onSuccess, onError, options }, params) => {
            setLoading(LOADING_KEY, true);
            const controller = new AbortController();

            try {
                const { data } = await endPointsApiService.currentOnboardedUser(params, controller.signal);
                setUser(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: LOADING_KEY,
                    value: error || "Failed to fetch onboarded user",
                    hideNotification: true,
                });
                onError?.(error);
                console.error("Failed to fetch onboarded user:", error);
            } finally {
                setLoading(LOADING_KEY, false);
            }
        },
        [LOADING_KEY, showErrorNotification, setLoading]
    );

    return {
        onboardedUser: {
            data: user,
            fetch: fetchUser,
            isLoading: isLoading(LOADING_KEY) || false,
            successMessages: successMessages?.[LOADING_KEY],
            errorMessages: errorMessages?.[LOADING_KEY],
        },
    };
};

export const useEndPointsSetupBasicInfo = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_INSTITUTE_BASIC_INFO = apiConstants.loadingStateKeys.SETUP_BASE_INFO;

    /**
     * Handles the EndPoints basic details process with loading states and error handling
     * @param {Object} payload - The endPoints basic info data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupEndPointsBasicInfo = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_INSTITUTE_BASIC_INFO, true);
            const controller = new AbortController();

            try {
                const data = await endPointsApiService.setupEndPointsBasicInfo(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_INSTITUTE_BASIC_INFO,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.();
                return data;
            } catch (error) {
                console.log(error);

                const errors = {
                    success: false,
                    message: "An endPoints with the name 'kareem duke test.....' already exists. Please choose a different name.",
                    statusCode: 409,
                };

                const joiErrors = {
                    success: false,
                    message: "Validation Failed",
                    statusCode: 400,
                    errors: [
                        {
                            message: "Owner name must be at least 2 characters long.",
                            path: ["ownerName"],
                        },
                        {
                            message: "Owner phone number must be exactly 10 digits.",
                            path: ["ownerPhone"],
                        },
                    ],
                };

                showErrorNotification({
                    key: SETUP_INSTITUTE_BASIC_INFO,
                    value: error || "Failed to complete setup endPoints Basic Info ",
                });
                onError?.();
                console.error("Setup EndPoints Basic Info error:", error);
                throw error;
            } finally {
                setLoading(SETUP_INSTITUTE_BASIC_INFO, false);
            }
        },
        [SETUP_INSTITUTE_BASIC_INFO, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        endPointsSetupBasicInfo: {
            execute: setupEndPointsBasicInfo,
            isLoading: isLoading(SETUP_INSTITUTE_BASIC_INFO) || false,
            successMessages: successMessages?.[SETUP_INSTITUTE_BASIC_INFO],
            errorMessages: errorMessages?.[SETUP_INSTITUTE_BASIC_INFO],
        },
    };
};

export const useEndPointsSetupPayment = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_INSTITUTE_PAYMENT = apiConstants.loadingStateKeys.SETUP_PAYMENT;

    /**
     * Handles the EndPoints payment process with loading states and error handling
     * @param {Object} payload - The endPoints payment data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupEndPointsPayment = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_INSTITUTE_PAYMENT, true);
            const controller = new AbortController();

            try {
                const data = await endPointsApiService.setupEndPointsPayment(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_INSTITUTE_PAYMENT,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.();
                return data;
            } catch (error) {
                console.log(error);
                showErrorNotification({
                    key: SETUP_INSTITUTE_PAYMENT,
                    value: error || "Failed to complete setup endPoints payment ",
                });
                onError?.();
                console.error("Setup EndPoints payment error:", error);
                throw error;
            } finally {
                setLoading(SETUP_INSTITUTE_PAYMENT, false);
            }
        },
        [SETUP_INSTITUTE_PAYMENT, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        endPointsSetupPayment: {
            execute: setupEndPointsPayment,
            isLoading: isLoading(SETUP_INSTITUTE_PAYMENT) || false,
            successMessages: successMessages?.[SETUP_INSTITUTE_PAYMENT],
            errorMessages: errorMessages?.[SETUP_INSTITUTE_PAYMENT],
        },
    };
};

export const useEndPointsSetupDetails = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_INSTITUTE_DETAILS = apiConstants.loadingStateKeys.SETUP_DETAILS;

    /**
     * Handles the EndPoints Details process with loading states and error handling
     * @param {Object} payload - The endPoints Details data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupEndPointsDetails = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_INSTITUTE_DETAILS, true);
            const controller = new AbortController();

            try {
                const data = await endPointsApiService.setupEndPointsDetails(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_INSTITUTE_DETAILS,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.();
                return data;
            } catch (error) {
                console.log(error);
                showErrorNotification({
                    key: SETUP_INSTITUTE_DETAILS,
                    value: error || "Failed to complete setup endPoints Details ",
                });
                onError?.();
                console.error("Setup EndPoints Details error:", error);
                throw error;
            } finally {
                setLoading(SETUP_INSTITUTE_DETAILS, false);
            }
        },
        [SETUP_INSTITUTE_DETAILS, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        endPointsSetupDetails: {
            execute: setupEndPointsDetails,
            isLoading: isLoading(SETUP_INSTITUTE_DETAILS) || false,
            successMessages: successMessages?.[SETUP_INSTITUTE_DETAILS],
            errorMessages: errorMessages?.[SETUP_INSTITUTE_DETAILS],
        },
    };
};

export const useEndPointsSetupTheme = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_TEMPLATE = apiConstants.loadingStateKeys.SETUP_TEMPLATE;

    /**
     * Handles the EndPoints Theme process with loading states and error handling
     * @param {Object} payload - The endPoints Theme data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupEndPointsTheme = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_TEMPLATE, true);
            const controller = new AbortController();

            try {
                const data = await endPointsApiService.setupEndPointsTheme(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_TEMPLATE,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.(data);
            } catch (error) {
                console.log(error);
                showErrorNotification({
                    key: SETUP_TEMPLATE,
                    value: error || "Failed to complete setup endPoints Theme ",
                });
                onError?.(error);
                console.error("Setup EndPoints Theme error:", error);
                throw error;
            } finally {
                setLoading(SETUP_TEMPLATE, false);
            }
        },
        [SETUP_TEMPLATE, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        endPointsSetupTheme: {
            execute: setupEndPointsTheme,
            isLoading: isLoading(SETUP_TEMPLATE) || false,
            successMessages: successMessages?.[SETUP_TEMPLATE],
            errorMessages: errorMessages?.[SETUP_TEMPLATE],
        },
    };
};

export const useEndPointsSetupPassword = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_PASSWORD = apiConstants.loadingStateKeys.SETUP_PASSWORD;

    /**
     * Handles the EndPoints Theme process with loading states and error handling
     * @param {Object} payload - The endPoints Theme data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupEndPointsPassword = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_PASSWORD, true);
            const controller = new AbortController();

            try {
                const data = await endPointsApiService.setupEndPointsPassword(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_PASSWORD,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.(data);
            } catch (error) {
                console.log(error);
                showErrorNotification({
                    key: SETUP_PASSWORD,
                    value: error || "Failed to complete setup endPoints Password ",
                });
                onError?.(error);
                console.error("Setup EndPoints Password error:", error);
                throw error;
            } finally {
                setLoading(SETUP_PASSWORD, false);
            }
        },
        [SETUP_PASSWORD, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        endPointsSetupPassword: {
            execute: setupEndPointsPassword,
            isLoading: isLoading(SETUP_PASSWORD) || false,
            successMessages: successMessages?.[SETUP_PASSWORD],
            errorMessages: errorMessages?.[SETUP_PASSWORD],
        },
    };
};
