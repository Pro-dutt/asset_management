import apiConstants from "@/services/utils/constants";

export default [
    {
        name: "dashboard",
        link: "/",
        icon: "dashboard",
        routes: ["/dashboard"],
    },
    {
        name: "End Points",
        link: "/endpoints",
        icon: "front",
        child: [
            {
                name: "Desktops",
                link: "/desktops",
                icon: "desktop",
                routes: ["/laptop"],
            },
            {
                name: "Laptops",
                link: "/laptops",
                icon: "laptop",
            },
        ],
        routes: ["/desktop", "/laptop"],
    },
    {
        name: "Servers",
        link: "/servers",
        icon: "data_center",
        routes: ["/server"],
    },
    {
        name: "Networking Devices",
        link: "/network-devices",
        icon: "networking_device",
        routes: ["/network-device"],
    },
    {
        name: "Virtual Machines",
        link: "/virtual-machines",
        icon: "desktop",
        routes: ["/virtual-machine"],
    },
    {
        name: "Web Applications",
        link: "/web-applications",
        icon: "website",
        routes: ["/web-application"],
    },
    {
        name: "Users",
        link: "/users",
        icon: "user",
        routes: ["/user"],
    },
    {
        name: "Roles",
        link: "/roles",
        icon: "role",
        routes: ["/role"],
    },
    {
        name: "Permissions",
        link: "/permissions",
        icon: "permission",
        routes: ["/permission"],
    },
    {
        name: "Logout",
        link: "/logout",
        icon: "logout",
        function: () => {
            localStorage.removeItem(apiConstants.AUTH_TOKEN_KEY);
            window.location.href = "/auth/login";
        },
    },
];
