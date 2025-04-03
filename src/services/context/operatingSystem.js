import { createContext, useContext } from "react";
import { useOperatingSystemCreate, useOperatingSystemDelete, useOperatingSystemDetails, useOperatingSystemGetDropDownList, useOperatingSystemUpdate } from "../hooks/operatingSystem";

const OperatingSystemContext = createContext(null);

export const OperatingSystemProvider = ({ children }) => {
    const operatingSystemCreationState = useOperatingSystemCreate();
    const operatingSystemGetDropDownListState = useOperatingSystemGetDropDownList();
    const operatingSystemDetailsState = useOperatingSystemDetails();
    const operatingSystemUpdatingState = useOperatingSystemUpdate();
    const operatingSystemDeletionState = useOperatingSystemDelete();

    return (
        <OperatingSystemContext.Provider
            value={{
                ...operatingSystemCreationState,
                ...operatingSystemGetDropDownListState,
                ...operatingSystemDetailsState,
                ...operatingSystemUpdatingState,
                ...operatingSystemDeletionState,
            }}
        >
            {children}
        </OperatingSystemContext.Provider>
    );
};

export const useOperatingSystem = () => {
    const context = useContext(OperatingSystemContext);
    if (context === null) {
        throw new Error("useOperatingSystem must be used within a OperatingSystemProvider");
    }
    return context;
};
