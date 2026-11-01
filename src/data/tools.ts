// Open-source tools and accelerators built by KaizenAI's founder.
// `repo` is null for private repositories (shown without a link).

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  problem: string;
  features: string[];
  stack: string[];
  repo: string | null;
  note?: string;
}

export const tools: Tool[] = [
  {
    slug: 'configurable-form-engine',
    name: 'Configurable Form Engine',
    tagline: 'Drive model-driven form behaviour from Dataverse configuration records instead of per-table JavaScript.',
    status: 'Active development',
    problem:
      'Every Dynamics 365 project accumulates form scripts: the same "show this, require that" logic written again for each table. Every change needs a developer and a deployment.',
    features: [
      'One web resource on the form OnLoad event controls visibility, requirement, editability, default values and value locking',
      'Rules are stored as Dataverse records, so changes need no republishing',
      'Includes a Copilot Studio agent ("CFE Configurator") that drafts rules conversationally and confirms before any write',
      'Ships as an unmanaged Dataverse solution',
    ],
    stack: ['Dataverse', 'Model-driven apps', 'JavaScript web resource', 'Copilot Studio'],
    repo: 'https://github.com/powerdynamite/configurable-form-engine',
  },
  {
    slug: 'dataverse-audit-insights',
    name: 'Dataverse Audit Insights',
    tagline: 'Power BI report and Power Apps app for field-level audit history, adoption insight and record restore.',
    status: 'Early preview',
    problem:
      'Dataverse records a detailed audit trail, but the audit table is not exposed through the Dataverse (TDS) connector, so most organisations never look at it.',
    features: [
      'Four-page Power BI report: user activity, tables, trends and compliance',
      'Star-schema semantic model sourced from the Dataverse Web API',
      'Canvas app to view field-level changes and restore previous values',
      'Portable across environments through a single environment URL parameter',
    ],
    stack: ['Power BI (PBIP/TMDL)', 'Dataverse Web API', 'Power Query', 'Power Apps', 'Custom connector'],
    repo: 'https://github.com/powerdynamite/dataverse-audit-insights',
  },
  {
    slug: 'pp-governance-hub',
    name: 'PP Governance Hub',
    tagline: 'A native Power Platform governance hub, an alternative to the CoE Starter Kit, built as a Power Apps Code App.',
    status: 'Private · demo on request',
    problem:
      'Tenant-wide visibility of environments, apps, flows, agents and makers usually means installing and maintaining the CoE Starter Kit.',
    features: [
      'Daily inventory sync of environments, apps, flows, agents, connectors, makers and licences into Dataverse',
      'Findings engine with nine governance rules: orphaned resources, stale apps, stopped flows, DLP gaps, default-environment sprawl, agent credit burn',
      'Acknowledge, ignore, resolve and reopen findings, individually or in bulk',
      'Drill-down panels per environment and per maker',
    ],
    stack: ['Power Apps Code App (React, TypeScript)', 'Dataverse', 'C# plugins & Custom APIs', 'Power Automate', 'Power Platform Admin API'],
    repo: null,
    note: 'The code is not public yet. Ask us for a walkthrough.',
  },
];
