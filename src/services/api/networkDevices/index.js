import networkDeviceApiClient from "./config";

class NetworkDeviceApiService {
    constructor(apiClient = networkDeviceApiClient) {
        this.apiClient = apiClient;
    }

    static async create(payload, signal) {
        const response = await this.apiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default NetworkDeviceApiService;
