// Configuración de internacionalización (i18n)

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLanguage = 'es';

export const i18n = {
  es: {
    // Navigation
    nav: {
      servicios: 'Servicios',
      proceso: 'Proceso',
      beneficios: 'Beneficios',
      tecnologias: 'Tecnologías',
      faq: 'FAQ',
      contacto: 'Contactar',
    },
    // Hero
    hero: {
      badge: 'Desarrollo web profesional',
      title: 'Transformo tu idea en una experiencia digital que conecta',
      description: 'Desarrollo sitios web modernos, rápidos y optimizados para hacer crecer tu negocio. Sin complicaciones técnicas, con resultados reales.',
      cta: 'Empezar proyecto',
      secondary: 'Ver servicios',
      companies: 'Confianza de empresas como',
    },
    // Services
    services: {
      label: 'Servicios',
      title: 'Todo lo que necesitas para estar online',
      description: 'Soluciones completas adaptadas a las necesidades de tu negocio, sin tecnicismos y con resultados medibles.',
    },
    // Process
    process: {
      label: 'Proceso',
      title: 'Simple, transparente, sin sorpresas',
      description: 'Un proceso claro donde siempre sabrás en qué punto estamos y qué viene después.',
    },
    // Contact
    contact: {
      title: '¿Listo para dar el siguiente paso?',
      description: 'Cuéntame sobre tu proyecto. Sin compromiso, sin presión. Solo una conversación para ver cómo puedo ayudarte.',
      cta: 'Agendar llamada gratis',
      email: 'hola@devstudio.com',
      trust: 'Respondo en menos de 24 horas · Sin spam · 100% confidencial',
    },
    // Footer
    footer: {
      copyright: '© 2026 DevStudio. Todos los derechos reservados.',
      language: 'Idioma',
    },
  },
  en: {
    // Navigation
    nav: {
      servicios: 'Services',
      proceso: 'Process',
      beneficios: 'Benefits',
      tecnologias: 'Technologies',
      faq: 'FAQ',
      contacto: 'Contact',
    },
    // Hero
    hero: {
      badge: 'Professional web development',
      title: 'I transform your idea into a digital experience that connects',
      description: 'I develop modern, fast and optimized websites to grow your business. No technical complications, with real results.',
      cta: 'Start project',
      secondary: 'View services',
      companies: 'Trusted by companies like',
    },
    // Services
    services: {
      label: 'Services',
      title: 'Everything you need to be online',
      description: 'Complete solutions adapted to your business needs, no jargon and with measurable results.',
    },
    // Process
    process: {
      label: 'Process',
      title: 'Simple, transparent, no surprises',
      description: 'A clear process where you\'ll always know where we are and what comes next.',
    },
    // Contact
    contact: {
      title: 'Ready for the next step?',
      description: 'Tell me about your project. No commitment, no pressure. Just a conversation to see how I can help you.',
      cta: 'Schedule free call',
      email: 'hola@devstudio.com',
      trust: 'I respond in less than 24 hours · No spam · 100% confidential',
    },
    // Footer
    footer: {
      copyright: '© 2026 DevStudio. All rights reserved.',
      language: 'Language',
    },
  },
};

export function getTranslation(lang: string, key: string): string {
  const keys = key.split('.');
  let value: any = i18n[lang as keyof typeof i18n] || i18n[defaultLanguage];
  
  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }
  
  return value;
}
