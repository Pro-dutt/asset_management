import { createContext, useContext } from "react";
import { usePermissionCreate, usePermissionDelete, usePermissionGetDropDownList, usePermissionUpdate } from "../hooks/permission";

const PermissionContext = createContext(null);

export const PermissionProvider = ({ children }) => {
    const permissionCreationState = usePermissionCreate();
    const permissionGetDropdownListState = usePermissionGetDropDownList();
    const permissionUpdatingState = usePermissionUpdate();
    const permissionDeletionState = usePermissionDelete();

    return (
        <PermissionContext.Provider
            value={{
                ...permissionCreationState,
                ...permissionGetDropdownListState,
                ...permissionUpdatingState,
                ...permissionDeletionState,
            }}
        >
            {children}
        </PermissionContext.Provider>
    );
};

export const usePermission = () => {
    const context = useContext(PermissionContext);
    if (context === null) {
        throw new Error("usePermission must be used within a UserProvider");
    }
    return context;
};
