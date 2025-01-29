import { createContext, useContext } from "react";
import { useVirtutalMachinesCreate } from "../hooks/virtualMachines";

const VirtualMachinesContext = createContext(null);

export const VirtualMachinesProvider = ({ children, initialData = { virtualMachinesList: [] } }) => {
    const virtualMachineCreationState = useVirtutalMachinesCreate();

    return (
        <VirtualMachinesContext.Provider
            value={{
                ...virtualMachineCreationState,
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
