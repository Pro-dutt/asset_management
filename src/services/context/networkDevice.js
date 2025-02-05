import { createContext, useContext } from "react";
import { useNetworkDeviceCreate, useNetworkDeviceUpdate } from "../hooks/networkDevice";

const NetworkDeviceContext = createContext(null);

export const NetworkDeviceProvider = ({ children }) => {
    const networkDeviceCreationState = useNetworkDeviceCreate();
    const networkDeviceUpdationState = useNetworkDeviceUpdate();

    return (
        <NetworkDeviceContext.Provider
            value={{
                ...networkDeviceCreationState,
                ...networkDeviceUpdationState,
            }}
        >
            {children}
        </NetworkDeviceContext.Provider>
    );
};

export const useNetworkDevice = () => {
    const context = useContext(NetworkDeviceContext);
    if (context === null) {
        throw new Error("useNetworkDevice must be used within a UserProvider");
    }
    return context;
};
