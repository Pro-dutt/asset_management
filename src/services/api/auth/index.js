import apiConstants from "@/services/utils/constants";
import authApiClient from "./config";

class AuthApiService {
    static async login(payload, signal) {
        const response = await authApiClient.post(apiConstants.auth.LOGIN, payload, {
            signal,
        });
        return response.data;
    }

    static async forgotPassword(payload, signal) {
        const response = await authApiClient.post(apiConstants.auth.FORGOT_PASSWORD, payload, {
            signal,
        });
        return response.data;
    }
    static async changePassword(payload, signal) {
        const response = await authApiClient.post(apiConstants.auth.CHANGE_PASSWORD, payload, {
            signal,
        });
        return response.data;
    }

    static async getCurrentUser(payload, signal) {
        const response = await authApiClient.get(apiConstants.auth.GET_CURRENT_USER, payload, {
            signal,
        });
        return response.data;
    }

    static async updateAuthDetails(payload, signal) {
        const response = await authApiClient.post(apiConstants.auth.UPDATE_USER_DETAILS, payload, {
            signal,
        });
        return response.data;
    }

    static async updateAuthPassword(payload, signal) {
        const response = await authApiClient.post(apiConstants.auth.UPDATE_USER_PASSWORD, payload, {
            signal,
        });
        return response.data;
    }

    static async updateAuthPicture(payload, signal) {
        /*
         Set headers to multipart/form-data (axios automatically handles the boundary)
         */
        const headers = {
            "Content-Type": "multipart/form-data",
        };
        const response = await authApiClient.post(apiConstants.auth.UPDATE_USER_PICTURE, payload, {
            headers,
            signal,
        });
        return response.data;
    }
}

export default AuthApiService;
