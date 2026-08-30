import { useEffect } from 'react';
import { CONFIG } from '../../constants';

const upsertTag = (selector, attrs) => {
  let el = document.querySelector(selector);
  if (!el) {
    const tag = selector.startsWith('link') ? 'link' : 'meta';
    el = document.createElement(tag);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
};

const SEO = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    const t = title ? `${title} - ${CONFIG.company.name}` : CONFIG.company.name;
    const d = description || 'El punto de venta inteligente para negocios multi-tienda.';
    const k = keywords || 'punto de venta, pos, multi-tienda, inventario, ventas, retail, smartventa';
    const img = image || `${window.location.origin}/og-image.jpg`;
    const u = url || window.location.href;

    document.title = t;

    upsertTag('meta[name="description"]', { name: 'description', content: d });
    upsertTag('meta[name="keywords"]', { name: 'keywords', content: k });

    upsertTag('meta[property="og:title"]', { property: 'og:title', content: t });
    upsertTag('meta[property="og:description"]', { property: 'og:description', content: d });
    upsertTag('meta[property="og:image"]', { property: 'og:image', content: img });
    upsertTag('meta[property="og:url"]', { property: 'og:url', content: u });
    upsertTag('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertTag('meta[property="og:site_name"]', { property: 'og:site_name', content: CONFIG.company.name });

    upsertTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertTag('meta[name="twitter:title"]', { name: 'twitter:title', content: t });
    upsertTag('meta[name="twitter:description"]', { name: 'twitter:description', content: d });
    upsertTag('meta[name="twitter:image"]', { name: 'twitter:image', content: img });

    upsertTag('link[rel="canonical"]', { rel: 'canonical', href: u });
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
