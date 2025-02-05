import networkDeviceApiClient from "./config";

class NetworkDeviceApiService {
    static async create(payload, signal) {
        const response = await networkDeviceApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await networkDeviceApiClient.put("/" + id, payload, {
            signal,
        });
        return response.data;
    }
}

export default NetworkDeviceApiService;
