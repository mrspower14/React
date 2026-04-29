import { createContext } from "react";

type Theme = 'light' | 'dark';

//공유할 타입
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

//초기값 설정
const ThemeContext = createContext<ThemeContextType>({  
    theme: 'light',
    toggleTheme: () => {
        console.log();
    },
});

export default ThemeContext;