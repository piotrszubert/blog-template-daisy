import { siteConfig } from "@/config/site"
import { Github, Mail, Twitter } from "lucide-react"

export const Hero = () => {
  return (
    <div className="mb-6 space-y-6 py-8">
      <h1 className="text-5xl font-bold tracking-tight">Yu - your own blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        dolore quis doloribus dolorum nam rem ipsam repellat Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Ipsam, eos dignissimos cumque
        autem.
      </p>
      <div className="flex gap-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.github}
          className="btn btn-square btn-ghost hover:text-primary"
        >
          <Github />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.twitter}
          className="btn btn-square btn-ghost hover:text-primary"
        >
          <Twitter />
        </a>
        <a
          href={`mailto:${siteConfig.links.mail}`}
          className="btn btn-square btn-ghost hover:text-primary"
        >
          <Mail />
        </a>
      </div>
    </div>
  )
}
