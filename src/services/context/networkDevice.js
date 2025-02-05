import { createContext, useContext } from "react";
import { useNetworkDeviceCreate, useNetworkDeviceDelete, useNetworkDeviceUpdate } from "../hooks/networkDevice";

const NetworkDeviceContext = createContext(null);

export const NetworkDeviceProvider = ({ children }) => {
    const networkDeviceCreationState = useNetworkDeviceCreate();
    const networkDeviceUpdationState = useNetworkDeviceUpdate();
    const networkDeviceDeletionState = useNetworkDeviceDelete();

    return (
        <NetworkDeviceContext.Provider
            value={{
                ...networkDeviceCreationState,
                ...networkDeviceUpdationState,
                ...networkDeviceDeletionState,
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
