import serverApiClient from "./config";

class ServerApiService {
    constructor(apiClient = serverApiClient) {
        this.apiClient = apiClient;
    }

    static async create(payload, signal) {
        const response = await this.apiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default ServerApiService;
