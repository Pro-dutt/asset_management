import apiConstants from "@/services/utils/constants";
import virtutalMachinesApiClient from "./config";

const virtutalMachinesApiEndpoints = apiConstants.virtualMachines;

/*====================================================
 * Class handling all VirtualMachines-related API operations
 *====================================================*/

class VirtualMachinesApiService {
    constructor(apiClient = virtutalMachinesApiClient) {
        this.apiClient = apiClient;
    }

    static async create(payload, signal) {
        const response = await this.apiClient.post(virtutalMachinesApiEndpoints.CREATE, payload, {
            signal,
        });
        return response.data;
    }
}

export const virtutalMachinesApiService = new VirtualMachinesApiService();

export default VirtualMachinesApiService;
