import designationApiClient from "./config";

class DesignationApiService {
    static async create(payload, signal) {
        const response = await designationApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async getDropDownList(signal) {
        const response = await designationApiClient.get("/dropdown-list", {
            signal,
        });
        return response.data;
    }

    static async details(id, signal) {
        const response = await designationApiClient.get("/" + id, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await designationApiClient.patch("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await designationApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default DesignationApiService;
