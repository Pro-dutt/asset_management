import { createContext, useContext } from "react";
import { useDeviceStateCreate, useDeviceStateDelete, useDeviceStateDetails, useDeviceStateGetDropDownList, useDeviceStateUpdate } from "../hooks/deviceState";

const DeviceStateContext = createContext(null);

export const DeviceStateProvider = ({ children }) => {
    const deviceStateCreationState = useDeviceStateCreate();
    const deviceStateGetDropDownListState = useDeviceStateGetDropDownList();
    const deviceStateDetailsState = useDeviceStateDetails();
    const deviceStateUpdatingState = useDeviceStateUpdate();
    const deviceStateDeletionState = useDeviceStateDelete();

    return (
        <DeviceStateContext.Provider
            value={{
                ...deviceStateCreationState,
                ...deviceStateGetDropDownListState,
                ...deviceStateDetailsState,
                ...deviceStateUpdatingState,
                ...deviceStateDeletionState,
            }}
        >
            {children}
        </DeviceStateContext.Provider>
    );
};

export const useDeviceState = () => {
    const context = useContext(DeviceStateContext);
    if (context === null) {
        throw new Error("useDeviceState must be used within a DeviceStateProvider");
    }
    return context;
};
