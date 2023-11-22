'use client'

import { useTheme } from "next-themes"

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    const themes = [
        "default", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
        "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest",
        "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula",
        "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
        "dim", "nord", "sunset"
    ];

    return(
        <div className="join join-vertical max-w-[8rem]">
            {themes.map((themeOption => (
                <input 
                    key={themeOption }
                    type="radio" 
                    name="theme-buttons" 
                    className="btn theme-controller join-item" 
                    checked={ theme === themeOption } 
                    // capitalize theme name
                    aria-label={themeOption.charAt(0).toUpperCase()+ themeOption.slice(1)}
                    onChange={() => {
                        setTheme(themeOption)
                    }}
                    value={themeOption} 
                />
            )))}
        </div>
    );
}