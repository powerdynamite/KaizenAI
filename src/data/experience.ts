// Delivered work and technology experience. Use cases are anonymised: no client names.

export interface UseCase {
  slug: string;
  title: string;
  area: string;
  problem: string;
  solution: string;
  tech: string[];
}

export const experienceIntro =
  'KaizenAI builds AI agents, MCP connectors and automations that plug into the systems a business already runs: Microsoft 365, Power Platform, Dataverse and Atlassian. These are examples from our delivery work over the past year.';

export const useCases: UseCase[] = [
  {
    slug: 'timesheet-compliance-agent',
    title: 'AI timesheet compliance agent',
    area: 'Agentic AI · Microsoft Teams',
    problem: 'Timesheets were submitted late and approvals stalled. Managers spent time chasing people by hand.',
    solution:
      'An AI agent in Microsoft Teams checks timesheet status for the current period, sends each person a personalised reminder as an Adaptive Card, reminds approvers about pending approvals, and posts a summary to the team channel. Admins change its schedule, tone and target channel through configuration, without a redeploy.',
    tech: ['Azure OpenAI (tool calling, ReAct loop)', 'Bot Framework', 'Microsoft Graph', 'Dataverse Web API', 'Azure App Service', 'Power Platform environment variables'],
  },
  {
    slug: 'portfolio-in-plain-language',
    title: 'Ask your project portfolio in plain language',
    area: 'Copilot Cowork · Dataverse',
    problem: 'Status, portfolio health and resource allocation sat in a PPM system that only trained users could query.',
    solution:
      'A Microsoft 365 Copilot Cowork plugin answers questions about project status, portfolio health and resource allocation directly from the PPM data. It shipped as a read-only edition and a read-write trial, and is packaged so it can be rebuilt for a new tenant from parameters.',
    tech: ['Copilot Cowork agent skills', 'Dataverse MCP server', 'OAuth plugin vault', 'Microsoft 365 app packages'],
  },
  {
    slug: 'service-desk-ticket-handling',
    title: 'AI-assisted service desk ticket handling',
    area: 'MCP · Atlassian',
    problem: 'Service desk agents switched between chat, mail and Jira to triage and update tickets.',
    solution:
      'A custom MCP connector gives Claude and Microsoft 365 Copilot secure, per-user access to Jira Service Management and Jira projects, with a ticket-handling skill for triage, comments and transitions. One server runs locally for desktop use or hosted for Copilot.',
    tech: ['Python MCP server (stdio and Streamable HTTP)', 'Atlassian REST APIs', 'Docker', 'Azure Container Apps', 'Windows Credential Manager'],
  },
  {
    slug: 'tempo-worklog-export',
    title: 'Worklog export from Tempo',
    area: 'Copilot Cowork · Atlassian',
    problem: 'Exporting worklogs to finance and ERP systems took manual work every month.',
    solution:
      'A Copilot Cowork plugin connects to Tempo’s MCP server with per-user OAuth. Its skill produces worklog reports and exports in the format the ERP import expects.',
    tech: ['Tempo MCP', 'OAuth 2.0', 'Teams Developer Portal', 'Python build tooling'],
  },
  {
    slug: 'rovo-to-copilot',
    title: 'Connecting Atlassian Rovo to Microsoft 365 Copilot',
    area: 'Copilot Cowork · OAuth',
    problem: 'The documented setup for connecting OAuth-protected MCP servers to Copilot Cowork did not produce a working connection.',
    solution:
      'A reproducible app package and a published technical investigation of Dynamic Client Registration show the configuration that works and record a test matrix.',
    tech: ['Microsoft 365 Agents Toolkit', 'Dynamic Client Registration (DCR)', 'Enterprise Token Store', 'Docusaurus'],
  },
  {
    slug: 'connector-marketplace',
    title: 'Company-wide rollout of AI connectors',
    area: 'Claude · Governance',
    problem: 'Users installed AI connectors by hand. Versions drifted apart and security fixes did not reach everyone.',
    solution:
      'An organisation plugin marketplace distributes versioned MCP connectors and skills to every user automatically. A release needs only a version change and is validated before rollout.',
    tech: ['Claude plugins and marketplace', 'GitHub', 'Python validation scripts'],
  },
  {
    slug: 'entra-id-resource-sync',
    title: 'Entra ID user and resource synchronisation',
    area: 'Power Platform · Identity',
    problem: 'User and resource records in the business application had to be kept in step with Microsoft Entra ID by hand.',
    solution:
      'Automated synchronisation of users and Entra ID group members into bookable resources, delivered as Power Platform solutions, with variants built on standard connectors and on the HTTP connector, plus a forced-sync option.',
    tech: ['Power Automate', 'Microsoft Graph', 'Microsoft Entra ID', 'Dataverse', 'Managed solutions'],
  },
  {
    slug: 'platform-discovery',
    title: 'Platform discovery and assessment',
    area: 'Dataverse · AI readiness',
    problem: 'Before an AI rollout, the existing configuration of a Dataverse-based application has to be understood.',
    solution:
      'An automated discovery script inventories tables, fields and relationships and produces a machine-readable baseline for agent and connector design.',
    tech: ['Python', 'Dataverse Web API'],
  },
  {
    slug: 'documentation-as-code',
    title: 'Documentation as code',
    area: 'Delivery',
    problem: 'Admin guides, setup guides and technical documentation fell out of date whenever a solution changed.',
    solution:
      'Generators build branded Word guides from code for each delivery: client requirements, client setup, admin, deployment and rebuild guides.',
    tech: ['Node.js document generation', 'Python'],
  },
];

