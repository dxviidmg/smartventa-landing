const BASE = 'https://smartventa-pos.vercel.app';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
