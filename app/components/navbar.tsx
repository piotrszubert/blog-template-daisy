"use client"

import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { MoreHorizontal, X } from "lucide-react"

const links = [
  { title: "Themes", path: "/themes" },
  { title: "FAQ", path: "/faq" },
  { title: "Docs", path: "/docs" },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 bg-transparent backdrop-blur-md border-2 border-primary rounded-[var(--rounded-box)] my-3 sticky top-3 z-50">
      <div className="navbar">
        <Link href="/" className="font-semibold text-primary text-lg">
          Yu
        </Link>
        <div className="ms-auto">
          {/* <ThemeToggle /> */}
          <button
            onClick={() => {
              toggleMenu()
            }}
            className="btn btn-square btn-ghost hover:text-primary"
          >
            {isOpen ? <X /> : <MoreHorizontal />}
          </button>
          {/* <Link className="btn btn-square btn-ghost" href="/themes" title="Themes">
                    <Palette />
                </Link> */}
        </div>
      </div>
      {isOpen && (
        <div className="pb-6 text-center font-semibold">
          <nav>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index} className="hover:underline">
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
