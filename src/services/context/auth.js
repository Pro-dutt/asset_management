import { createContext, useContext } from "react";
import { useChangePassword, useForgotPassword, useGetCurrentUser, useLoginAuth, useUpdateUserDetails, useUpdateUserPassword, useUpdateUserPicture } from "../hooks/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const loginAuthState = useLoginAuth();
    const getCurrentUserState = useGetCurrentUser();
    const forgotPasswordState = useForgotPassword();
    const changePasswordState = useChangePassword();
    const updateUserPictureState = useUpdateUserPicture();
    const updateUserDetailsState = useUpdateUserDetails();
    const updateUserPasswordState = useUpdateUserPassword();

    return (
        <AuthContext.Provider
            value={{
                ...loginAuthState,
                ...forgotPasswordState,
                ...changePasswordState,
                ...getCurrentUserState,
                ...updateUserPictureState,
                ...updateUserDetailsState,
                ...updateUserPasswordState,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};
