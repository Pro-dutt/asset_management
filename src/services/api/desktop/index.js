import desktopApiClient from "./config";

class DesktopApiService {
    static async create(payload, signal) {
        const response = await desktopApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default DesktopApiService;
