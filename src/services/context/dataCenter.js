import { createContext, useContext } from "react";
import { useDataCenterCreate } from "../hooks/dataCenter";

const DataCenterContext = createContext(null);

export const DataCenterProvider = ({ children }) => {
    const dataCenterCreationState = useDataCenterCreate();

    return (
        <DataCenterContext.Provider
            value={{
                ...dataCenterCreationState,
            }}
        >
            {children}
        </DataCenterContext.Provider>
    );
};

export const useDataCenter = () => {
    const context = useContext(DataCenterContext);
    if (context === null) {
        throw new Error("useDataCenter must be used within a UserProvider");
    }
    return context;
};
