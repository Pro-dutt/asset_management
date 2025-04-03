import departmentApiClient from "./config";

class DepartmentApiService {
    static async create(payload, signal) {
        const response = await departmentApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async getDropDownList(signal) {
        const response = await departmentApiClient.get("/dropdown-list", {
            signal,
        });
        return response.data;
    }

    static async details(id, signal) {
        const response = await departmentApiClient.get("/" + id, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await departmentApiClient.patch("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await departmentApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default DepartmentApiService;
