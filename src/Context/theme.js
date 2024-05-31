import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext();

// export const ThemeProvider = ThemeContext.Provider;

// export const useTheme = () => {
//     return useContext(ThemeContext);
// }


const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    const theme = useMemo(() => createTheme({
        palette: {
            mode: themeMode
        },
    }), [themeMode]);

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    // const theme = createTheme({
    //     palette: {
    //         mode,
    //     },
    // })

    // const darkTheme = createTheme({
    //     palette: {
    //       mode: 'dark',
    //     },
    //   });

    return (
        <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;