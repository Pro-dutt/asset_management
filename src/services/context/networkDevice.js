import { createContext, useContext } from "react";
import { useNetworkDeviceCreate } from "../hooks/networkDevice";

const NetworkDeviceContext = createContext(null);

export const NetworkDeviceProvider = ({ children, initialData = { NetworkDeviceList: [] } }) => {
    const networkDeviceCreationState = useNetworkDeviceCreate();

    return (
        <NetworkDeviceContext.Provider
            value={{
                ...networkDeviceCreationState,
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
