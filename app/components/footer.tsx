import { Github, Mail, Twitter } from "lucide-react"

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
            href="#"
            className="transition-transform duration-200 hover:-translate-y-1 hover:scale-125 btn btn-ghost "
          >
            <Mail />
          </a>
          <a
            href="#"
            className="transition-transform duration-200 hover:-translate-y-1 hover:scale-125 btn btn-ghost"
          >
            <Twitter />
          </a>
          <a
            href="#"
            className="transition-transform duration-200 hover:-translate-y-1 hover:scale-125 btn btn-ghost"
          >
            <Github width="" />
          </a>
        </div>
      </nav>
    </footer>
  )
}
