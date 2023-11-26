type SiteConfig = {
  site: {
    name: string
    description: string
    url: string
    // ogImage: string
  }
  content: {
    hero: {
      display: boolean
      heading: string
      subheading: string
    }
  }
  links: {
    twitter: string
    github: string
    mail: string
  }
  theme: string
}

export const siteConfig: SiteConfig = {
  site: {
    name: "Yu",
    description:
      "An open source blog application built using the new router, server components",
    url: "https://",
    // ogImage: "https://",
  },
  content: {
    hero: {
      display: true,
      heading: "",
      subheading: "",
    },
  },
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    mail: "mail@example.com",
  },
  theme: "light",
}
