import { createContext, useContext } from "react";
import { useTenantCreate, useTenantDelete, useTenantDetails, useTenantGetDropDownList, useTenantUpdate } from "../hooks/tenant";

const TenantContext = createContext(null);

export const TenantProvider = ({ children }) => {
    const tenantCreationState = useTenantCreate();
    const tenantGetDropdownListState = useTenantGetDropDownList();
    const tenantDetailsState = useTenantDetails();
    const tenantUpdatingState = useTenantUpdate();
    const tenantDeletionState = useTenantDelete();

    return (
        <TenantContext.Provider
            value={{
                ...tenantCreationState,
                ...tenantGetDropdownListState,
                ...tenantDetailsState,
                ...tenantUpdatingState,
                ...tenantDeletionState,
            }}
        >
            {children}
        </TenantContext.Provider>
    );
};

export const useTenant = () => {
    const context = useContext(TenantContext);
    if (context === null) {
        throw new Error("useTenant must be used within a TenantProvider");
    }
    return context;
};
