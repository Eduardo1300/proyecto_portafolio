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
      badge: 'Professional web development',
      title: 'I transform your idea into an experience digital that connects',
      description: 'I develop modern, fast and optimized websites to grow your business. No technical complications, with real results.',
      cta: 'Start project',
      secondary: 'Christopher Valdivia',
      companies: 'Trusted by companies like',
    },
    // Services
    services: {
      label: 'Servicios',
      title: 'Todo lo que necesitas para estar online',
      description: 'Soluciones completas adaptadas a las necesidades de tu negocio, sin tecnicismos y con resultados medibles.',
      items: [
        {
          title: 'Sitios Web',
          description: 'Páginas corporativas, portafolios y landing pages que convierten visitantes en clientes.',
        },
        {
          title: 'Tiendas Online',
          description: 'E-commerce completos con pasarela de pagos, inventario y gestión de pedidos.',
        },
        {
          title: 'Diseño Responsive',
          description: 'Tu sitio se verá perfecto en cualquier dispositivo, desde móvil hasta desktop.',
        },
        {
          title: 'Optimización',
          description: 'Sitios rápidos que cargan en segundos y ofrecen la mejor experiencia al usuario.',
        },
        {
          title: 'SEO Básico',
          description: 'Estructura optimizada para que Google encuentre y posicione tu sitio web.',
        },
        {
          title: 'Analytics',
          description: 'Integración con herramientas para medir el rendimiento de tu sitio.',
        },
      ],
    },
    // Process
    process: {
      label: 'Proceso',
      title: 'Simple, transparente, sin sorpresas',
      description: 'Un proceso claro donde siempre sabrás en qué punto estamos y qué viene después.',
      steps: [
        {
          number: '01',
          title: 'Conversación inicial',
          description: 'Entendemos tu negocio, objetivos y lo que necesitas. Sin compromiso, solo una charla para conocernos.',
        },
        {
          number: '02',
          title: 'Propuesta y diseño',
          description: 'Creamos una propuesta clara con bocetos del diseño. Tú apruebas cada paso antes de continuar.',
        },
        {
          number: '03',
          title: 'Desarrollo',
          description: 'Construimos tu sitio con las mejores tecnologías. Tienes acceso a una vista previa en todo momento.',
        },
        {
          number: '04',
          title: 'Lanzamiento',
          description: 'Publicamos tu sitio y te enseñamos a usarlo. Soporte incluido para que nunca te quedes solo.',
        },
      ],
    },
    // Benefits
    benefits: {
      label: '¿Por qué trabajar conmigo?',
      title: 'Más que un desarrollador, soy un aliado',
      description: 'Entiendo que tu tiempo es valioso y que necesitas resultados, no excusas.',
      stats: [
        { value: 'Proyectos', label: 'Personales' },
        { value: '100%', label: 'Compromiso' },
        { value: 'Ilimitadas', label: 'Revisiones' },
      ],
      items: [
        {
          icon: '✅',
          title: 'Entrega puntual',
          description: 'Fechas claras desde el inicio. Si no cumplo, te devuelvo parte del dinero.',
        },
        {
          icon: '📝',
          title: 'Código tuyo',
          description: 'Todo el código fuente es de tu propiedad. Sin dependencias ni ataduras.',
        },
        {
          icon: '💬',
          title: 'Comunicación clara',
          description: 'Sin tecnicismos. Te explico todo en un lenguaje que entiendas.',
        },
        {
          icon: '🤝',
          title: 'Soporte incluido',
          description: '30 días de soporte gratuito después del lanzamiento.',
        },
        {
          icon: '📊',
          title: 'Resultados medibles',
          description: 'Herramientas para que veas el impacto real en tu negocio.',
        },
        {
          icon: '✨',
          title: 'Garantía de satisfacción',
          description: 'No pagas hasta que estés 100% satisfecho con el resultado.',
        },
      ],
    },
    // Technologies
    technologies: {
      label: 'Tecnologías',
      title: 'Las mejores herramientas del mercado',
      description: 'Uso tecnologías modernas que garantizan velocidad, seguridad y facilidad de mantenimiento a largo plazo.',
      disclaimer: 'No te preocupes por los nombres técnicos. Lo importante es que tu sitio será rápido, seguro y fácil de actualizar.',
      items: [
        { icon: 'R', name: 'React', description: 'Interfaces modernas' },
        { icon: 'N', name: 'Next.js', description: 'Aplicaciones rápidas' },
        { icon: 'T', name: 'Tailwind', description: 'Diseño elegante' },
        { icon: 'T', name: 'TypeScript', description: 'Código robusto' },
        { icon: 'N', name: 'Node.js', description: 'Backend potente' },
        { icon: 'P', name: 'PostgreSQL', description: 'Base de datos' },
      ],
    },
    // FAQ
    faq: {
      label: 'Preguntas frecuentes',
      title: 'Resolvemos tus dudas',
      description: 'Respuestas a las preguntas más comunes sobre el proceso, presupuestos, tecnología y soporte.',
      items: [
        {
          question: '¿Cuánto cuesta desarrollar un sitio web?',
          answer: 'Los precios varían según la complejidad. Una landing page comienza desde $300 USD, sitios corporativos desde $900 USD. Hacemos un presupuesto claro después de entender tus necesidades. Sin sorpresas.',
        },
        {
          question: '¿Cuánto tiempo toma desarrollar un sitio?',
          answer: 'Tiempos claros desde el inicio: Landing pages en 1-2 semanas, sitios corporativos en 4-6 semanas, proyectos complejos dependen de las funcionalidades. Siempre mantengo fechas o devuelvo parte del dinero.',
        },
        {
          question: '¿Necesito conocimientos técnicos para actualizar mi sitio?',
          answer: 'No. Configuro todo para que sea fácil. Si necesitas ayuda, durante 30 días después del lanzamiento es gratis. Después, tenemos planes de soporte mensual muy accesibles.',
        },
        {
          question: '¿Qué pasa si no me gusta el diseño?',
          answer: 'No pagas hasta estar 100% satisfecho. Durante el desarrollo tienes acceso a todas las versiones. Cualquier cambio lo hacemos sin problema.',
        },
        {
          question: '¿El sitio será visible en Google?',
          answer: 'Sí. Todos mis proyectos incluyen SEO básico: estructura optimizada, meta etiquetas, velocidad de carga, etc. Esto ayuda a que Google encuentre tu sitio y lo posicione en los primeros resultados.',
        },
        {
          question: '¿Qué incluye el soporte post-lanzamiento?',
          answer: '30 días gratis después del lanzamiento para: actualizaciones urgentes, correcciones, preguntas técnicas. Luego, planes mensuales desde $50 USD que incluyen mantenimiento, backups y soporte continuo.',
        },
      ],
    },
