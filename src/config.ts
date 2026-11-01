// Single place for company facts. Update here and every page picks it up.

export const SITE = {
  name: 'KaizenAI',
  domain: 'kaizenai.systems',
  url: 'https://kaizenai.systems',
  tagline: 'Better every day, with Microsoft and AI.',
  description:
    'KaizenAI is a Microsoft-ecosystem IT services and product company from Lahore, Pakistan. We work on Dynamics 365 CRM, the Power Platform, Copilot and Cowork, agentic AI, and cloud infrastructure and DevSecOps, and we build Kaizen PPM.',
  founder: 'Abdul Basit',
  location: 'Lahore, Punjab, Pakistan',
  email: 'mrabdulbasit@gmail.com',
  phones: [
    { display: '+92 311 4095179', tel: '+923114095179' },
    { display: '+92 340 4949027', tel: '+923404949027' },
  ],
  // WhatsApp number (digits only, international format). Set to '' to hide.
  whatsapp: '923114095179',
  // Contact form endpoint. Create a free form at https://formspree.io (or similar)
  // and paste its endpoint, e.g. 'https://formspree.io/f/abcdwxyz'.
  // While empty, the form opens the visitor's email app with the message pre-filled.
  formEndpoint: '',
  social: {
    linkedin: '',
    github: 'https://github.com/powerdynamite',
  },
};

export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/products/kaizen-ppm/', label: 'Kaizen PPM' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
];
