import { createContext, useContext } from "react";
import { useChartsData } from "../hooks/charts";

const ChartsContext = createContext(null);

export const ChartsProvider = ({ children }) => {
    const chartDataState = useChartsData();

    return (
        <ChartsContext.Provider
            value={{
                ...chartDataState,
            }}
        >
            {children}
        </ChartsContext.Provider>
    );
};

export const useCharts = () => {
    const context = useContext(ChartsContext);
    if (context === null) {
        throw new Error("useCharts must be used within a statsProvider");
    }
    return context;
};
