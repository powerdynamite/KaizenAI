import type { Faq } from './services';

export const PPM = {
  name: 'Kaizen PPM',
  path: '/products/kaizen-ppm/',
  seoTitle: 'Kaizen PPM: Portfolio Management on Dataverse',
  metaDescription:
    'Kaizen PPM is project and portfolio management built on Microsoft Dataverse, with Gantt, Kanban, financials, resources and risk. A Project Online alternative.',
  definition:
    'Kaizen PPM is a project and portfolio management (PPM) application built natively on Microsoft Power Platform and Dataverse. It takes work from idea to proposal, project and portfolio, and all data stays inside your own Microsoft 365 tenant.',
  intro:
    'Take work from idea to proposal, project and portfolio in one Power Platform app. It includes the interactive views PMs expect, the governance PMOs need, and AI that explains instead of guessing.',
};

export const capabilities = [
  { title: 'Portfolios & programs', body: 'Group related projects and roll up health, cost and risk for oversight.' },
  { title: 'Demand & idea intake', body: 'Capture ideas, cost them as proposals and approve the right work before it starts.' },
  { title: 'Interactive scheduling', body: 'A Gantt chart with WBS, dependencies, baselines and drag-to-reschedule, plus a Kanban board.' },
  { title: 'Financial management', body: 'Budget, forecast and actuals by period, including labour cost from resource rates.' },
  { title: 'Resource management', body: 'Resource requests, capacity heatmaps, bookings and weekly timesheets.' },
  { title: 'Risk & issues', body: 'Drag-and-drop 5×5 risk matrix, issue tracking and mitigation to closure.' },
  { title: 'Governance registers', body: 'Change requests, decisions, deliverables, stakeholders and lessons learned.' },
  { title: 'Status reporting', body: 'Periodic RAG health reports per project, rolled up to an executive dashboard.' },
  { title: 'Agile delivery', body: 'Buckets, sprints and labels for teams that work iteratively.' },
  { title: 'Data migration', body: 'Built to receive data from Project Online, MS Project, Project for the Web and Planner.' },
];

export const ladder = [
  { rung: 'Capture', who: 'You, assisted by AI', body: 'Create tasks, risks and status updates from plain language, so there is less typing.' },
  { rung: 'Surface', who: 'You ask, AI retrieves', body: '“Which of my projects are over budget?” is answered in plain English, security-trimmed to you.' },
  { rung: 'Interpret', who: 'AI explains, never sets', body: 'Health and slippage are calculated by rules. AI explains them and cites the records behind them.' },
  { rung: 'Decide', who: 'Always a human', body: 'AI can propose and rank options. A person approves before anything is committed.' },
];

/** Public summary of the AI capability roadmap (a direction, not a dated commitment). */
export const aiWaves = [
  {
    wave: 'Wave 0', name: 'Turn on', posture: 'Configure what Microsoft already ships',
    items: [
      'Form fill assistance: drop a charter or proposal on the form and review suggested values instead of retyping them',
      'Microsoft 365 Copilot chat inside the app, for plain-language questions about your projects',
      'Kaizen PPM forms inside Copilot chat, so a sponsor can approve a proposal or a lead can post a status update without opening the app',
    ],
  },
  {
    wave: 'Wave 1', name: 'Assist', posture: 'AI drafts, a person approves',
    items: [
      'Status report drafting: a narrative written from what actually changed since the last report, explaining the health ratings the system already calculated',
      'Portfolio Q&A: “which projects are over budget and slipping?”, answered from live records and trimmed to what you are allowed to see',
      'Intake triage: spots near-duplicate ideas, suggests a portfolio and flags what a review board will ask for',
    ],
  },
  {
    wave: 'Wave 2', name: 'Anticipate', posture: 'Flags and suggestions',
    items: [
      'Delivery early warning: a ranked watchlist of projects likely to miss date or budget, naming the signals behind each score',
      'Skills from delivery history: proposes skill updates from the work people have actually done, confirmed by the person',
      'Estimate assist: a realistic range from how long similar work really took, with the sample size shown',
    ],
  },
  {
    wave: 'Wave 3', name: 'Act', posture: 'Options a human authorises',
    items: [
      'Scenario and replan: “we lose two engineers for six weeks” turned into ranked recovery options with trade-offs',
      'Portfolio funding advisor: which proposals to fund within budget, capacity and strategic goals, as a recommendation to the board',
    ],
  },
];

export const aiNever = [
  'AI never sets project health. Health is calculated from schedule, cost and risk data; AI only explains it.',
  'No agent writes to governance records unattended.',
  'No general-purpose chatbot without grounding in your own data.',
  'Your data is never used to train shared models.',
  'No automated staffing decisions. People decide; the product shows its reasoning.',
];

/** How Kaizen PPM is sold: deployed once into the customer's tenant, not rented per user. */
export const ownership = {
  title: 'Results as a Service, not SaaS',
  lead: 'Most PPM tools rent you seats: per user, per month, for as long as you use them. With Kaizen PPM you buy a result: a working PPM in your own tenant, delivered at a fixed price.',
  points: [
    { title: 'It runs in your tenant', body: 'Kaizen PPM is deployed into your own Microsoft 365 and Dataverse environment. Your data never leaves it, and your existing security applies.' },
    { title: 'Pay once to deploy', body: 'A one-time fixed price, including migration from Project Online or Planner if you need it. No per-user fee from us, however many people use it.' },
    { title: 'Then a managed plan', body: 'After go-live you move onto a monthly managed support plan for updates, fixes and help. Month to month, cancel with 30 days’ notice.' },
    { title: 'Changes at a fixed price', body: 'New features and changes are planned with you and quoted at a fixed price before any work starts. No surprise invoices.' },
  ],
  note: 'Your users need Microsoft Power Apps premium or Dynamics 365 licences, bought from Microsoft or your reseller.',
};

export const migrationSources = [
  'Microsoft Project Online',
  'Project for the Web & Planner Premium',
  'Microsoft Planner',
  'Desktop MS Project (XML import & export)',
  'Spreadsheets and CSV',
];

export const ppmFaqs: Faq[] = [
  { q: 'What is Kaizen PPM?', a: 'Kaizen PPM is a project and portfolio management application built on Microsoft Power Platform and Dataverse. It covers idea intake, proposals, projects, programs and portfolios, with scheduling, financials, resources, risks and status reporting.' },
  { q: 'Is Kaizen PPM an alternative to Microsoft Project Online?', a: 'Yes. Kaizen PPM was designed to receive organisations moving off Project Online, Project for the Web, Planner and desktop MS Project. Every migratable record keeps its source-system lineage, and schedules can be imported from and exported to MS Project XML.' },
  { q: 'Where is our project data stored?', a: 'In your own Microsoft Dataverse environment, inside your Microsoft 365 tenant. Kaizen PPM uses standard Dataverse security, so your existing security roles, business units and auditing apply.' },
  { q: 'What licences do users need?', a: 'Kaizen PPM is a model-driven Power App, so each user needs a Power Apps premium or Dynamics 365 licence that includes Dataverse. There is no per-user fee from us: Kaizen PPM is deployed once for a fixed price (see Packages) and then supported through a managed plan.' },
  { q: 'Does Kaizen PPM work with Copilot and Cowork?', a: 'Copilot and Cowork capabilities are being added in waves. AI helps capture data, answer questions and explain calculated health and slippage. It never sets a project’s status or makes decisions on its own, and every AI feature can be switched off.' },
];
