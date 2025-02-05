import { createContext, useContext } from "react";
import { useWebApplicationCreate, useWebApplicationDelete, useWebApplicationUpdate } from "../hooks/webApplication";

const WebApplicationContext = createContext(null);

export const WebApplicationProvider = ({ children }) => {
    const webApplicationCreationState = useWebApplicationCreate();
    const webApplicationUpdationState = useWebApplicationUpdate();
    const webApplicationDeletionState = useWebApplicationDelete();

    return (
        <WebApplicationContext.Provider
            value={{
                ...webApplicationCreationState,
                ...webApplicationUpdationState,
                ...webApplicationDeletionState,
            }}
        >
            {children}
        </WebApplicationContext.Provider>
    );
};

export const useWebApplication = () => {
    const context = useContext(WebApplicationContext);
    if (context === null) {
        throw new Error("useWebApplication must be used within a UserProvider");
    }
    return context;
};
