import { createContext, useContext } from "react";
import { useDeviceCategoryCreate, useDeviceCategoryDelete, useDeviceCategoryDetails, useDeviceCategoryGetDropDownList, useDeviceCategoryUpdate } from "../hooks/deviceCategory";

const DeviceCategoryContext = createContext(null);

export const DeviceCategoryProvider = ({ children }) => {
    const deviceCategoryCreationState = useDeviceCategoryCreate();
    const deviceCategoryGetDropDownListState = useDeviceCategoryGetDropDownList();
    const deviceCategoryDetailsState = useDeviceCategoryDetails();
    const deviceCategoryUpdatingState = useDeviceCategoryUpdate();
    const deviceCategoryDeletionState = useDeviceCategoryDelete();

    return (
        <DeviceCategoryContext.Provider
            value={{
                ...deviceCategoryCreationState,
                ...deviceCategoryGetDropDownListState,
                ...deviceCategoryDetailsState,
                ...deviceCategoryUpdatingState,
                ...deviceCategoryDeletionState,
            }}
        >
            {children}
        </DeviceCategoryContext.Provider>
    );
};

export const useDeviceCategory = () => {
    const context = useContext(DeviceCategoryContext);
    if (context === null) {
        throw new Error("useDeviceCategory must be used within a DeviceCategoryProvider");
    }
    return context;
};
