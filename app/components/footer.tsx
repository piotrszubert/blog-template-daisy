import { Github, Mail, Twitter } from "lucide-react"
import { siteConfig } from "@/config/site"

export const Footer = () => {
  return (
    <footer className="footer footer-center my-3 rounded-[var(--rounded-box)] bg-primary p-10 text-primary-content shadow-xl">
      <aside>
        <p className="font-bold">Yu</p>
        <p className="text-xs">Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href={`mailto:${siteConfig.links.mail}`}
            className="btn btn-ghost transition-transform duration-200 hover:-translate-y-1 hover:scale-125 "
          >
            <Mail width="18" />
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost transition-transform duration-200 hover:-translate-y-1 hover:scale-125"
          >
            <Twitter width="18" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost transition-transform duration-200 hover:-translate-y-1 hover:scale-125"
          >
            <Github width="18" />
          </a>
        </div>
      </nav>
    </footer>
  )
}
