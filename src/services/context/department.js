import { createContext, useContext } from "react";
import { useDepartmentCreate, useDepartmentDelete, useDepartmentDetails, useDepartmentGetDropDownList, useDepartmentUpdate } from "../hooks/department";

const DepartmentContext = createContext(null);

export const DepartmentProvider = ({ children }) => {
    const departmentCreationState = useDepartmentCreate();
    const departmentGetDropDownListState = useDepartmentGetDropDownList();
    const departmentDetailsState = useDepartmentDetails();
    const departmentUpdatingState = useDepartmentUpdate();
    const departmentDeletionState = useDepartmentDelete();

    return (
        <DepartmentContext.Provider
            value={{
                ...departmentCreationState,
                ...departmentGetDropDownListState,
                ...departmentDetailsState,
                ...departmentUpdatingState,
                ...departmentDeletionState,
            }}
        >
            {children}
        </DepartmentContext.Provider>
    );
};

export const useDepartment = () => {
    const context = useContext(DepartmentContext);
    if (context === null) {
        throw new Error("useDepartment must be used within a DepartmentProvider");
    }
    return context;
};
