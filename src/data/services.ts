export interface Faq { q: string; a: string }

export interface Service {
  slug: string;
  title: string;
  short: string;
  /** <title> for the page (kept under ~60 characters with the brand suffix). */
  seoTitle: string;
  /** Meta description (kept under ~160 characters). */
  metaDescription: string;
  /** Schema.org serviceType. */
  serviceType: string;
  /** One-sentence definition placed first on the page, so it can be quoted on its own. */
  definition: string;
  summary: string;
  outcomes: string[];
  offerings: { title: string; body: string }[];
  stack: string[];
  useCases: { title: string; body: string }[];
  faqs: Faq[];
}

// Ordered AI-first: this is the order used in navigation, cards and llms.txt.
export const services: Service[] = [
  {
    slug: 'ai-agents',
    title: 'Agentic AI',
    short: 'Custom AI agents that act in your systems, with guardrails and humans in the loop.',
    seoTitle: 'AI Agent Development & Agentic AI Services',
    metaDescription:
      'KaizenAI designs and builds AI agents that work inside Dynamics 365, Dataverse, Teams and your APIs, with MCP, RAG, guardrails and human approval built in.',
    serviceType: 'AI agent development',
    definition:
      'Agentic AI means AI systems that do more than answer questions. They read your data, use tools and take steps in your business systems to finish a task, while a person stays in control of the decisions that matter.',
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
    stack: ['Azure AI Foundry', 'Azure OpenAI', 'Claude', 'Model Context Protocol (MCP)', 'Semantic Kernel', 'Copilot Studio', 'Python', 'TypeScript'],
    useCases: [
      { title: 'Timesheet compliance agent in Teams', body: 'Delivered: an Azure OpenAI agent checks timesheet status, sends each person a personalised Adaptive Card reminder, nudges approvers and posts a channel summary. Schedule and tone change through configuration.' },
      { title: 'Inbox & document triage', body: 'Read incoming emails and attachments, extract data, create records and route exceptions to a person.' },
      { title: 'Sales research agent', body: 'Research prospects and draft personalised outreach for a human to approve.' },
    ],
    faqs: [
      { q: 'What is the difference between a chatbot and an AI agent?', a: 'A chatbot answers questions. An AI agent can also use tools: it looks up records, fills forms, calls APIs and moves work forward across several steps. We design agents so that anything consequential, such as sending, approving or deleting, waits for a person to confirm.' },
      { q: 'Which AI models do you use?', a: 'We are model-agnostic. We work with Azure OpenAI and Azure AI Foundry, Anthropic Claude and Microsoft Copilot Studio, and choose per use case based on quality, cost, data residency and the customer’s existing Microsoft agreements.' },
      { q: 'What is MCP and why does it matter?', a: 'The Model Context Protocol (MCP) is an open standard for connecting AI models to tools and data. We build MCP servers that expose your systems, such as Dataverse or internal APIs, to AI agents in a controlled, permission-aware way, so the same integration works across several AI clients.' },
      { q: 'How do you keep AI agents safe?', a: 'Every agent is security-trimmed to the user it acts for, cites the records it used, logs its actions, needs approval for writes, and can be switched off per environment. We also test agents against evaluation sets before and after each change.' },
    ],
  },
  {
    slug: 'copilot-cowork',
    title: 'Copilot & Cowork',
    short: 'Make Microsoft 365 Copilot, Copilot Studio and Cowork useful with your own data.',
    seoTitle: 'Microsoft 365 Copilot, Copilot Studio & Cowork Services',
    metaDescription:
      'Copilot readiness, Copilot Studio agents and Copilot Cowork enablement: KaizenAI prepares your data and permissions and builds agents grounded in your business.',
    serviceType: 'Microsoft Copilot consulting',
    definition:
      'Microsoft 365 Copilot is Microsoft’s AI assistant across Word, Excel, Outlook and Teams. Copilot Studio lets you build your own agents, and Cowork lets Copilot carry out longer, multi-step tasks for you.',
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
      { title: 'Ask your project portfolio in plain language', body: 'Delivered: a Copilot Cowork plugin answers questions about project status, portfolio health and resource allocation straight from Dataverse PPM data, through the Dataverse MCP server.' },
      { title: 'Worklog export from Tempo', body: 'Delivered: a Cowork plugin connects to Tempo’s MCP server with per-user OAuth and exports worklogs in the format the ERP import expects.' },
      { title: 'HR & policy assistant', body: 'Staff ask questions in Teams and get answers that cite the actual policy document.' },
      { title: 'Account briefings', body: 'Cowork pulls CRM, email and meeting history into a briefing before every client call.' },
    ],
    faqs: [
      { q: 'What does a Copilot readiness assessment cover?', a: 'We review who can access what in SharePoint, OneDrive and Teams, find overshared content, check sensitivity labels and ownership, and produce a prioritised fix list and a pilot plan. Copilot can see whatever each user can see, so permissions come first.' },
      { q: 'What is the difference between Microsoft 365 Copilot and Copilot Studio?', a: 'Microsoft 365 Copilot is the assistant built into Office apps and Teams. Copilot Studio is the tool for building your own agents with your own knowledge sources, actions and connectors, including agents that work over Dataverse and Dynamics 365.' },
      { q: 'Can Copilot work with our Dynamics 365 or Dataverse data?', a: 'Yes. Copilot features are built into Dynamics 365 Sales and Customer Service, and Copilot Studio agents can query and act on Dataverse tables, always respecting each user’s security roles.' },
    ],
  },
  {
    slug: 'dynamics-365',
    title: 'Dynamics 365 CRM',
    short: 'Sales, Customer Service and Field Service, built around the way your team works.',
    seoTitle: 'Dynamics 365 CRM Consulting & Implementation',
    metaDescription:
      'Dynamics 365 Sales, Customer Service and Field Service implementation, customisation, migration and health checks by KaizenAI, with Copilot built in.',
    serviceType: 'Dynamics 365 CRM implementation',
    definition:
      'Dynamics 365 Customer Engagement is Microsoft’s CRM suite. It covers Sales, Customer Service and Field Service and runs on Dataverse, the same data platform as the Power Platform.',
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
    faqs: [
      { q: 'Which Dynamics 365 apps do you work with?', a: 'We focus on Dynamics 365 Customer Engagement: Sales, Customer Service and Field Service, together with the underlying Dataverse platform and Power Platform extensions.' },
      { q: 'Can you fix an existing Dynamics 365 system?', a: 'Yes. Our health check reviews performance, security roles, customisations, plugins and adoption, then gives you a prioritised fix list. We can carry out the fixes or support your team.' },
      { q: 'Can you migrate us from Salesforce or spreadsheets?', a: 'Yes. We map, cleanse and migrate accounts, contacts, opportunities, cases and history, with reconciliation reports so you can prove that nothing was lost.' },
    ],
  },
  {
    slug: 'power-platform',
    title: 'Power Platform',
    short: 'Apps, automation and portals on Dataverse, governed and built to last.',
    seoTitle: 'Power Platform Development: Power Apps & Automate',
    metaDescription:
      'Power Apps, Power Automate, Power Pages and Power BI on Dataverse, plus governance, ALM and a Center of Excellence, from KaizenAI.',
    serviceType: 'Microsoft Power Platform development',
    definition:
      'Microsoft Power Platform is a low-code suite: Power Apps, Power Automate, Power Pages and Power BI, all built on Dataverse. It lets organisations build business apps and automation quickly, without losing enterprise security.',
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
    faqs: [
      { q: 'Should we build a canvas app or a model-driven app?', a: 'Model-driven apps suit data-heavy processes with many related tables, security roles and forms. Canvas apps suit task-focused, highly designed or mobile-first experiences. Many solutions use both on the same Dataverse data.' },
      { q: 'How do you stop Power Platform sprawl?', a: 'With an environment strategy, data loss prevention (DLP) policies, the CoE Starter Kit for visibility, and source-controlled solutions deployed through pipelines instead of edited directly in production.' },
      { q: 'Do we need Dataverse?', a: 'For anything business-critical, usually yes. Dataverse gives you relational data, row-level security, auditing and a proper ALM story. SharePoint lists are fine for simple, low-risk cases.' },
    ],
  },
  {
    slug: 'systems-integration',
    title: 'Systems Integration',
    short: 'Connect CRM, telephony, ERP and line-of-business systems so data flows without re-keying.',
    seoTitle: 'CRM, Telephony & Systems Integration Services',
    metaDescription:
      'KaizenAI integrates Dynamics 365, Dataverse and other CRMs with telephone systems, ERP and business apps using Azure Functions, Logic Apps, Power Automate and APIs.',
    serviceType: 'Systems integration',
    definition:
      'Systems integration means connecting the applications a business already uses, such as CRM, telephone systems, ERP and finance, so information is entered once and flows reliably wherever it is needed.',
    summary:
      'We connect CRMs, telephone systems, ERP and line-of-business applications through their APIs: scheduled and event-driven syncs, with duplicate prevention, error handling and monitoring built in. Integrations run in your own Azure tenant and are documented so your team can own them.',
    outcomes: [
      'Customer data entered once, available everywhere',
      'Calls identified by customer name, from up-to-date CRM contacts',
      'Integrations you can monitor, rerun and trust',
    ],
    offerings: [
      { title: 'CRM and telephony integration', body: 'Keep your phone system’s contacts in step with your CRM, so incoming calls show who is calling. Call activity can flow back to the CRM where the phone platform’s API supports it.' },
      { title: 'API and data sync', body: 'Scheduled and event-driven syncs between CRM, ERP and business apps, with field mapping, ID mapping to prevent duplicates, and safe re-runs.' },
      { title: 'Dataverse and Dynamics 365 integration', body: 'Custom APIs, plugins, virtual tables and Power Automate flows that connect Dataverse to the systems around it.' },
      { title: 'Monitoring and resilience', body: 'Health-check endpoints, retries, alerting and telemetry in Azure Monitor, so failures are spotted and fixed before users notice.' },
    ],
    stack: ['Azure Functions (.NET, Python)', 'Logic Apps', 'Power Automate', 'REST & OData APIs', 'OAuth 2.0', 'Dataverse', 'Microsoft Graph', 'Jira, JSM & Confluence', 'Tempo', 'Azure Monitor / OpenTelemetry'],
    useCases: [
      { title: 'CRM-to-phone-system contact sync', body: 'For a sales and service business, a .NET Azure Function keeps thousands of CRM customer contacts synchronised into a cloud VoIP telephone system twice a day, with a manual trigger for urgent updates. An ID-mapping store prevents duplicates and connection-test endpoints simplify support. Staff see the customer’s name as the phone rings.' },
      { title: 'AI-assisted service desk on Jira', body: 'Delivered: a custom MCP connector gives Claude and Microsoft 365 Copilot per-user access to Jira Service Management, with a skill for triage, comments and transitions.' },
      { title: 'Entra ID to business-app sync', body: 'Delivered: Entra ID users and group members synchronised into bookable resources as Power Platform solutions, with a forced-sync option.' },
      { title: 'Order and invoice hand-off', body: 'Won opportunities in CRM create orders in ERP, and invoice status flows back, so sales and finance work from the same facts.' },
    ],
    faqs: [
      { q: 'Can you integrate our CRM with our telephone system?', a: 'Yes, if both systems offer an API. We typically sync contacts from the CRM into the phone system so incoming calls are identified by name, and, where the phone platform supports it, write call activity back to the CRM.' },
      { q: 'Where do the integrations run?', a: 'Usually as Azure Functions, Logic Apps or Power Automate flows in your own Azure or Power Platform tenant. Credentials stay in your environment, and you own the code and configuration.' },
      { q: 'How do you prevent duplicates and handle failures?', a: 'We keep an ID mapping between systems so each record is created once and updated afterwards. Every integration has retries, logging and alerting, and can be safely re-run.' },
      { q: 'Do you only integrate Microsoft systems?', a: 'No. Dynamics 365 and Dataverse are our core, but we integrate any system with a documented REST or OData API, including third-party CRMs, telephony platforms and ERPs.' },
    ],
  },
  {
    slug: 'infra-devsecops',
    title: 'Infra & DevSecOps',
    short: 'Secure Azure foundations and pipelines that ship safely, every time.',
    seoTitle: 'Azure Infrastructure & DevSecOps Services',
    metaDescription:
      'Azure landing zones, Entra ID security, Bicep/Terraform and GitHub Actions or Azure DevOps pipelines, including Power Platform ALM, from KaizenAI.',
    serviceType: 'Cloud infrastructure and DevSecOps',
    definition:
      'DevSecOps means building security into every stage of software delivery, from code to deployment, instead of checking it at the end. On Azure, that starts with secure landing zones, strong identity and automated pipelines.',
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
    faqs: [
      { q: 'What is an Azure landing zone?', a: 'A landing zone is a pre-configured Azure foundation, covering subscriptions, networking, identity, policy and cost controls, so new workloads land in a secure, consistent environment instead of being set up by hand each time.' },
      { q: 'Can you set up CI/CD for Power Platform solutions?', a: 'Yes. We put solutions in source control and deploy them dev → test → prod through GitHub Actions, Azure DevOps or Power Platform Pipelines, with automated checks and approvals.' },
      { q: 'Bicep or Terraform?', a: 'Bicep is Azure-native and simple for Azure-only estates. Terraform suits multi-cloud teams or those already using it. We work with both and follow what your team can maintain.' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
