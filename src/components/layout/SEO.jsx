import { useEffect } from 'react';
import { CONFIG } from '../../constants';

const SEO = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    const siteTitle = title ? `${title} - ${CONFIG.company.name}` : CONFIG.company.name;
    const siteDescription = description || 'El punto de venta inteligente para negocios multi-tienda.';
    const siteKeywords = keywords || 'punto de venta, pos, multi-tienda, inventario, ventas, retail, smartventa';
    const siteImage = image || `${window.location.origin}/og-image.jpg`;
    const siteUrl = url || window.location.href;

    document.title = siteTitle;

    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('description', siteDescription);
    updateMeta('keywords', siteKeywords);

    const updateOG = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOG('og:title', siteTitle);
    updateOG('og:description', siteDescription);
    updateOG('og:image', siteImage);
    updateOG('og:url', siteUrl);
    updateOG('og:type', 'website');
    updateOG('og:site_name', CONFIG.company.name);

    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', siteTitle);
    updateMeta('twitter:description', siteDescription);
    updateMeta('twitter:image', siteImage);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', siteUrl);
  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
