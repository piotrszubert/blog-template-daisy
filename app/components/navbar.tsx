"use client"

import Link from "next/link"
import { useState } from "react"
import { MoreHorizontal, X } from "lucide-react"
import { useEffect } from "react"
import { siteConfig } from "@/config/site"
import { usePathname } from "next/navigation"

const links = [
  { title: "Home", path: "/" },
  { title: "Themes", path: "/themes" },
  { title: "All posts", path: "/posts" },
  // { title: "Docs", path: "/docs" },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setisScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldUpdateState = window.scrollY > 0
      setisScrolled(shouldUpdateState)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const pathname = usePathname()

  return (
    <div
      className={`sticky top-3 z-50 transition-all duration-500 ${
        isScrolled ? "px-8" : "px-0"
      }`}
    >
      <div
        className={`my-3 rounded-[var(--rounded-box)] border-2 border-primary bg-transparent px-5 backdrop-blur-md transition-all duration-500 
        ${isScrolled ? "shadow-md" : "shadow-lg"}`}
      >
        <div className="navbar">
          <Link href="/" className="text-lg font-bold text-primary">
            {siteConfig.site.name}
          </Link>
          <div className="ms-auto">
            <button
              onClick={() => {
                setIsOpen(!isOpen)
              }}
              className="btn btn-square btn-ghost hover:text-primary"
            >
              {isOpen ? <X /> : <MoreHorizontal />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="pb-6 text-center font-semibold">
            <nav>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index} className="hover:underline">
                    <Link
                      className={pathname === link.path ? "text-primary" : ""}
                      onClick={() => {
                        setIsOpen(!isOpen)
                      }}
                      href={link.path}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
