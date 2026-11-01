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
  { q: 'What licences do users need?', a: 'Kaizen PPM is a model-driven Power App, so each user needs a Power Apps premium or Dynamics 365 licence that includes Dataverse. Contact us for Kaizen PPM product pricing.' },
  { q: 'Does Kaizen PPM work with Copilot and Cowork?', a: 'Copilot and Cowork capabilities are being added in waves. AI helps capture data, answer questions and explain calculated health and slippage. It never sets a project’s status or makes decisions on its own, and every AI feature can be switched off.' },
];
