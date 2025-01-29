import apiConstants from "@/services/utils/constants";
import endPointsApiClient from "./config";

const endPointsApiEndpoints = apiConstants.endPoints;

/*====================================================
 * Class handling all EndPoints-related API operations
 *====================================================*/

class EndPointsApiService {
    constructor(apiClient = endPointsApiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Creates new endPoints registration
     * @param {Object} payload - Registration data
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} EndPoints data
     */

    async createSignup(payload, params, signal) {
        const response = await this.apiClient.post(endPointsApiEndpoints.SIGN_UP, payload, {
            params,
            signal,
        });
        return response.data;
    }

    /**
     * Current onboarded user
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} user information
     */

    async currentOnboardedUser(params, signal) {
        const response = await this.apiClient.get(endPointsApiEndpoints.CURRENT_ONBOARDED_USER, {
            params,
            signal,
        });
        return response.data;
    }
}

export const endPointsApiService = new EndPointsApiService();

export default EndPointsApiService;
