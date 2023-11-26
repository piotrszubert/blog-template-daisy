import { Github, Mail, Twitter } from "lucide-react"
import { siteConfig } from "@/config/site"

const socialLinks = [
  { href: `mailto:${siteConfig.links.mail}`, icon: <Mail width="18" /> },
  { href: siteConfig.links.twitter, icon: <Twitter width="18" /> },
  { href: siteConfig.links.github, icon: <Github width="18" /> },
]

export const Footer = () => {
  return (
    <footer className="footer footer-center my-3 gap-y-6 rounded-[var(--rounded-box)] border-2 border-primary p-10 text-primary shadow-xl">
      <aside>
        <p className="text-lg font-bold">{siteConfig.site.name}</p>
        <p className="text-xs text-accent">
          Copyright © 2023 - All right reserved
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost transition-transform duration-200 hover:-translate-y-1 hover:scale-125 hover:shadow-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  )
}
