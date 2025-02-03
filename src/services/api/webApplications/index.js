import WebApplicationApiClient from "./config";

class WebApplicationApiService {
    static async create(payload, signal) {
        const response = await WebApplicationApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default WebApplicationApiService;
