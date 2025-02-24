import DesignationApiService from "@/services/api/designation";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

export const useDesignationCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_DESIGNATION_KEY = apiConstants.loadingStateKeys.CREATE_DESIGNATION;

    const executeDesignationCreation = useCallback(
        async ({ payload, onSuccess, onError, options }) => {
            setLoading(CREATE_DESIGNATION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DesignationApiService.create(payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: CREATE_DESIGNATION_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_DESIGNATION_KEY,
                    value: error || "Failed to complete creation",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(CREATE_DESIGNATION_KEY, false);
                return () => controller.abort();
            }
        },
        [CREATE_DESIGNATION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        designationCreation: {
            execute: executeDesignationCreation,
            isLoading: isLoading(CREATE_DESIGNATION_KEY) || false,
            successMessages: successMessages?.[CREATE_DESIGNATION_KEY],
            errorMessages: errorMessages?.[CREATE_DESIGNATION_KEY],
        },
    };
};

export const useDesignationGetDropDownList = () => {
    const [dropdownList, setDropDownList] = useState([]);
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const GET_DROPDOWN_LIST_DESIGNATION_KEY = apiConstants.loadingStateKeys.GET_DROPDOWN_LIST_DESIGNATION;

    const fetchDropdownList = useCallback(
        async ({ onSuccess, onError, options }) => {
            setLoading(GET_DROPDOWN_LIST_DESIGNATION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DesignationApiService.getDropDownList(controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: GET_DROPDOWN_LIST_DESIGNATION_KEY,
                        value: data,
                    });
                }
                setDropDownList(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: GET_DROPDOWN_LIST_DESIGNATION_KEY,
                    value: error || "Failed to complete fetch list",
                });
                setDropDownList([]);
                onError?.(error);
                throw error;
            } finally {
                setLoading(GET_DROPDOWN_LIST_DESIGNATION_KEY, false);
                return () => controller.abort();
            }
        },
        [GET_DROPDOWN_LIST_DESIGNATION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        designationDropdownList: {
            fetch: fetchDropdownList,
            data: dropdownList,
            isLoading: isLoading(GET_DROPDOWN_LIST_DESIGNATION_KEY) || false,
            successMessages: successMessages?.[GET_DROPDOWN_LIST_DESIGNATION_KEY],
            errorMessages: errorMessages?.[GET_DROPDOWN_LIST_DESIGNATION_KEY],
        },
    };
};

export const useDesignationDetails = () => {
    const [designationDetails, setDesignationDetails] = useState({});
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DETAILS_DESIGNATION_KEY = apiConstants.loadingStateKeys.DETAILS_DESIGNATION;

    const fetchDesignationDetails = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DETAILS_DESIGNATION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DesignationApiService.details(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DETAILS_DESIGNATION_KEY,
                        value: data,
                    });
                }
                setDesignationDetails(data.data);
                onSuccess?.(data);
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DETAILS_DESIGNATION_KEY,
                    value: error || "Failed to complete details request",
                });

                onError?.(error);
                throw error;
            } finally {
                setLoading(DETAILS_DESIGNATION_KEY, false);
                return () => controller.abort();
            }
        },
        [DETAILS_DESIGNATION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        designationDetails: {
            fetch: fetchDesignationDetails,
            data: designationDetails,
            isLoading: isLoading(DETAILS_DESIGNATION_KEY) || false,
            successMessages: successMessages?.[DETAILS_DESIGNATION_KEY],
            errorMessages: errorMessages?.[DETAILS_DESIGNATION_KEY],
        },
    };
};

export const useDesignationUpdate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const UPDATE_DESIGNATION_KEY = apiConstants.loadingStateKeys.UPDATE_DESIGNATION;

    const executeDesignationUpdate = useCallback(
        async ({ id, payload, onSuccess, onError, options }) => {
            setLoading(UPDATE_DESIGNATION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DesignationApiService.update(id, payload, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: UPDATE_DESIGNATION_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: UPDATE_DESIGNATION_KEY,
                    value: error || "Failed to complete updating",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(UPDATE_DESIGNATION_KEY, false);
                return () => controller.abort();
            }
        },
        [UPDATE_DESIGNATION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        designationUpdating: {
            execute: executeDesignationUpdate,
            isLoading: isLoading(UPDATE_DESIGNATION_KEY) || false,
            successMessages: successMessages?.[UPDATE_DESIGNATION_KEY],
            errorMessages: errorMessages?.[UPDATE_DESIGNATION_KEY],
        },
    };
};

export const useDesignationDelete = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const DELETE_DESIGNATION_KEY = apiConstants.loadingStateKeys.DELETE_DESIGNATION;

    const executeDesignationDelete = useCallback(
        async ({ id, onSuccess, onError, options }) => {
            setLoading(DELETE_DESIGNATION_KEY, true);
            const controller = new AbortController();

            try {
                const data = await DesignationApiService.delete(id, controller.signal);

                if (options?.showNotification) {
                    showSuccessNotification({
                        key: DELETE_DESIGNATION_KEY,
                        value: data,
                    });
                }

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: DELETE_DESIGNATION_KEY,
                    value: error || "Failed to complete deletion",
                });

                onError?.();
                throw error;
            } finally {
                setLoading(DELETE_DESIGNATION_KEY, false);
                return () => controller.abort();
            }
        },
        [DELETE_DESIGNATION_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        designationDeletion: {
            execute: executeDesignationDelete,
            isLoading: isLoading(DELETE_DESIGNATION_KEY) || false,
            successMessages: successMessages?.[DELETE_DESIGNATION_KEY],
            errorMessages: errorMessages?.[DELETE_DESIGNATION_KEY],
        },
    };
};
