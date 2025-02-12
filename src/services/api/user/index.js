import apiConstants from "@/services/utils/constants";
import userApiClient from "./config";

class UserApiService {
    static async getCurrentUser(payload, signal) {
        const response = await userApiClient.get(apiConstants.user.GET_CURRENT_USER, payload, {
            signal,
        });
        return response.data;
    }

    static async updateUserDetails(payload, signal) {
        const response = await userApiClient.post(apiConstants.user.UPDATE_USER_DETAILS, payload, {
            signal,
        });
        return response.data;
    }

    static async updateUserPassword(payload, signal) {
        const response = await userApiClient.post(apiConstants.user.UPDATE_USER_PASSWORD, payload, {
            signal,
        });
        return response.data;
    }

    static async updateUserPicture(payload, signal) {
        /*
         Set headers to multipart/form-data (axios automatically handles the boundary)
         */
        const headers = {
            "Content-Type": "multipart/form-data",
        };
        const response = await userApiClient.post(apiConstants.user.UPDATE_USER_PICTURE, payload, {
            headers,
            signal,
        });
        return response.data;
    }
}

export default UserApiService;
