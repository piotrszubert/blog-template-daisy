'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"

export const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();
    
    return(
        <>
            <label className="swap swap-rotate">
                <input type="checkbox" className="theme-controller" value="dim" />
                <Sun className="swap-on fill-current w-6 h-6" />
                <Moon className="swap-off fill-current w-6 h-6" />              
            </label>
        </>
    );
}