import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import { Footer } from "./components/footer"
import { Navbar } from "./components/navbar"
import { siteConfig } from "@/config/site"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: siteConfig.site.name,
    template: `%s | ${siteConfig.site.name}`,
  },
  description: siteConfig.site.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "ps777",
      url: "https://github.com/piotrszubert",
    },
  ],
  creator: "ps777",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-4">
          <ThemeProvider
            attribute="data-theme"
            defaultTheme={siteConfig.theme}
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
