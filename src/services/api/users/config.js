import apiConstants from "@/services/utils/constants";
import apiClient from "../config";

const usersApiClient = apiClient.create({
    baseURL: `${apiClient.defaults.baseURL}${apiConstants.users.BASE_ROUTE}`,
    headers: {
        ...apiClient.defaults.headers,
    },
});

usersApiClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

usersApiClient.interceptors.response.use(
    (response) => {
        console.log("User module response:", response);
        return response;
    },
    (error) => Promise.reject(error)
);

export default usersApiClient;
