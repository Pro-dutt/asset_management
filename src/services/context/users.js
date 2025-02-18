import { createContext, useContext } from "react";
import { useUsersCreate, useUsersDelete, useUsersDetails, useUsersGetDropDownList, useUsersUpdate } from "../hooks/users";

const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
    const usersCreationState = useUsersCreate();
    const usersGetDropdownListState = useUsersGetDropDownList();
    const usersDetailsState = useUsersDetails();
    const usersUpdatingState = useUsersUpdate();
    const usersDeletionState = useUsersDelete();

    return (
        <UsersContext.Provider
            value={{
                ...usersCreationState,
                ...usersGetDropdownListState,
                ...usersDetailsState,
                ...usersUpdatingState,
                ...usersDeletionState,
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export const useUsers = () => {
    const context = useContext(UsersContext);
    if (context === null) {
        throw new Error("useUsers must be used within a UserProvider");
    }
    return context;
};
