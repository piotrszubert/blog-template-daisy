type SiteConfig = {
  site: {
    name: string
    description: string
    url: string
    // ogImage: string
  }
  content: {
    progressBar: {
      display: boolean
    }
    hero: {
      display: boolean
      heading: string
      subheading: string
      displayAvatar: boolean
      avatarPath: string
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
    progressBar: {
      display: true,
    },
    hero: {
      display: true,
      displayAvatar: true,
      avatarPath: "/images/avatar.jpg",
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
