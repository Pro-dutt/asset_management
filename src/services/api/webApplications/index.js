import WebApplicationApiClient from "./config";

class WebApplicationApiService {
    static async create(payload, signal) {
        const response = await WebApplicationApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await WebApplicationApiClient.put("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await WebApplicationApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default WebApplicationApiService;
