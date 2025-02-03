import serverApiClient from "./config";

class ServerApiService {
    static async create(payload, signal) {
        const response = await serverApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default ServerApiService;
