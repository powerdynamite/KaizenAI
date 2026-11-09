// Fixed-price packages shown on /packages/. Prices are in USD and exclude
// Microsoft licences and tax. Update prices here only: the page, its Markdown
// version and the structured data all read from this file.

export type PackageGroup = 'entry' | 'project' | 'monthly';

export interface Package {
  id: string;
  name: string;
  group: PackageGroup;
  /** Price in USD. For projects this is a "from" price; for monthly plans it is per month. */
  price: number;
  /** Shows "From" before the price. */
  from?: boolean;
  duration: string;
  summary: string;
  includes: string[];
  /** Service page this package belongs to (slug under /services/), or a full path. */
  service?: string;
  /** Contact-form topic to pre-select when there is no booking link. */
  topic: string;
}

export const packageGroups: { id: PackageGroup; label: string; title: string; intro: string }[] = [
  {
    id: 'entry',
    label: 'Start here',
    title: 'Entry packages',
    intro: 'Small, clearly scoped first steps. Each one ends with findings you can act on and, if you want it, a fixed-price quote for the next stage.',
  },
  {
    id: 'project',
    label: 'Build',
    title: 'Projects',
    intro: 'Fixed-scope delivery. Prices are typical starting points. After a short call we confirm the scope and a fixed price before any work starts.',
  },
  {
    id: 'monthly',
    label: 'Run',
    title: 'Monthly plans',
    intro: 'Managed support after go-live for anything we deploy, Kaizen PPM included: fixes, updates, admin help and small changes. Bigger changes are planned with you and quoted at a fixed price. Month to month: cancel with 30 days’ notice.',
  },
];

