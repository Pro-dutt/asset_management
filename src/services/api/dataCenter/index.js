import dataCenterApiClient from "./config";

class DataCenterApiService {
    constructor(apiClient = dataCenterApiClient) {
        this.apiClient = apiClient;
    }

    static async create(payload, signal) {
        const response = await this.apiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default DataCenterApiService;
