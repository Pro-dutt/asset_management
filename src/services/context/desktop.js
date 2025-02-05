import { createContext, useContext } from "react";
import { useDesktopCreate, useDesktopDelete, useDesktopUpdate } from "../hooks/desktop";

const DesktopContext = createContext(null);

export const DesktopProvider = ({ children }) => {
    const desktopCreationState = useDesktopCreate();
    const desktopUpdationState = useDesktopUpdate();
    const desktopDeletionState = useDesktopDelete();

    return (
        <DesktopContext.Provider
            value={{
                ...desktopCreationState,
                ...desktopUpdationState,
                ...desktopDeletionState,
            }}
        >
            {children}
        </DesktopContext.Provider>
    );
};

export const useDesktop = () => {
    const context = useContext(DesktopContext);
    if (context === null) {
        throw new Error("useDesktop must be used within a UserProvider");
    }
    return context;
};
