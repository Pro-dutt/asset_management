import { createContext, useContext } from "react";
import { useRouteCreate, useRouteDelete, useRouteGetDropDownList, useRouteUpdate } from "../hooks/route";

const RouteContext = createContext(null);

export const RouteProvider = ({ children }) => {
    const routeGetDropdownListState = useRouteGetDropDownList();
    const routeCreationState = useRouteCreate();
    const routeUpdatingState = useRouteUpdate();
    const routeDeletionState = useRouteDelete();

    return (
        <RouteContext.Provider
            value={{
                ...routeGetDropdownListState,
                ...routeCreationState,
                ...routeUpdatingState,
                ...routeDeletionState,
            }}
        >
            {children}
        </RouteContext.Provider>
    );
};

export const useRoute = () => {
    const context = useContext(RouteContext);
    if (context === null) {
        throw new Error("useRoute must be used within a UserProvider");
    }
    return context;
};
