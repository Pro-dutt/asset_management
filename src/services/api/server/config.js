import apiConstants from "@/services/utils/constants";
import apiClient from "../config";
import { notifyError } from "@/components/Notification";

const serverApiClient = apiClient.create({
    baseURL: `${apiClient.defaults.baseURL}${apiConstants.server.BASE_ROUTE}`,
    headers: {
        ...apiClient.defaults.headers,
    },
});

serverApiClient.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem("virtutalMachines_token");
        // if (token) {
        //     config.headers["Authorization"] = `Bearer ${token}`;
        // }
        // console.log("Institute module request:", config);
        return config;
    },
    (error) => {
        notifyError(error);
        return Promise.reject(error);
    }
);

serverApiClient.interceptors.response.use(
    (response) => {
        console.log("Server module response:", response);
        return response;
    },
    (error) => {
        const errorMessage = error.response?.data?.message || error.message || "An error occurred";
        notifyError(errorMessage);
        return Promise.reject(error);
    }
);

export default serverApiClient;
