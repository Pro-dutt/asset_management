import deviceStateApiClient from "./config";

class DeviceStateApiService {
    static async create(payload, signal) {
        const response = await deviceStateApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async getDropDownList(signal) {
        const response = await deviceStateApiClient.get("/dropdown-list", {
            signal,
        });
        return response.data;
    }

    static async details(id, signal) {
        const response = await deviceStateApiClient.get("/" + id, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await deviceStateApiClient.patch("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await deviceStateApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default DeviceStateApiService;
