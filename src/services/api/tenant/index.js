import tenantApiClient from "./config";

class TenantApiService {
    static async create(payload, signal) {
        const response = await tenantApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async details(id, signal) {
        const response = await tenantApiClient.get("/" + id, {
            signal,
        });
        return response.data;
    }

    static async getDropDownList(signal) {
        const response = await tenantApiClient.get("/dropdown-list", {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await tenantApiClient.patch("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await tenantApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default TenantApiService;
