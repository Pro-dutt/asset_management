import serverApiClient from "./config";

class ServerApiService {
    static async create(payload, signal) {
        const response = await serverApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await serverApiClient.put("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await serverApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default ServerApiService;