// Contact
    contact: {
      title: '¿Listo para dar el siguiente paso?',
      description: 'Cuéntame sobre tu proyecto. Sin compromiso, sin presión. Solo una conversación para ver cómo puedo ayudarte.',
      cta: 'Agendar',
      email: 'eduardovaldivia1300@gmail.com',
      trust: 'Respondo en menos de 24 horas · Sin spam · 100% confidencial',
      form: {
        name: 'Nombre',
        placeholderName: 'Tu nombre',
        email: 'Correo electrónico',
        placeholderEmail: 'Tu correo electrónico',
        message: 'Mensaje',
        placeholderMessage: '¿En qué te puedo ayudar?',
        submit: 'Enviar mensaje'
      },
    },
    // Footer
    footer: {
      copyright: '© 2026 Christopher Valdivia. Todos los derechos reservados.',
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
      secondary: 'Christopher Valdivia',
      companies: 'Trusted by companies like',
    },
    // Services
    services: {
      label: 'Services',
      title: 'Everything you need to be online',
      description: 'Complete solutions adapted to your business needs, no jargon and with measurable results.',
      items: [
        {
          title: 'Websites',
          description: 'Corporate pages, portfolios and landing pages that convert visitors into customers.',
        },
        {
          title: 'Online Stores',
          description: 'Complete e-commerce with payment gateway, inventory and order management.',
        },
        {
          title: 'Responsive Design',
          description: 'Your site will look perfect on any device, from mobile to desktop.',
        },
        {
          title: 'Optimization',
          description: 'Fast sites that load in seconds and offer the best user experience.',
        },
        {
          title: 'Basic SEO',
          description: 'Optimized structure so Google finds and ranks your website.',
        },
        {
          title: 'Analytics',
          description: 'Integration with tools to measure your site\'s performance.',
        },
      ],
    },
    // Process
    process: {
      label: 'Process',
      title: 'Simple, transparent, no surprises',
      description: 'A clear process where you\'ll always know where we are and what comes next.',
      steps: [
        {
          number: '01',
          title: 'Initial conversation',
          description: 'We understand your business, goals and what you need. No commitment, just a chat to get to know each other.',
        },
        {
          number: '02',
          title: 'Proposal and design',
          description: 'We create a clear proposal with design sketches. You approve each step before we continue.',
        },
        {
          number: '03',
          title: 'Development',
          description: 'We build your site with the best technologies. You have access to a preview at all times.',
        },
        {
          number: '04',
          title: 'Launch',
          description: 'We publish your site and teach you how to use it. Support included so you\'re never alone.',
        },
      ],
    },
    // Benefits
    benefits: {
      label: 'Why work with me?',
      title: 'More than a developer, I\'m an ally',
      description: 'I understand that your time is valuable and that you need results, not excuses.',
      stats: [
        { value: 'Personal', label: 'Projects' },
        { value: '100%', label: 'Commitment' },
        { value: 'Unlimited', label: 'Revisions' },
      ],
      items: [
        {
          icon: '✅',
          title: 'On-time delivery',
          description: 'Clear dates from the start. If I don\'t deliver, I refund part of the money.',
        },
        {
          icon: '📝',
          title: 'Your code',
          description: 'All source code is your property. No dependencies or attachments.',
        },
        {
          icon: '💬',
          title: 'Clear communication',
          description: 'No jargon. I explain everything in a language you understand.',
        },
        {
          icon: '🤝',
          title: 'Support included',
          description: '30 days of free support after launch.',
        },
        {
          icon: '📊',
          title: 'Measurable results',
          description: 'Tools for you to see the real impact on your business.',
        },
        {
          icon: '✨',
          title: 'Satisfaction guarantee',
          description: 'You don\'t pay until you\'re 100% satisfied with the result.',
        },
      ],
    },
    // Technologies
    technologies: {
      label: 'Technologies',
      title: 'The best tools on the market',
      description: 'I use modern technologies that guarantee speed, security and ease of maintenance in the long term.',
      disclaimer: 'Don\'t worry about technical names. What matters is that your site will be fast, secure and easy to update.',
      items: [
        { icon: 'R', name: 'React', description: 'Modern interfaces' },
        { icon: 'N', name: 'Next.js', description: 'Fast applications' },
        { icon: 'T', name: 'Tailwind', description: 'Elegant design' },
        { icon: 'T', name: 'TypeScript', description: 'Robust code' },
        { icon: 'N', name: 'Node.js', description: 'Powerful backend' },
        { icon: 'P', name: 'PostgreSQL', description: 'Database' },
      ],
    },
    // FAQ
    faq: {
      label: 'Frequently asked questions',
      title: 'We resolve your doubts',
      description: 'Answers to the most common questions about the process, budgets, technology and support.',
      items: [
        {
          question: 'How much does it cost to develop a website?',
          answer: 'Prices vary depending on complexity. A landing page starts at $300 USD, corporate sites from $900 USD. We provide a clear budget after understanding your needs. No surprises.',
        },
        {
          question: 'How long does it take to develop a website?',
          answer: 'Clear timelines from the start: Landing pages in 1-2 weeks, corporate sites in 4-6 weeks, complex projects depend on functionality. I always meet deadlines or refund part of the money.',
        },
        {
          question: 'Do I need technical knowledge to update my site?',
          answer: 'No. I set everything up to be easy. If you need help, for 30 days after launch it\'s free. After that, we have very affordable monthly support plans.',
        },
        {
          question: 'What if I don\'t like the design?',
          answer: 'You don\'t pay until you\'re 100% satisfied. During development you have access to all versions. Any changes we make without problem.',
        },
        {
          question: 'Will the site be visible on Google?',
          answer: 'Yes. All my projects include basic SEO: optimized structure, meta tags, load speed, etc. This helps Google find your site and rank it in the top results.',
        },
        {
          question: 'What does post-launch support include?',
          answer: '30 days free after launch for: urgent updates, corrections, technical questions. Later, monthly plans from $50 USD including maintenance, backups and continuous support.',
        },
      ],
    },
// Contact
    contact: {
      title: 'Ready for the next step?',
      description: 'Tell me about your project. No commitment, no pressure. Just a conversation to see how I can help you.',
      cta: 'Schedule',
      email: 'eduardovaldivia1300@gmail.com',
      trust: 'I respond in less than 24 hours · No spam · 100% confidential',
      form: {
        name: 'Name',
        placeholderName: 'Your name',
        email: 'Email',
        placeholderEmail: 'Your email',
        message: 'Message',
        placeholderMessage: 'How can I help you?',
        submit: 'Send message'
      },
    },
    // Footer
    footer: {
      copyright: '© 2026 Christopher Valdivia. All rights reserved.',
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
