import { useState } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./ThemeMainContext";
import MiddleContext from "./ThemeMiddleContext";

type Theme = 'light' | 'dark';
export default function DarkOrLight() {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = ():void => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>  //여기서 재정의 const ThemeContext = createContext(...)
            <MiddleContext />
        </ThemeContext.Provider>
    );
}