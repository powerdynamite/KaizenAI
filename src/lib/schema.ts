// Schema.org JSON-LD builders. Every page links back to the same @id nodes,
// so search engines and AI systems resolve a single, consistent entity graph.
import { SITE } from '../config';
import type { Faq, Service } from '../data/services';
import { services } from '../data/services';

export const ORG_ID = `${SITE.url}/#organization`;
export const SITE_ID = `${SITE.url}/#website`;
export const FOUNDER_ID = `${SITE.url}/about/#founder`;
export const PPM_ID = `${SITE.url}/products/kaizen-ppm/#software`;

const abs = (path: string) => new URL(path, SITE.url).toString();
const sameAs = Object.values(SITE.social).filter(Boolean);

export const organization = () => ({
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: SITE.name,
  alternateName: 'Kaizen AI',
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: abs('/logo.png'), width: 512, height: 512 },
  image: abs('/og-image.png'),
  description: SITE.description,
  slogan: SITE.tagline,
  email: SITE.email,
  telephone: SITE.phones[0].tel,
  founder: { '@id': FOUNDER_ID },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Agentic AI', 'AI agents', 'Model Context Protocol', 'Retrieval-augmented generation',
    'Microsoft 365 Copilot', 'Copilot Studio', 'Copilot Cowork',
    'Microsoft Dynamics 365', 'Dynamics 365 Sales', 'Dynamics 365 Customer Service', 'Dynamics 365 Field Service',
    'Microsoft Power Platform', 'Power Apps', 'Power Automate', 'Power Pages', 'Power BI', 'Microsoft Dataverse',
    'Microsoft Azure', 'Microsoft Entra ID', 'DevSecOps', 'Infrastructure as code',
    'Project portfolio management', 'Microsoft Project Online migration',
  ],
  contactPoint: [{
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: SITE.email,
    telephone: SITE.phones[0].tel,
    areaServed: 'Worldwide',
    availableLanguage: ['English'],
  }],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'KaizenAI services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@id': `${abs(`/services/${s.slug}/`)}#service` },
    })),
  },
  makesOffer: { '@type': 'Offer', itemOffered: { '@id': PPM_ID } },
  ...(sameAs.length ? { sameAs } : {}),
});

export const website = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
});

export const founder = () => ({
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: SITE.founder,
  jobTitle: 'Founder & Principal Consultant',
  worksFor: { '@id': ORG_ID },
  url: abs('/about/'),
  knowsAbout: ['Microsoft Dynamics 365', 'Microsoft Power Platform', 'Microsoft Dataverse', 'Copilot Studio', 'Agentic AI', 'Azure OpenAI', 'Project portfolio management'],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'COMSATS University Islamabad' },
  sameAs: Object.values(SITE.founderProfiles),
});

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const faqPage = (faqs: Faq[], path: string) => ({
  '@type': 'FAQPage',
  '@id': `${abs(path)}#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceNode = (s: Service) => ({
  '@type': 'Service',
  '@id': `${abs(`/services/${s.slug}/`)}#service`,
  name: s.title,
  serviceType: s.serviceType,
  description: s.summary,
  url: abs(`/services/${s.slug}/`),
  provider: { '@id': ORG_ID },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${s.title} offerings`,
    itemListElement: s.offerings.map((o) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: o.title, description: o.body },
    })),
  },
});

export const ppmSoftware = (description: string, screenshots: string[]) => ({
  '@type': 'SoftwareApplication',
  '@id': PPM_ID,
  name: 'Kaizen PPM',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Project portfolio management',
  operatingSystem: 'Microsoft Power Platform (Dataverse), web browser',
  description,
  url: abs('/products/kaizen-ppm/'),
  publisher: { '@id': ORG_ID },
  creator: { '@id': ORG_ID },
  screenshot: screenshots.map(abs),
  featureList: [
    'Portfolio and program management', 'Demand and idea intake', 'Interactive Gantt chart with dependencies and baselines',
    'Kanban board', 'Budget, forecast and actuals', 'Resource management and timesheets', 'Risk matrix and issue tracking',
    'Governance registers', 'RAG status reporting', 'Migration from Microsoft Project Online and Planner',
  ],
});

/** Wrap nodes in a single @graph document, always including Organization and WebSite. */
export const graph = (...nodes: object[]) => ({
  '@context': 'https://schema.org',
  '@graph': [organization(), website(), ...nodes],
});
