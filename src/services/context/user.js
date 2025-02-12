import { createContext, useContext } from "react";
import { useGetCurrentUser, useUpdateUserDetails, useUpdateUserPassword, useUpdateUserPicture } from "../hooks/user";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const getCurrentUserState = useGetCurrentUser();
    const updateUserPictureState = useUpdateUserPicture();
    const updateUserDetailsState = useUpdateUserDetails();
    const updateUserPasswordState = useUpdateUserPassword();

    return (
        <UserContext.Provider
            value={{
                ...getCurrentUserState,
                ...updateUserPictureState,
                ...updateUserDetailsState,
                ...updateUserPasswordState,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === null) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
