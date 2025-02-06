const apiConstants = {
    BACKEND_API_BASE_URL: `${process.env.REACT_APP_BACKEND_BASE_PATH}/api/v1`,
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
    laptop: {
        BASE_ROUTE: "/laptop",
    },
    stats: {
        BASE_ROUTE: "/stats",
    },
    charts: {
        BASE_ROUTE: "/charts",
    },
    loadingStateKeys: {
        CREATE_VIRTUAL_MACHINE: "createVirtualMachine",
        UPDATE_VIRTUAL_MACHINE: "updateVirtualMachine",
        DELETE_VIRTUAL_MACHINE: "deleteVirtualMachine",

        CREATE_WEB_APPLICATION: "createWebApplication",
        UPDATE_WEB_APPLICATION: "updateWebApplication",
        DELETE_WEB_APPLICATION: "deleteWebApplication",

        CREATE_NETWORK_DEVICE: "createNetworkDevice",
        UPDATE_NETWORK_DEVICE: "updateNetworkDevice",
        DELETE_NETWORK_DEVICE: "deleteNetworkDevice",

        CREATE_SERVER: "createServer",
        UPDATE_SERVER: "updateServer",
        DELETE_SERVER: "deleteServer",

        CREATE_DESKTOP: "createDesktop",
        UPDATE_DESKTOP: "updateDesktop",
        DELETE_DESKTOP: "deleteDesktop",

        CREATE_LAPTOP: "createLaptop",
        UPDATE_LAPTOP: "updateLaptop",
        DELETE_LAPTOP: "deleteLaptop",

        GET_STATS: "getStats",
        GET_CHARTS: "getCharts",
    },
};
export default apiConstants;
