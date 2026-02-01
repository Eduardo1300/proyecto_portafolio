/**
 * SEO Configuration
 * Centraliza la configuración de SEO para todo el sitio
 */

export const siteConfig = {
  title: 'Christopher Valdivia - Desarrollo Web Profesional',
  description: 'Desarrollo de sitios web modernos, rápidos y optimizados para hacer crecer tu negocio. Sin complicaciones técnicas, con resultados reales.',
  keywords: 'desarrollo web, diseño web, sitios web profesionales, e-commerce, SEO, landing pages, optimización',
  author: 'Christopher Valdivia',
  site: 'https://tusitio.com',
  logo: '/logo.png',
  image: '/og-image.jpg',
  language: 'es',
  locale: 'es_ES',
};

export const socialLinks = {
twitter: 'https://twitter.com/christopher_dev',
  linkedin: 'https://linkedin.com/in/christophervaldivia',
  github: 'https://github.com/christophervaldivia',
};

// Esquema JSON-LD para Organization
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.title,
  url: siteConfig.site,
  logo: `${siteConfig.site}${siteConfig.logo}`,
  description: siteConfig.description,
  sameAs: [socialLinks.twitter, socialLinks.linkedin, socialLinks.github],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contacto@christophervaldivia.tech',
  },
};

// Esquema JSON-LD para LocalBusiness (si aplica)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.site,
  image: `${siteConfig.site}${siteConfig.image}`,
  // Agrega la dirección y teléfono si es relevante
};

// Configuración de Open Graph
export const ogConfig = {
  type: 'website',
  locale: siteConfig.locale,
  site_name: siteConfig.title,
};
