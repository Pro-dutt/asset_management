import virtutalMachinesApiClient from "./config";

class VirtualMachinesApiService {
    static async create(payload, signal) {
        const response = await virtutalMachinesApiClient.post("/", payload, {
            signal,
        });
        return response.data;
    }
}

export default VirtualMachinesApiService;
