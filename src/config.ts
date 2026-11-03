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
  phones: [
    { display: '+92 311 4095179', tel: '+923114095179' },
    { display: '+92 340 4949027', tel: '+923404949027' },
  ],
  // WhatsApp number (digits only, international format). Set to '' to hide.
  whatsapp: '923114095179',
  // Contact form endpoint. Create a free form at https://formspree.io (or similar)
  // and paste its endpoint, e.g. 'https://formspree.io/f/abcdwxyz'.
  // While empty, the form opens the visitor's email app with the message pre-filled.
  formEndpoint: 'https://formspree.io/f/xdeeynkk',
  // HubSpot (free CRM). Each contact-form submission is also sent to this HubSpot
  // form, so the visitor becomes a contact in HubSpot. It uses HubSpot's form
  // submission API only: no HubSpot tracking script and no cookies on the site.
  // formId is the form's ID from HubSpot (Marketing → Forms → the form → its URL).
  // While formId is empty, nothing is sent to HubSpot.
  hubspot: { portalId: '247880968', formId: '' },
  // Online booking page (Cal.com, Calendly, HubSpot Meetings, Google Calendar
  // appointment schedule…). When set, "Book a free consultation" opens it and the
  // contact page embeds it. While empty, those buttons go to the contact form.
  bookingUrl: 'https://calendly.com/mrabdulbasit1999/new-meeting',
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
  { href: '/products/kaizen-ppm/', label: 'Kaizen PPM' },
  { href: '/experience/', label: 'Our work' },
  { href: '/about/', label: 'About' },
];
