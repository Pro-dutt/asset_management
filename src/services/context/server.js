import { createContext, useContext } from "react";
import { useServerCreate } from "../hooks/server";
import { useServerUpdate } from "../hooks/server";

const ServerContext = createContext(null);

export const ServerProvider = ({ children }) => {
    const serverCreationState = useServerCreate();
    const serverUpdationState = useServerUpdate();

    return (
        <ServerContext.Provider
            value={{
                ...serverCreationState,
                ...serverUpdationState,
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
