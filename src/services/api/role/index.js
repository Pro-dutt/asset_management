import roleApiClient from "./config";

class RoleApiService {
    static async create(payload, signal) {
        const response = await roleApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async getDropDownList(signal) {
        const response = await roleApiClient.get("/dropdown-list", {
            signal,
        });
        return response.data;
    }

    static async details(id, signal) {
        const response = await roleApiClient.get("/" + id, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await roleApiClient.patch("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await roleApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default RoleApiService;
