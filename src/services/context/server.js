import { createContext, useContext } from "react";
import { useServerCreate } from "../hooks/server";

const ServerContext = createContext(null);

export const ServerProvider = ({ children }) => {
    const serverCreationState = useServerCreate();

    return (
        <ServerContext.Provider
            value={{
                ...serverCreationState,
            }}
        >
            {children}
        </ServerContext.Provider>
    );
};

export const useServer = () => {
    const context = useContext(ServerContext);
    if (context === null) {
        throw new Error("useServer must be used within a UserProvider");
    }
    return context;
};
