import networkDeviceApiClient from "./config";

class NetworkDeviceApiService {
    static async create(payload, signal) {
        const response = await networkDeviceApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default NetworkDeviceApiService;
