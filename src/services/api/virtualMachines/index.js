import virtutalMachinesApiClient from "./config";

class VirtualMachinesApiService {
    static async create(payload, signal) {
        const response = await virtutalMachinesApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }

    static async update(id, payload, signal) {
        const response = await virtutalMachinesApiClient.put("/" + id, payload, {
            signal,
        });
        return response.data;
    }

    static async delete(id, signal) {
        const response = await virtutalMachinesApiClient.delete("/" + id, {
            signal,
        });
        return response.data;
    }
}

export default VirtualMachinesApiService;
