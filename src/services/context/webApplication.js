import { createContext, useContext } from "react";
import { useWebApplicationCreate } from "../hooks/webApplication";

const WebApplicationContext = createContext(null);

export const WebApplicationProvider = ({ children, initialData = { WebApplicationList: [] } }) => {
    const webApplicationCreationState = useWebApplicationCreate();

    return (
        <WebApplicationContext.Provider
            value={{
                ...webApplicationCreationState,
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
