// Single place for company facts. Update here and every page picks it up.

export const SITE = {
  name: 'KaizenAI',
  domain: 'kaizenai.systems',
  url: 'https://kaizenai.systems',
  tagline: 'Better every day, with Microsoft and AI.',
  description:
    'KaizenAI is an AI-first Microsoft consultancy in Lahore: AI agents, Copilot & Cowork, Dynamics 365, Power Platform, Azure DevSecOps and Kaizen PPM.',
  founder: 'Abdul Basit',
  location: 'Lahore, Punjab, Pakistan',
  email: 'mrabdulbasit1999@gmail.com',
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
  // Company profiles (Organization sameAs). Add the KaizenAI LinkedIn page once it exists.
  social: {
    linkedin: '',
    github: 'https://github.com/powerdynamite',
  },
  // Founder's public profiles (Person sameAs): they let search engines and AI
  // systems connect the founder entity across the web.
  founderProfiles: {
    website: 'https://powerdynamite.github.io/',
    linkedin: 'https://www.linkedin.com/in/mrabdulbasit1999/',
    github: 'https://github.com/powerdynamite',
    youtube: 'https://www.youtube.com/@powerdynamite365',
    medium: 'https://medium.com/@powerdynamite',
  },
};

export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/products/kaizen-ppm/', label: 'Kaizen PPM' },
  { href: '/open-source/', label: 'Open source' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
];
