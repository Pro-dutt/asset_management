import { createContext, useContext } from "react";
import { useLaptopCreate, useLaptopDelete, useLaptopUpdate } from "../hooks/laptop";

const LaptopContext = createContext(null);

export const LaptopProvider = ({ children }) => {
    const laptopCreationState = useLaptopCreate();
    const laptopUpdationState = useLaptopUpdate();
    const laptopDeletionState = useLaptopDelete();

    return (
        <LaptopContext.Provider
            value={{
                ...laptopCreationState,
                ...laptopUpdationState,
                ...laptopDeletionState,
            }}
        >
            {children}
        </LaptopContext.Provider>
    );
};

export const useLaptop = () => {
    const context = useContext(LaptopContext);
    if (context === null) {
        throw new Error("useLaptop must be used within a UserProvider");
    }
    return context;
};
