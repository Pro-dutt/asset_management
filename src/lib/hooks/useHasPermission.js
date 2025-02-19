import { useAuth } from "@/services/context/auth";

const useHasPermission = () => {
    const { getCurrentUser } = useAuth();
    const isSuperAdmin = getCurrentUser?.data?.roles?.find((role) => role.name === "Super Admin");
    const hasPermission = (path, method) => {
        const routes = [...getCurrentUser.data?.routes, ...getCurrentUser.data?.extraPermissionsRoutes];
        const paths = Array.isArray(path) ? path : [path];
        return isSuperAdmin || paths.some((p) => routes.some((route) => route.path.startsWith(`/api/v1${p}`) && route.method === method));
    };

    return { hasPermission };
};
export default useHasPermission;
