"use client"

import { useTheme } from "next-themes"

export const ThemesPreview = () => {
  const { theme, setTheme } = useTheme()

  const themes = [
    // "default",y
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ]

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {themes.map((themeOption) => (
        <div
          data-theme={themeOption}
          className="space-y-3 rounded-[var(--rounded-box)] border-2 border-primary p-6"
        >
          <div className="text-sm capitalize">{themeOption}</div>
          <input
            key={themeOption}
            type="radio"
            name="theme-buttons"
            className="btn btn-primary btn-sm"
            checked={theme === themeOption}
            // capitalize theme name
            aria-label={
              themeOption.charAt(0).toUpperCase() + themeOption.slice(1)
            }
            onChange={() => {
              setTheme(themeOption)
            }}
            value={themeOption}
          />
        </div>
      ))}
      {/* <div className="bg-base-200 mt-8 p-8 w-full rounded-[var(--rounded-box)]">
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary">Primary button</button>
          <button className="btn btn-secondary">Secondary button</button>
          <button className="btn btn-accent">Accent button</button>
        </div>
      </div> */}
    </div>
  )
}
