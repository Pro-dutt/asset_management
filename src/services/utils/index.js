import apiConstants from "./constants";

class ApiUtils {
    static getAuthToken() {
        return localStorage.getItem(apiConstants.AUTH_TOKEN_KEY) || undefined;
    }

    static async storeAuthToken(token) {
        await localStorage.setItem(apiConstants.AUTH_TOKEN_KEY, token);
        return true;
    }
}
export default ApiUtils;
