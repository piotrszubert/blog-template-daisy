import { siteConfig } from "@/config/site"
import { Github, Mail, Twitter } from "lucide-react"

type HeroProps = {
  heading?: string
  subheading?: string
}

const defaultHeading = "Yu - your own blog"
const defaultSubheading = `\
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
dolore quis doloribus dolorum nam rem ipsam repellat Lorem ipsum dolor
sit, amet consectetur adipisicing elit. Ipsam, eos dignissimos cumque
autem.`

export const Hero = ({
  heading = defaultHeading,
  subheading = defaultSubheading,
}: HeroProps) => {
  const displayHeading =
    heading && heading.trim() !== "" ? heading : defaultHeading
  const displaySubheading =
    subheading && subheading.trim() !== "" ? subheading : defaultSubheading

  return (
    <div className="mb-6 space-y-6 py-8">
      <h1 className="text-5xl font-bold tracking-tight">{displayHeading}</h1>
      <p>{displaySubheading}</p>
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
