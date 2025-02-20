const apiConstants = {
    BACKEND_API_BASE_URL: `${process.env.REACT_APP_BACKEND_BASE_PATH}/api/v1`,
    AUTH_TOKEN_KEY: "AssetsManagementToken",
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
    route: {
        BASE_ROUTE: "/route",
    },
    permission: {
        BASE_ROUTE: "/permission",
    },
    role: {
        BASE_ROUTE: "/role",
    },
    users: {
        BASE_ROUTE: "/user",
    },
    department: {
        BASE_ROUTE: "/department",
    },
    user: {
        BASE_ROUTE: "/user",
        GET_CURRENT_USER: "/get-current-user",
        UPDATE_USER_PICTURE: "/update-profile-picture",
        UPDATE_USER_DETAILS: "/update-user-details",
        UPDATE_USER_PASSWORD: "/update-password",
        LOGIN: "/user/login",
        LOGOUT: "/user/logout",
    },
    auth: {
        BASE_ROUTE: "/auth",
        GET_CURRENT_USER: "/logged-in",
        UPDATE_USER_PICTURE: "/update-profile-picture",
        UPDATE_USER_DETAILS: "/update-user-details",
        UPDATE_USER_PASSWORD: "/change-password",
        LOGIN: "/login",
        LOGOUT: "/logout",
        FORGOT_PASSWORD: "forgot-password",
        CHANGE_PASSWORD: "reset-password",
    },
    tenant: {
        BASE_ROUTE: "/tenant",
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

        LOGIN_AUTH: "loginAuth",
        FORGOT_PASSWORD: "forgotPassword",
        GET_CURRENT_USER: "getCurrentUser",
        UPDATE_USER_PICTURE: "updateUserPicture",
        UPDATE_USER_DETAILS: "updateUser",
        UPDATE_USER_PASSWORD: "updatePassword",
        CHANGE_PASSWORD: "changePassword",

        GET_DROPDOWN_LIST_ROUTE: "getDropdownListRoute",
        CREATE_ROUTE: "createRoute",
        UPDATE_ROUTE: "updateRoute",
        DELETE_ROUTE: "deleteRoute",

        GET_DROPDOWN_LIST_PERMISSION: "getDropdownListPermission",
        CREATE_PERMISSION: "createPermission",
        UPDATE_PERMISSION: "updatePermission",
        DELETE_PERMISSION: "deletePermission",

        GET_DROPDOWN_LIST_ROLE: "getDropdownListRole",
        CREATE_ROLE: "createRole",
        DETAILS_ROLE: "detailsRole",
        UPDATE_ROLE: "updateRole",
        DELETE_ROLE: "deleteRole",

        GET_DROPDOWN_LIST_USERS: "getDropdownListUsers",
        CREATE_USERS: "createUsers",
        DETAILS_USERS: "detailsUsers",
        UPDATE_USERS: "updateUsers",
        DELETE_USERS: "deleteUsers",

        GET_DROPDOWN_LIST_TENANT: "getDropdownListTenant",
        CREATE_TENANT: "createTenant",
        DETAILS_TENANT: "detailsTenant",
        UPDATE_TENANT: "updateTenant",
        DELETE_TENANT: "deleteTenant",

        GET_DROPDOWN_LIST_DEPARTMENT: "getDropdownListDepartment",
        CREATE_DEPARTMENT: "createDepartment",
        DETAILS_DEPARTMENT: "detailsDepartment",
        UPDATE_DEPARTMENT: "updateDepartment",
        DELETE_DEPARTMENT: "deleteDepartment",
    },
};
export default apiConstants;
