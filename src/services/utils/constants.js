const apiConstants = {
    BACKEND_API_BASE_URL: "http://192.168.22.16:3000/api/v1",
    endPoints: {
        BASE_ROUTE: "/institutes",
        SIGN_UP: "/owners/register",
        VERIFY_EMAIL: "/owners/verify",
        CURRENT_ONBOARDED_USER: "/current-onboarded-user",
        SETUP_BASE_INFO: "/setup/basic-info",
    },
    virtualMachines: {
        BASE_ROUTE: "/virtual-machine",
    },
    webApplications: {
        BASE_ROUTE: "/web-application",
    },
    networkDevices: {
        BASE_ROUTE: "/network-device",
    },
    server: {
        BASE_ROUTE: "/server",
    },
    desktop: {
        BASE_ROUTE: "/desktop",
    },
    stats: {
        BASE_ROUTE: "/stats",
    },
    loadingStateKeys: {
        CREATE_VIRTUAL_MACHINE: "createVirtualMachine",
        UPDATE_VIRTUAL_MACHINE: "updateVirtualMachine",
        CREATE_WEB_APPLICATION: "createWebApplication",
        UPDATE_WEB_APPLICATION: "updateWebApplication",
        CREATE_NETWORK_DEVICE: "createNetworkDevice",
        UPDATE_NETWORK_DEVICE: "updateNetworkDevice",
        CREATE_SERVER: "createServer",
        UPDATE_SERVER: "updateServer",
        CREATE_DESKTOP: "createDesktop",
        UPDATE_DESKTOP: "updateDesktop",
        DELETE_DESKTOP: "deleteDesktop",
        GET_STATS: "getStats",
    },
};
export default apiConstants;
