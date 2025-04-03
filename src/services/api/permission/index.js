import permissionApiClient from "./config";

class PermissionApiService {
    static async create(payload, signal) {
        const response = await permissionApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async getDropDownList(signal) {
        const response = await permissionApiClient.get("/dropdown-list", {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await permissionApiClient.patch("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await permissionApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default PermissionApiService;
