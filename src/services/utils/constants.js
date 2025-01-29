const apiConstants = {
    BACKEND_API_BASE_URL: "http://192.168.183.220:3000/api/v1",
    endPoints: {
        BASE_ROUTE: "/institutes",
        SIGN_UP: "/owners/register",
        VERIFY_EMAIL: "/owners/verify",
        CURRENT_ONBOARDED_USER: "/current-onboarded-user",
        SETUP_BASE_INFO: "/setup/basic-info",
    },
    virtualMachines: {
        BASE_ROUTE: "/virtual-machines",
        CREATE: "/",
        GET_LIST: "/",
    },
    loadingStateKeys: {
        CREATE_VIRTUAL_MACHINE: "createVirtualMachine",
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
