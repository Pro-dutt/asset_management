import { createContext, useContext } from "react";
import { useDesktopCreate } from "../hooks/desktop";

const DesktopContext = createContext(null);

export const DesktopProvider = ({ children }) => {
    const desktopCreationState = useDesktopCreate();

    return (
        <DesktopContext.Provider
            value={{
                ...desktopCreationState,
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
