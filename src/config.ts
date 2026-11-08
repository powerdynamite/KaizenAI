// Single place for company facts. Update here and every page picks it up.

export const SITE = {
  name: 'KaizenAI',
  domain: 'kaizenai.systems',
  url: 'https://kaizenai.systems',
  tagline: 'Better every day, with Microsoft and AI.',
  description:
    'KaizenAI is a remote-first, AI-first Microsoft consultancy working worldwide: AI agents, Copilot & Cowork, Dynamics 365, Power Platform, Power BI & Fabric analytics and Kaizen PPM.',
  founder: 'Abdul Basit',
  // Home base: shown only on detail pages (About, Contact) and in structured data.
  location: 'Lahore, Punjab, Pakistan',
  workMode: 'Remote-first, working with clients worldwide',
  email: 'writeus@kaizenai.systems',
  // Topic inboxes (aliases of the same Microsoft 365 mailbox). Set one to '' to hide it.
  emails: {
    sales: 'sales@kaizenai.systems',
    support: 'support@kaizenai.systems',
    careers: 'careers@kaizenai.systems',
    privacy: 'privacy@kaizenai.systems',
  },
  phones: [
    { display: '+92 311 4095179', tel: '+923114095179' },
    { display: '+92 340 4949027', tel: '+923404949027' },
  ],
  // WhatsApp number (digits only, international format). Set to '' to hide.
  whatsapp: '923114095179',
  // HubSpot (free CRM). Contact-form submissions go straight to this HubSpot form,
  // so every enquiry becomes a HubSpot contact and HubSpot emails you a notification.
  // It uses HubSpot's form submission API only: no HubSpot tracking script and no
  // cookies on the site. formId is the form's ID (Marketing → Forms → the form → its URL).
  // While formId is empty, the form opens the visitor's email app with the message pre-filled.
  hubspot: { portalId: '247880968', formId: 'c6de117d-8d27-4998-ba80-9a34f4e372f6' },
  // HubSpot Meetings link (Sales → Meetings → your link → Copy link), e.g.
  // 'https://meetings-na2.hubspot.com/your-name'. When set, every "Book a free
  // consultation" button opens it in a pop-up and the contact page shows a booking
  // tile. While empty, those buttons go to the contact form.
  bookingUrl: '',
  // Cloudflare Web Analytics token (free, no cookies, no consent banner needed).
  // Create a site at https://dash.cloudflare.com → Analytics & Logs → Web Analytics.
  cloudflareAnalyticsToken: '',
  // Company profiles (Organization sameAs).
  social: {
    linkedin: 'https://www.linkedin.com/company/kaizenai-systems/',
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
  { href: '/packages/', label: 'Packages' },
  { href: '/products/kaizen-ppm/', label: 'Kaizen PPM' },
  { href: '/experience/', label: 'Our work' },
  { href: '/about/', label: 'About' },
];
