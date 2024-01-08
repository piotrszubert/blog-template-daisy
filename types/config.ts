export type SiteConfig = {
  site: {
    name: string
    description: string
    url: string
    ogImage: string
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
