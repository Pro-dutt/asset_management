"use client";

import { createContext, useContext } from "react";
import { useEndPointsSignup } from "../hooks/sampleEndPoints";

const EndPointsContext = createContext(null);

export const EndPointsProvider = ({ children, initialData = { endPointsList: [] } }) => {
    const endPointsSignupState = useEndPointsSignup();

    return (
        <EndPointsContext.Provider
            value={{
                ...endPointsSignupState,
            }}
        >
            {children}
        </EndPointsContext.Provider>
    );
};

export const useEndPoints = () => {
    const context = useContext(EndPointsContext);
    if (context === null) {
        throw new Error("useEndPoints must be used within a UserProvider");
    }
    return context;
};
