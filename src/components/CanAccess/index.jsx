import useHasPermission from "@/lib/hooks/useHasPermission";
import React from "react";
import AccessDenied from "../AccessDenied";

const CanAccess = ({ children, path, method = "GET", ...restProps }) => {
    const { hasPermission } = useHasPermission();
    console.log(hasPermission(path, method));
    return <div {...restProps}>{hasPermission(path, method) ? children : <AccessDenied />}</div>;
};

export default CanAccess;