export const packages: Package[] = [
  // Entry
  {
    id: 'architecture-session',
    name: 'Architecture & Roadmap Session',
    group: 'entry',
    price: 750,
    duration: '1 week',
    summary: 'A working session on your idea or current setup, followed by a written plan.',
    includes: [
      '2-hour working session on Microsoft Teams',
      'Review of your concept, processes or current Microsoft 365 setup',
      'Written summary: recommended architecture, risks and a phased roadmap',
      'Fee credited against any project booked within 60 days',
    ],
    topic: 'Something else',
  },
  {
    id: 'copilot-readiness',
    name: 'Copilot Readiness Assessment',
    group: 'entry',
    price: 2950,
    duration: '2 weeks',
    summary: 'Find and fix what Copilot could expose before you roll it out.',
    includes: [
      'Oversharing review across SharePoint, OneDrive and Teams',
      'Sensitivity label and data loss prevention check',
      'Licence fit and prioritised fix list',
      'Pilot plan: who, which use cases, how to measure success',
    ],
    service: 'copilot-cowork',
    topic: 'Copilot & Cowork',
  },
  {
    id: 'd365-health-check',
    name: 'Dynamics 365 Health Check',
    group: 'entry',
    price: 2350,
    duration: '2 weeks',
    summary: 'An honest audit of an existing Dynamics 365 org, with a fix list you can act on.',
    includes: [
      'Performance, security roles and customisation review',
      'Data quality and adoption check',
      'Technical debt assessment',
      'Prioritised fix list with effort estimates',
    ],
    service: 'dynamics-365',
    topic: 'Dynamics 365 CRM',
  },
  {
    id: 'power-platform-governance-assessment',
    name: 'Power Platform Governance Assessment',
    group: 'entry',
    price: 3800,
    duration: '2–3 weeks',
    summary: 'Know what is running in your tenant and what it costs and risks.',
    includes: [
      'Inventory of apps, flows, agents and environments',
      'DLP policy and environment strategy review',
      'ALM and Centre of Excellence recommendations',
      'Risk and cost report with next steps',
    ],
    service: 'power-platform',
    topic: 'Power Platform',
  },
  {
    id: 'd365-sales-quick-start',
    name: 'Dynamics 365 Sales Quick Start',
    group: 'entry',
    price: 3800,
    duration: '2 weeks',
    summary: 'A working Dynamics 365 Sales system, set up around your sales process.',
    includes: [
      'New Dynamics 365 Sales environment and licence assignment',
      'Lead-to-opportunity process with up to 8 stages',
      'Sales dashboard and data import (up to 2 files)',
      'Two training sessions',
    ],
    service: 'dynamics-365',
    topic: 'Dynamics 365 CRM',
  },
  // Projects
  {
    id: 'copilot-rollout',
    name: 'Copilot Rollout',
    group: 'project',
    price: 8650,
    from: true,
    duration: '4–6 weeks',
    summary: 'Roll Copilot out safely and get people using it.',
    includes: ['Readiness fixes implemented', 'Sensitivity labels and pilot group', 'Adoption plan and two training sessions', 'One Copilot Studio agent'],
    service: 'copilot-cowork',
    topic: 'Copilot & Cowork',
  },
  {
    id: 'ai-agent-pilot',
    name: 'AI Agent Pilot',
    group: 'project',
    price: 7100,
    from: true,
    duration: '3–6 weeks',
    summary: 'One production agent for one process, with a person approving what matters.',
    includes: ['Process discovery and success measures', 'Agent built on your data and systems', 'Guardrails, approval steps and monitoring', 'Handover and documentation'],
    service: 'ai-agents',
    topic: 'Agentic AI',
  },
  {
    id: 'd365-implementation',
    name: 'Dynamics 365 Sales or Customer Service Implementation',
    group: 'project',
    price: 14200,
    from: true,
    duration: '6–10 weeks',
    summary: 'Dynamics 365 configured around the way your team works.',
    includes: ['Process design and configuration', 'Up to 3 integrations or data migrations', 'Security model and Power BI dashboards', 'Training and 30 days of hypercare'],
    service: 'dynamics-365',
    topic: 'Dynamics 365 CRM',
  },
  {
    id: 'power-apps-build',
    name: 'Power Apps Build',
    group: 'project',
    price: 7100,
    from: true,
    duration: '3–6 weeks',
    summary: 'One business app on a properly designed Dataverse schema.',
    includes: ['Model-driven or canvas app', 'Dataverse data model and security', 'Up to 5 Power Automate flows', 'Deployment through pipelines'],
    service: 'power-platform',
    topic: 'Power Platform',
  },
  {
    id: 'power-pages-portal',
    name: 'Power Pages Portal',
    group: 'project',
    price: 8650,
    from: true,
    duration: '4–8 weeks',
    summary: 'A secure external portal for customers, partners or suppliers.',
    includes: ['Sign-in and web roles', 'Table permissions on Dataverse or Dynamics 365', 'Forms, lists and branding', 'Security review before go-live'],
    service: 'power-platform',
    topic: 'Power Platform',
  },
  {
    id: 'systems-integration',
    name: 'Systems Integration',
    group: 'project',
    price: 6300,
    from: true,
    duration: '3–6 weeks',
    summary: 'Connect two systems so data flows without re-keying.',
    includes: ['One integration, e.g. CRM ↔ phone system or CRM ↔ ERP', 'Field and ID mapping to prevent duplicates', 'Retries, health checks and alerting', 'Runbook and handover'],
    service: 'systems-integration',
    topic: 'Systems Integration',
  },
  {
    id: 'power-bi-pack',
    name: 'Power BI / Fabric Reporting Pack',
    group: 'project',
    price: 3950,
    from: true,
    duration: '3–4 weeks',
    summary: 'Reports people trust, built on a proper model.',
    includes: ['Star-schema semantic model', 'Up to 5 report pages', 'Row-level security', 'Scheduled refresh setup'],
    service: 'data-analytics',
    topic: 'Data & Analytics',
  },
  {
    id: 'kaizen-ppm-deployment',
    name: 'Kaizen PPM Deployment',
    group: 'project',
    price: 6300,
    from: true,
    duration: '4–8 weeks',
    summary: 'Kaizen PPM set up in your own tenant for a one-time fixed price. No per-user fee from us.',
    includes: ['Kaizen PPM deployed and configured in your tenant', 'Project Online or Planner data migrated, if you need it', 'Role-based training', '30 days of hypercare, then a managed support plan'],
    service: '/products/kaizen-ppm/',
    topic: 'Kaizen PPM demo',
  },
  {
    id: 'power-platform-governance-setup',
    name: 'Power Platform Governance Setup',
    group: 'project',
    price: 7100,
    from: true,
    duration: '3–5 weeks',
    summary: 'Guardrails that let people build safely.',
    includes: ['Environment strategy and DLP policies', 'Managed Environments', 'Pipelines and ALM', 'Centre of Excellence dashboards'],
    service: 'power-platform',
    topic: 'Power Platform',
  },
  // Monthly
  {
    id: 'support-essentials',
    name: 'Managed Support: Essentials',
    group: 'monthly',
    price: 650,
    duration: 'Monthly',
    summary: 'Up to 10 hours a month.',
    includes: ['Fixes, small changes and admin questions', 'Monthly health report', 'Response by the next business day'],
    topic: 'Something else',
  },
  {
    id: 'support-growth',
    name: 'Managed Support: Growth',
    group: 'monthly',
    price: 1650,
    duration: 'Monthly',
    summary: 'Up to 25 hours a month.',
    includes: ['Everything in Essentials', 'Small enhancements, licence and governance reviews', 'Quarterly roadmap call', 'Prioritised response within 1 business day'],
    topic: 'Something else',
  },
  {
    id: 'support-premium',
    name: 'Managed Support: Premium',
    group: 'monthly',
    price: 3300,
    duration: 'Monthly',
    summary: 'Up to 50 hours a month.',
    includes: ['Everything in Growth', 'New features and agents', 'Named lead and monthly roadmap call', 'Same-business-day response (UK business hours)'],
    topic: 'Something else',
  },
];

