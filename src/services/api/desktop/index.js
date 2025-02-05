import desktopApiClient from "./config";

class DesktopApiService {
    static async create(payload, signal) {
        const response = await desktopApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await desktopApiClient.put("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await desktopApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default DesktopApiService;
