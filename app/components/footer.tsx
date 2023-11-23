import { Github, Mail, Twitter } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content rounded-[var(--rounded-box)] my-3">
      <aside>
        <p className="font-bold">Yu</p>
        <p className="text-xs">Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="#"
            className="hover:-translate-y-1 transition-transform duration-200"
          >
            <Mail />
          </a>
          <a
            href="#"
            className="hover:-translate-y-1 transition-transform duration-200"
          >
            <Twitter />
          </a>
          <a
            href="#"
            className="hover:-translate-y-1 transition-transform duration-200"
          >
            <Github />
          </a>
        </div>
      </nav>
    </footer>
  )
}
