import apiConstants from "@/services/utils/constants";
import apiClient from "../config";

const designationApiClient = apiClient.create({
    baseURL: `${apiClient.defaults.baseURL}${apiConstants.designation.BASE_ROUTE}`,
    headers: {
        ...apiClient.defaults.headers,
    },
});

// designationApiClient.interceptors.request.use(
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

// designationApiClient.interceptors.response.use(
//     (response) => {
//         console.log("Institute module response:", response);
//         return response;
//     },
//     (error) => Promise.reject(error)
// );

export default designationApiClient;
