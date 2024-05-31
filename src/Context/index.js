import { createContext, useState } from "react";
import { AppLightTheme } from "./themes";

export const ThemeContext = createContext(null);

const IThemeMode = [
    LIGHT = 'light',
    DARK = 'dark'
]

export const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(IThemeMode.LIGHT);
    const [theme, setTheme] = useState(AppLightTheme);

    const switchThemeMode = (mode) => {
        setTheme(mode);
    }

    return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
}

