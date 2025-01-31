import apiConstants from "@/services/utils/constants";
import apiClient from "../config";

const webApplicationApiClient = apiClient.create({
    baseURL: `${apiClient.defaults.baseURL}${apiConstants.virtualMachines.BASE_ROUTE}`,
    headers: {
        ...apiClient.defaults.headers,
    },
});

// webApplicationApiClient.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("virtutalMachines_token");
//         if (token) {
//             config.headers["Authorization"] = `Bearer ${token}`;
//         }
//         console.log("Institute module request:", config);
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// webApplicationApiClient.interceptors.response.use(
//     (response) => {
//         console.log("Institute module response:", response);
//         return response;
//     },
//     (error) => Promise.reject(error)
// );

export default webApplicationApiClient;
