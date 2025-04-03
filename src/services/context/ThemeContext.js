import React, { createContext, useState, useContext } from "react";
import globalConstants from "@/lib/utils/contants";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || globalConstants.THEME.LIGHT);
    const toggleTheme = () => {
        const newTheme = theme === globalConstants.THEME.LIGHT ? globalConstants.THEME.DARK : globalConstants.THEME.LIGHT;
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
