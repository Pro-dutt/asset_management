import routeApiClient from "./config";

class RouteApiService {
    static async getDropDownList(signal) {
        const response = await routeApiClient.get("/dropdown-list", {
            signal,
        });
        return response.data;
    }
    static async create(payload, signal) {
        const response = await routeApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await routeApiClient.put("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await routeApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default RouteApiService;
