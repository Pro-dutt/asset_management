import desktopApiClient from "./config";

class DesktopApiService {
    constructor(apiClient = desktopApiClient) {
        this.apiClient = apiClient;
    }

    static async create(payload, signal) {
        const response = await this.apiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default DesktopApiService;
