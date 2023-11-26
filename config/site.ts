type SiteConfig = {
  name: string
  description: string
  url: string
  displayHero: boolean
  // ogImage: string
  links: {
    twitter: string
    github: string
    mail: string
  }
  theme: string
}

export const siteConfig: SiteConfig = {
  name: "Yu",
  description:
    "An open source blog application built using the new router, server components",
  url: "https://",
  // ogImage: "https://",
  displayHero: true,
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    mail: "mail@example.com",
  },
  theme: "light",
}
