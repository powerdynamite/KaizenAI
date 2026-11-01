// AI-ready starter kits: working foundations that clients adapt to their own requirements.
// They are deliberately NOT positioned as finished products.
// `repo` is null for private repositories (shown without a link).

import type { Faq } from './services';

export interface Kit {
  slug: string;
  name: string;
  tagline: string;
  maturity: string;
  problem: string;
  startWith: string[];
  customise: string[];
  ai: string;
  stack: string[];
  repo: string | null;
}

export const kits: Kit[] = [
  {
    slug: 'configurable-form-engine',
    name: 'Configurable Form Engine',
    tagline: 'A starting point for moving model-driven form logic out of per-table JavaScript and into Dataverse configuration.',
    maturity: 'Foundation · in active development',
    problem:
      'Every Dynamics 365 project accumulates form scripts: the same "show this, require that" logic written again for each table, and every change needs a developer and a deployment.',
    startWith: [
      'One web resource that applies visibility, requirement, editability, default values and value locking from Dataverse records',
      'Configuration tables and an unmanaged solution to import',
      'A Copilot Studio agent that drafts rules in plain language and confirms before any write',
    ],
    customise: [
      'Rules for your own tables, forms and business processes',
      'Extra action types your forms need',
      'Who may change rules, and an approval step before they go live',
      'The agent’s vocabulary, matched to your terminology',
    ],
    ai: 'Ships with a Copilot Studio agent, so rule changes can be planned and drafted conversationally.',
    stack: ['Dataverse', 'Model-driven apps', 'JavaScript web resource', 'Copilot Studio'],
    repo: 'https://github.com/powerdynamite/configurable-form-engine',
  },
  {
    slug: 'dataverse-audit-insights',
    name: 'Dataverse Audit Insights',
    tagline: 'A starting point for turning the Dataverse audit trail into usable reports and a record-restore tool.',
    maturity: 'Early foundation · validate in your environment',
    problem:
      'Dataverse records a detailed audit trail, but the audit table is not exposed through the Dataverse (TDS) connector, so most organisations never use it.',
    startWith: [
      'A four-page Power BI report: user activity, tables, trends and compliance',
      'A star-schema model fed from the Dataverse Web API',
      'A build guide for a canvas app that shows field-level changes and restores previous values',
    ],
    customise: [
      'Which tables and columns matter for your audit and compliance needs',
      'Report pages and measures for your regulators, auditors or adoption goals',
      'Who may restore values, with row-level security in Power BI',
      'Refresh, retention and environment set-up for your tenant',
    ],
    ai: 'Built from plain, readable source (PBIP/TMDL and Markdown guides), so an AI assistant can help extend the model and report.',
    stack: ['Power BI (PBIP/TMDL)', 'Dataverse Web API', 'Power Query', 'Power Apps', 'Custom connector'],
    repo: 'https://github.com/powerdynamite/dataverse-audit-insights',
  },
  {
    slug: 'pp-governance-hub',
    name: 'PP Governance Hub',
    tagline: 'A starting point for your own Power Platform governance hub, as a lighter, code-first alternative to the CoE Starter Kit.',
    maturity: 'Foundation · private, walkthrough on request',
    problem:
      'Tenant-wide visibility of environments, apps, flows, agents and makers usually means installing and maintaining the full CoE Starter Kit, even when you only need part of it.',
    startWith: [
      'Daily inventory sync of environments, apps, flows, agents, connectors, makers and licences into Dataverse',
      'A findings engine with nine example governance rules (orphaned resources, stale apps, stopped flows, DLP gaps and more)',
      'A Power Apps Code App to review, acknowledge and resolve findings',
    ],
    customise: [
      'Governance rules and thresholds that match your policies',
      'Notifications and escalation to the right owners',
      'Your environment strategy, DLP policies and licence cost model',
      'Tenant set-up: app registration, permissions and scheduling',
    ],
    ai: 'Includes AI build guidance (project instructions and a Power Platform setup skill), so Claude can help adapt it to your tenant.',
    stack: ['Power Apps Code App (React, TypeScript)', 'Dataverse', 'C# plugins & Custom APIs', 'Power Automate', 'Power Platform Admin API'],
    repo: null,
  },
];

export const kitSteps = [
  { title: 'Explore the kit', body: 'See it running, read the code, and decide whether the foundation fits.' },
  { title: 'Plan your requirements', body: 'A short workshop maps your rules, data and users against the kit. AI helps us turn that into a gap list and a build plan.' },
  { title: 'Customise and deploy', body: 'We adapt the kit in your tenant, under your publisher, with your security model. You own the result.' },
  { title: 'Improve continuously', body: 'Start with the smallest useful version, then add rules, reports and automation as you learn.' },
];

export const kitFaqs: Faq[] = [
  { q: 'Are these finished products?', a: 'No. They are starter kits: working foundations that show the approach and save weeks of set-up. Every organisation’s rules, data and security are different, so each kit is meant to be adapted before it is used in production.' },
  { q: 'Can we use them ourselves?', a: 'The public kits are on GitHub, and your team can explore and extend them. Test thoroughly in a development environment first. The governance hub is not public yet; ask us for a walkthrough.' },
  { q: 'What does a customisation engagement look like?', a: 'A short requirements workshop, a written gap list and plan, then customisation and deployment in your tenant in small increments. You own the resulting solution and source.' },
  { q: 'What makes them “AI-ready”?', a: 'Each kit is structured so AI can help: readable source and build guides, project instructions for assistants such as Claude, and in the form engine’s case a Copilot Studio agent. That makes planning and adapting the kit faster, while people review every change.' },
];
