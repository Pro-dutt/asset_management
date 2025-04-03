import apiConstants from "@/services/utils/constants";
import apiClient from "../config";

const tenantApiClient = apiClient.create({
    baseURL: `${apiClient.defaults.baseURL}${apiConstants.tenant.BASE_ROUTE}`,
    headers: {
        ...apiClient.defaults.headers,
    },
});

tenantApiClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

tenantApiClient.interceptors.response.use(
    (response) => {
        console.log("Tenant module response:", response);
        return response;
    },
    (error) => Promise.reject(error)
);

export default tenantApiClient;
