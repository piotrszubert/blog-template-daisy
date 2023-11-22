'use client'

import { useLocalStorage } from "@uidotdev/usehooks";

type Theme = string | null;

export const ThemeToggle = () => {
    const [theme, setTheme] = useLocalStorage<Theme>("theme", null);

    const themes = [
        "default", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
        "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest",
        "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula",
        "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
        "dim", "nord", "sunset"
    ];

    return(
        <div className="join join-vertical">
            {themes.map((themeOption => (
                <input 
                    key={themeOption }
                    type="radio" 
                    name="theme-buttons" 
                    className="btn theme-controller join-item" 
                    defaultChecked={ theme === themeOption } 
                    // capitalize theme name
                    aria-label={themeOption.charAt(0).toUpperCase()+ themeOption.slice(1)}
                    onClick={() => {
                        setTheme(themeOption)
                    }}
                    value={themeOption} 
                />
            )))}
        </div>
    );
}