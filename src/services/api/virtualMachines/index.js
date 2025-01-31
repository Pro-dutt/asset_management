import virtutalMachinesApiClient from "./config";

class VirtualMachinesApiService {
    constructor(apiClient = virtutalMachinesApiClient) {
        this.apiClient = apiClient;
    }

    static async create(payload, signal) {
        const response = await this.apiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default VirtualMachinesApiService;
