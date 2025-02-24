import { createContext, useContext } from "react";
import { useDesignationCreate, useDesignationDelete, useDesignationDetails, useDesignationGetDropDownList, useDesignationUpdate } from "../hooks/designation";

const DesignationContext = createContext(null);

export const DesignationProvider = ({ children }) => {
    const designationCreationState = useDesignationCreate();
    const designationGetDropDownListState = useDesignationGetDropDownList();
    const designationDetailsState = useDesignationDetails();
    const designationUpdatingState = useDesignationUpdate();
    const designationDeletionState = useDesignationDelete();

    return (
        <DesignationContext.Provider
            value={{
                ...designationCreationState,
                ...designationGetDropDownListState,
                ...designationDetailsState,
                ...designationUpdatingState,
                ...designationDeletionState,
            }}
        >
            {children}
        </DesignationContext.Provider>
    );
};

export const useDesignation = () => {
    const context = useContext(DesignationContext);
    if (context === null) {
        throw new Error("useDesignation must be used within a DesignationProvider");
    }
    return context;
};
