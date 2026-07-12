// app/sitemap.ts
import type { MetadataRoute } from 'next';

const SITE = 'https://qqtxt.me';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/faq`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/privacy`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE}/contacts`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
