import { createContext, useContext } from "react";
import { useWebApplicationCreate, useWebApplicationUpdate } from "../hooks/webApplication";

const WebApplicationContext = createContext(null);

export const WebApplicationProvider = ({ children }) => {
    const webApplicationCreationState = useWebApplicationCreate();
    const webApplicationUpdationState = useWebApplicationUpdate();

    return (
        <WebApplicationContext.Provider
            value={{
                ...webApplicationCreationState,
                ...webApplicationUpdationState,
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
