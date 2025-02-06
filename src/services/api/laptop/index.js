import laptopDeviceApiClient from "./config";
class LaptopApiService {
    static async create(payload, signal) {
        const response = await laptopDeviceApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await laptopDeviceApiClient.put("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await laptopDeviceApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default LaptopApiService;
