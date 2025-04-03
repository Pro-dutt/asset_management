import { createContext, useContext } from "react";
import { useVirtutalMachinesCreate, useVirtutalMachinesDelete, useVirtutalMachinesUpdate } from "../hooks/virtualMachines";

const VirtualMachinesContext = createContext(null);

export const VirtualMachinesProvider = ({ children }) => {
    const virtualMachineCreationState = useVirtutalMachinesCreate();
    const virtualMachineUpdationState = useVirtutalMachinesUpdate();
    const virtualMachineDeletionState = useVirtutalMachinesDelete();

    return (
        <VirtualMachinesContext.Provider
            value={{
                ...virtualMachineCreationState,
                ...virtualMachineUpdationState,
                ...virtualMachineDeletionState,
            }}
        >
            {children}
        </VirtualMachinesContext.Provider>
    );
};

export const useVirtualMachines = () => {
    const context = useContext(VirtualMachinesContext);
    if (context === null) {
        throw new Error("useVirtualMachines must be used within a UserProvider");
    }
    return context;
};
