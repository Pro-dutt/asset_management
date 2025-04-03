import { createContext, useContext } from "react";
import { useStatsCount } from "../hooks/stats";

const StatsContext = createContext(null);

export const StatsProvider = ({ children }) => {
    const statsCreationState = useStatsCount();

    return (
        <StatsContext.Provider
            value={{
                ...statsCreationState,
            }}
        >
            {children}
        </StatsContext.Provider>
    );
};

export const useStats = () => {
    const context = useContext(StatsContext);
    if (context === null) {
        throw new Error("useStats must be used within a statsProvider");
    }
    return context;
};
