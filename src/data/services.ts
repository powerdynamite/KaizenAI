export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: string; // key into components/Icon.astro
  summary: string;
  outcomes: string[];
  offerings: { title: string; body: string }[];
  stack: string[];
  useCases: { title: string; body: string }[];
}

export const services: Service[] = [
  {
    slug: 'dynamics-365',
    title: 'Dynamics 365 CRM',
    short: 'Sales, Customer Service and Field Service, built around the way your team works.',
    icon: 'crm',
    summary:
      'We implement, extend and rescue Dynamics 365 Customer Engagement. That covers clean data models, sensible security and automation people actually use, with nothing customised for its own sake.',
    outcomes: [
      'One view of every customer, deal and case',
      'Pipelines and SLAs that report themselves',
      'Fewer clicks for the people doing the work',
    ],
    offerings: [
      { title: 'Implementation', body: 'Discovery, solution design and rollout of D365 Sales, Customer Service and Field Service, configured before customised.' },
      { title: 'Customisation & extension', body: 'Plugins (C#), PCF controls, web resources, business process flows and Dataverse model design.' },
      { title: 'Migration', body: 'From spreadsheets, Salesforce, legacy CRM or on-premises Dynamics, with mapped, validated and reconciled data.' },
      { title: 'Health check & rescue', body: 'An audit of an existing org covering performance, security roles, technical debt and adoption, plus a prioritised fix list.' },
    ],
    stack: ['Dynamics 365 Sales', 'Customer Service', 'Field Service', 'Dataverse', 'C# plugins', 'PCF', 'Power Automate'],
    useCases: [
      { title: 'Lead-to-cash visibility', body: 'Qualify leads, track opportunities and hand over to delivery without re-keying data.' },
      { title: 'Omnichannel support desk', body: 'Cases from email, web and chat with routing, SLAs and a knowledge base.' },
    ],
  },
  {
    slug: 'power-platform',
    title: 'Power Platform',
    short: 'Apps, automation and portals on Dataverse, governed and built to last.',
    icon: 'platform',
    summary:
      'Power Apps, Power Automate, Power Pages and Power BI on top of Dataverse. We build business apps quickly and add the ALM and governance that keep low-code from turning into sprawl.',
    outcomes: [
      'Paper and spreadsheet processes turned into apps',
      'Approvals and hand-offs that run themselves',
      'A Center of Excellence that keeps it all governed',
    ],
    offerings: [
      { title: 'Model-driven & canvas apps', body: 'Choosing the right app type for the job, backed by a properly designed Dataverse schema.' },
      { title: 'Power Automate', body: 'Cloud flows, approvals, integrations and desktop flows (RPA) where APIs do not exist.' },
      { title: 'Power Pages', body: 'Secure external portals for customers, partners and suppliers.' },
      { title: 'Governance & ALM', body: 'Environment strategy, DLP policies, CoE Starter Kit, solution layering and pipelines.' },
    ],
    stack: ['Power Apps', 'Power Automate', 'Power Pages', 'Power BI', 'Dataverse', 'Power Platform Pipelines', 'pac CLI'],
    useCases: [
      { title: 'Request & approval apps', body: 'Purchase, leave, access or change requests with full audit history.' },
      { title: 'Operational dashboards', body: 'Power BI on Dataverse for live operational and executive reporting.' },
    ],
  },
  {
    slug: 'copilot-cowork',
    title: 'Copilot & Cowork',
    short: 'Make Microsoft 365 Copilot, Copilot Studio and Cowork useful with your own data.',
    icon: 'copilot',
    summary:
      'Licences alone do not create value. We prepare your data and permissions, build Copilot Studio agents grounded in your business, and set up Cowork so AI can carry out multi-step work across your Microsoft 365 apps under your rules.',
    outcomes: [
      'Copilot answers grounded in your own documents and records',
      'Agents that do the work, not just chat about it',
      'Oversharing risks found and fixed before rollout',
    ],
    offerings: [
      { title: 'Copilot readiness', body: 'SharePoint and permission hygiene, sensitivity labels and a rollout and adoption plan.' },
      { title: 'Copilot Studio agents', body: 'Custom agents over Dataverse, SharePoint and line-of-business systems, with actions and connectors.' },
      { title: 'Cowork enablement', body: 'Configure Cowork to run long-running, multi-step tasks across Outlook, Teams, Excel and more, with human review built in.' },
      { title: 'Copilot in Dynamics 365', body: 'Turn on and tune Copilot features across Sales and Customer Service.' },
    ],
    stack: ['Microsoft 365 Copilot', 'Copilot Studio', 'Copilot Cowork', 'Microsoft Purview', 'SharePoint', 'Microsoft Graph'],
    useCases: [
      { title: 'HR & policy assistant', body: 'Staff ask questions in Teams and get answers that cite the actual policy document.' },
      { title: 'Account briefings', body: 'Cowork pulls CRM, email and meeting history into a briefing before every client call.' },
    ],
  },
  {
    slug: 'ai-agents',
    title: 'Agentic AI',
    short: 'Custom AI agents that act in your systems, with guardrails and humans in the loop.',
    icon: 'agent',
    summary:
      'We design and build AI agents that read, decide and act in your business systems. Typical work includes document processing, triage, research and back-office automation. Every agent is grounded in your data, tightly scoped and auditable, and asks a person before it does anything important.',
    outcomes: [
      'Hours of repetitive knowledge work handled by agents',
      'Every agent action logged and explainable',
      'Model-agnostic, so you are not locked to one AI vendor',
    ],
    offerings: [
      { title: 'Agent discovery', body: 'Find the processes where an agent pays back, and rule out the ones where it would not.' },
      { title: 'Agent engineering', body: 'Tool-using agents, retrieval (RAG) over your content, and MCP servers that expose your systems safely.' },
      { title: 'Integration', body: 'Agents wired into Dataverse, Dynamics 365, Teams, email and your APIs.' },
      { title: 'Evaluation & guardrails', body: 'Test suites, approval steps, permission trimming, cost controls and monitoring.' },
    ],
    stack: ['Azure AI Foundry', 'Azure OpenAI', 'Claude', 'Model Context Protocol (MCP)', 'Semantic Kernel', 'Python', 'TypeScript'],
    useCases: [
      { title: 'Inbox & document triage', body: 'Read incoming emails and attachments, extract data, create records and route exceptions to a person.' },
      { title: 'Sales research agent', body: 'Research prospects and draft personalised outreach for a human to approve.' },
    ],
  },
  {
    slug: 'infra-devsecops',
    title: 'Infra & DevSecOps',
    short: 'Secure Azure foundations and pipelines that ship safely, every time.',
    icon: 'shield',
    summary:
      'Cloud infrastructure, identity and delivery pipelines that are secure by default. We build Azure landing zones, harden Entra ID, and automate build, test and deployment for code and Power Platform solutions alike.',
    outcomes: [
      'Repeatable infrastructure defined as code',
      'Every release built, scanned and deployed by a pipeline',
      'Identity and access that follow least privilege',
    ],
    offerings: [
      { title: 'Azure landing zones', body: 'Subscriptions, networking, policy and cost management, all set up through Bicep or Terraform.' },
      { title: 'Identity & security', body: 'Entra ID, Conditional Access, PIM, Defender and Intune baselines.' },
      { title: 'CI/CD & ALM', body: 'GitHub Actions and Azure DevOps pipelines, including Power Platform solution deployments.' },
      { title: 'DevSecOps', body: 'Secret scanning, dependency and code scanning, IaC checks and security gates in the pipeline.' },
    ],
    stack: ['Microsoft Azure', 'Entra ID', 'Bicep', 'Terraform', 'GitHub Actions', 'Azure DevOps', 'Microsoft Defender', 'Intune'],
    useCases: [
      { title: 'Power Platform ALM', body: 'Source-controlled solutions deployed dev → test → prod by pipeline, not by hand.' },
      { title: 'Secure-by-default tenant', body: 'MFA, Conditional Access and admin separation set up for a growing company.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
