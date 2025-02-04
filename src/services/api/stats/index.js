import StatsApiClient from "./config";

class StatsApiService {
    static async getStats(params, signal) {
        const response = await StatsApiClient.get(`/${params.module}`, {
            signal,
        });
        return response.data;
    }
}

export default StatsApiService;
