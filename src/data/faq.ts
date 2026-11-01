import type { Faq } from './services';

// Shown on the home page and published as FAQPage structured data.
export const homeFaqs: Faq[] = [
  { q: 'What does KaizenAI do?', a: 'KaizenAI is an AI-first IT services and product company specialising in the Microsoft ecosystem. We build AI agents, roll out Microsoft 365 Copilot, Copilot Studio and Cowork, implement Dynamics 365 CRM and the Power Platform, and set up secure Azure infrastructure and DevSecOps pipelines. We also build Kaizen PPM, a project portfolio management product on Dataverse.' },
  { q: 'Where is KaizenAI based, and who do you work with?', a: 'We are a remote-first team working with organisations worldwide. Engagements are run in English and delivered remotely, across time zones. Our home base is Lahore, Pakistan.' },
  { q: 'How do you use AI safely in business systems?', a: 'Every AI agent we build is grounded in your own data, security-trimmed to the user it acts for, cites its sources, logs its actions and asks a person before it does anything consequential. We call this keeping a human in the loop.' },
  { q: 'Do we need Microsoft 365 Copilot licences to work with you?', a: 'No. Many of our AI agents run on Azure AI Foundry, Azure OpenAI, Claude or Copilot Studio without per-user Copilot licences. We will recommend whichever option gives the best value for your use case.' },
  { q: 'How does an engagement start?', a: 'With a free consultation. We discuss what you want to improve, then propose a small first step that can be delivered in weeks, not months, and improve from there. That is the kaizen way.' },
];
