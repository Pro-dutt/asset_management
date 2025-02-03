const apiConstants = {
    BACKEND_API_BASE_URL: "http://localhost:5500/api/v1",
    endPoints: {
        BASE_ROUTE: "/institutes",
        SIGN_UP: "/owners/register",
        VERIFY_EMAIL: "/owners/verify",
        CURRENT_ONBOARDED_USER: "/current-onboarded-user",
        SETUP_BASE_INFO: "/setup/basic-info",
    },
    virtualMachines: {
        BASE_ROUTE: "/virtual-machines",
    },
    webApplications: {
        BASE_ROUTE: "/web-applications",
    },
    networkDevices: {
        BASE_ROUTE: "/network-devices",
    },
    server: {
        BASE_ROUTE: "/server",
    },
    desktop: {
        BASE_ROUTE: "/desktop",
    },
    loadingStateKeys: {
        CREATE_VIRTUAL_MACHINE: "createVirtualMachine",
        CREATE_WEB_APPLICATION: "createWebApplication",
        CREATE_NETWORK_DEVICE: "createNetworkDevice",
        CREATE_SERVER: "createServer",
        CREATE_DESKTOP: "createDesktop",
        SIGN_UP: "signup",
        VERIFY_EMAIL: "verifyEmail",
        SETUP_BASE_INFO: "setupBaseInfo",
        SETUP_PAYMENT: "setupPayment",
        SETUP_DETAILS: "setupDetails",
        SETUP_TEMPLATE: "setupTemplate",
        SETUP_PASSWORD: "setupPassword",
        FILE_UPLOAD_KEY: "fileUpload",
        CURRENT_ONBOARDED_USER: "currentOnboardedUser",
        GET_TEMPLATE_LIST: "getTemplateList",
    },
};
export default apiConstants;
