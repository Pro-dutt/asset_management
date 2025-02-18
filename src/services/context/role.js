import { createContext, useContext } from "react";
import { useRoleCreate, useRoleDelete, useRoleDetails, useRoleGetDropDownList, useRoleUpdate } from "../hooks/role";

const RoleContext = createContext(null);

export const RoleProvider = ({ children }) => {
    const roleCreationState = useRoleCreate();
    const roleGetDropDownListState = useRoleGetDropDownList();
    const roleDetailsState = useRoleDetails();
    const roleUpdatingState = useRoleUpdate();
    const roleDeletionState = useRoleDelete();

    return (
        <RoleContext.Provider
            value={{
                ...roleCreationState,
                ...roleGetDropDownListState,
                ...roleDetailsState,
                ...roleUpdatingState,
                ...roleDeletionState,
            }}
        >
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => {
    const context = useContext(RoleContext);
    if (context === null) {
        throw new Error("useRole must be used within a RoleProvider");
    }
    return context;
};
