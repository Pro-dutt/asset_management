import operatingSystemApiClient from "./config";

class OperatingSystemApiService {
    static async create(payload, signal) {
        const response = await operatingSystemApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async getDropDownList(signal) {
        const response = await operatingSystemApiClient.get("/dropdown-list", {
            signal,
        });
        return response.data;
    }

    static async details(id, signal) {
        const response = await operatingSystemApiClient.get("/" + id, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await operatingSystemApiClient.patch("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await operatingSystemApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default OperatingSystemApiService;
