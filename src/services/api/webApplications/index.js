import apiConstants from "@/services/utils/constants";
import WebApplicationApiClient from "./config";

const WebApplicationApiEndpoints = apiConstants.WebApplication;

/*====================================================
 * Class handling all WebApplication-related API operations
 *====================================================*/

class WebApplicationApiService {
    constructor(apiClient = WebApplicationApiClient) {
        this.apiClient = apiClient;
    }

    static async create(payload, signal) {
        const response = await this.apiClient.post(WebApplicationApiEndpoints.CREATE, payload, {
            signal,
        });
        return response.data;
    }
}

export const webApplicationApiService = new WebApplicationApiService();

export default WebApplicationApiService;