export const capabilities: { area: string; items: string[] }[] = [
  { area: 'Agentic AI', items: [
    'Azure OpenAI (GPT-4o, GPT-4o-mini): tool-calling agents built on the ReAct pattern (reason, act, observe)',
    'Prompt engineering: system prompts with role, rules, tone and output format, so every message is personalised',
    'Runtime configuration: schedule, tone and target channel change through Power Platform environment variables, with no redeploy',
    'Proactive agents: scheduled and on-demand triggers that act without waiting for a prompt',
  ] },
  { area: 'Microsoft 365 Copilot and Copilot Cowork', items: [
    'Copilot Cowork plugins with agent skills and remote MCP connectors',
    'Microsoft 365 app packages, built and provisioned with the Microsoft 365 Agents Toolkit',
    'Connector OAuth: Teams Developer Portal registrations, the Enterprise Token Store (OAuthPluginVault) and Dynamic Client Registration',
    'Packages that roll out to a new tenant or customer by setting parameters',
  ] },
  { area: 'Model Context Protocol (MCP)', items: [
    'Custom MCP servers in Python, running locally (stdio) and remotely (Streamable HTTP)',
    'Connectors for Jira and Jira Service Management, Confluence, Tempo, Microsoft Graph and the Dataverse MCP endpoint',
    'Secure credentials: Windows Credential Manager locally, per-user tokens so hosted servers store no secrets',
    'Hosting on Docker and Azure Container Apps; local testing through Dev Tunnels',
  ] },
  { area: 'Claude and Claude Code', items: [
    'Claude Code and Claude Cowork for agentic engineering and business workflows',
    'Custom skills (SKILL.md) with evaluation sets that measure skill quality',
    'An organisation-wide plugin marketplace for versioned connectors and skills',
  ] },
  { area: 'Microsoft Teams bots', items: [
    'Bot Framework SDK bots with two-way chat and proactive messaging',
    'Adaptive Cards for reminders, approvals and summaries',
    'Channel posts through Microsoft Graph',
  ] },
  { area: 'Power Platform and Dataverse', items: [
    'Dataverse Web API (OData v9), data modelling, security-role scoping and the Dataverse MCP server',
    'Power Automate cloud flows with standard connectors and the HTTP connector',
    'Managed and unmanaged solutions, environment variables and ALM',
    'Copilot Studio, Power Apps and Power Pages',
    'Project portfolio management on Dataverse: projects, portfolios, resources, timesheets and approvals',
  ] },
  { area: 'Identity and integration', items: [
    'Microsoft Entra ID: app registrations, OAuth 2.0 client-credentials and delegated flows',
    'User and resource synchronisation from Entra ID groups into business applications',
    'Microsoft Graph for users, groups, Teams and mail',
  ] },
  { area: 'Atlassian', items: [
    'Jira, Jira Service Management and Confluence integrations and automation',
    'AI-assisted ticket handling and triage',
    'Tempo worklog reporting and export',
    'Jira integrations in .NET (C#)',
  ] },
  { area: 'Azure', items: [
    'Azure App Service and Azure Functions (Python): timer and HTTP triggers',
    'Azure Container Apps',
    'Azure OpenAI Service',
  ] },
  { area: 'Engineering and delivery', items: [
    'Python, TypeScript/JavaScript (Node.js, React), C#/.NET and PowerShell',
    'Source control and CI on GitHub and Azure DevOps',
    'Documentation generated as code for every delivery: user, admin, deployment and technical guides',
    'Documentation sites with Docusaurus and Mermaid diagrams',
    'Security notes and threat considerations for each connector',
  ] },
];
