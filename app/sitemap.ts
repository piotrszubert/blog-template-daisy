import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site' 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.site.url,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: siteConfig.site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: siteConfig.site.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}