export const packageTerms = [
  { title: 'Deploy once, then a managed plan', body: 'Every solution, Kaizen PPM included, is deployed for a one-time fixed price. After go-live you move onto a monthly managed support plan. New features and changes are planned with you and quoted at a fixed price before work starts.' },
  { title: 'Fixed price, agreed first', body: 'After a short call we confirm the scope and a fixed price in writing. Nothing starts until you agree.' },
  { title: 'Our guarantee', body: 'If we miss the agreed scope, we fix it at no extra cost.' },
  { title: 'Faster with AI', body: 'We use AI-assisted engineering, so delivery takes weeks, not months, and part of that saving is in the price.' },
  { title: 'What is not included', body: 'Prices are in US dollars and exclude Microsoft licences and any applicable tax. Microsoft licences are bought from Microsoft or your reseller.' },
];

export const packageFaqs = [
  { q: 'Is Kaizen PPM a subscription?', a: 'No. Kaizen PPM is deployed in your own Microsoft tenant for a one-time fixed price, with no per-user fee from us. After go-live, a managed support plan covers updates, fixes and help, and any new features are quoted at a fixed price. Your users need Microsoft Power Apps premium or Dynamics 365 licences, bought from Microsoft.' },
  { q: 'What if the scope changes during the project?', a: 'The fixed price covers the scope we agree in writing. If you want something extra, we price it as a change request and you approve it before we start. Nothing is added to your bill without your agreement.' },
  { q: 'Who does the work?', a: 'Every engagement is led by our founder, a Power Platform and AI solutions architect with eight years of Microsoft business applications consulting. Specialists join where a package needs them, and we use AI-assisted engineering throughout.' },
  { q: 'Which time zone do you work in?', a: 'We are based in Pakistan (UTC+5) and work remotely with clients worldwide. Our day overlaps with UK and European mornings and with the Gulf working day. For the Americas and Australia we schedule calls at the start or end of our day.' },
  { q: 'Do I need Microsoft licences first?', a: 'Usually some, yes, and they are not included in our prices. We tell you exactly which licences a package needs before you commit, and you buy them from Microsoft or your reseller.' },
  { q: 'How do payments work?', a: 'Entry packages are paid upfront. Projects are normally split: half to start and half at go-live. Monthly plans are billed monthly in advance. Prices are in US dollars; we can quote the equivalent in GBP or EUR.' },
  { q: 'What if a package is not the right fit?', a: 'Book a free 30-minute call and tell us the problem. We will recommend a package, shape a custom fixed-price quote, or tell you honestly if you do not need us.' },
];

export const packagesForService = (slug: string) => packages.filter((p) => p.service === slug);

export const formatPrice = (p: Package) => {
  const amount = `$${p.price.toLocaleString('en-US')}`;
  if (p.group === 'monthly') return `${amount} / month`;
  return p.from ? `From ${amount}` : amount;
};

export const serviceHref = (p: Package) => (p.service ? (p.service.startsWith('/') ? p.service : `/services/${p.service}/`) : undefined);
