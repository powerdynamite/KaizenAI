// Single place for company facts. Update here and every page picks it up.

export const SITE = {
  name: 'KaizenAI',
  domain: 'kaizenai.systems',
  url: 'https://kaizenai.systems',
  tagline: 'Better every day, with Microsoft and AI.',
  description:
    'KaizenAI is a remote-first, AI-first Microsoft consultancy working worldwide: AI agents, Copilot & Cowork, Dynamics 365, Power Platform and Kaizen PPM.',
  founder: 'Abdul Basit',
  // Home base: shown only on detail pages (About, Contact) and in structured data.
  location: 'Lahore, Punjab, Pakistan',
  workMode: 'Remote-first, working with clients worldwide',
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
    linkedin: 'https://www.linkedin.com/company/145394554/',
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
  { href: '/starter-kits/', label: 'Starter kits' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
];
