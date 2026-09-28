const BASE = 'https://smartventa-pos.vercel.app';

export default function sitemap() {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
