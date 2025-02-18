import usersApiClient from "./config";

class UsersApiService {
    static async create(payload, signal) {
        const response = await usersApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async details(id, signal) {
        const response = await usersApiClient.get("/" + id, {
            signal,
        });
        return response.data;
    }

    static async getDropDownList(signal) {
        const response = await usersApiClient.get("/dropdown-list", {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await usersApiClient.patch("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await usersApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default UsersApiService;
