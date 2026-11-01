---
title: 'What is Microsoft 365 Copilot Cowork? A practical guide for business leaders'
description: 'Copilot Cowork turns Copilot from a chat assistant into something that finishes multi-step work. What it is, what it costs, how it is governed, and how to start.'
date: 2026-11-01
category: Copilot
tags: [Copilot Cowork, Microsoft 365 Copilot, AI agents, Copilot Credits]
---

**Copilot Cowork is the part of Microsoft 365 Copilot that carries out long-running, multi-step work for you.** You describe the outcome you want. Cowork makes a plan, works across your files, email, calendar and connected business systems, and comes back with a finished result rather than a draft. You can watch its progress and steer it as it goes.

Microsoft opened Cowork to its Frontier early-access programme on 30 March 2026 and made it generally available on 16 June 2026. It was built with Anthropic, on the technology behind Claude Cowork. This guide sums up what matters as of November 2026.

## How is Cowork different from Copilot Chat?

Copilot Chat is a conversation: you ask, it answers, and you do the work. Cowork is closer to delegating a task to a colleague.

| | Copilot Chat | Copilot Cowork |
|---|---|---|
| Interaction | Question and answer | Describe an outcome and let it work |
| Length of work | One turn at a time | Long-running and multi-step; it keeps running in the cloud when your laptop is off |
| Output | Answers and drafts | Completed artefacts: edited spreadsheets, documents, briefings, analyses |
| Tools | Mostly Microsoft 365 content | Microsoft 365, plus plugins and connectors to Dynamics 365, Salesforce, ServiceNow, SAP and more |
| Triggers | You start it | You start it, or it can propose tasks when an email, Teams message or CRM event arrives |

In the Microsoft 365 Copilot app, a toggle switches between Chat and Cowork. Cowork is also available on iPhone and Android through the Microsoft Copilot mobile app.

## What kind of work suits Cowork?

Microsoft's own examples are a good guide. They include comparing thousands of files across two product versions, editing batch spreadsheets, ranking at-risk opportunities in a sales pipeline, preparing a monthly budget review and putting together a daily briefing. The pattern is the same each time: **work that needs several sources, several steps and a finished deliverable.**

It is less suited to a quick factual question, where Chat is faster and cheaper, or to a fixed process that runs the same way every time, where Power Automate or a Copilot Studio agent is more predictable.

## What does it cost?

Two things are required:

1. **A Microsoft 365 Copilot licence** for each user.
2. **Usage-based billing in Copilot Credits.** Each task's cost depends on model use, how much context is retrieved, tool calls and run time. At general availability, pay-as-you-go was listed at $0.01 per Copilot Credit, with volume discounts on a commitment plan.

Cost per task varies a lot, so measure it during a pilot before you budget for a full rollout.

## How is it governed?

This is where Cowork differs most from consumer AI tools:

- **Cowork is off by default.** Admins choose when to turn it on and for which users or groups.
- **Spending limits** can be set at tenant, group and user level, with usage alerts and reporting.
- **It runs inside your Microsoft 365 trust boundary.** Sensitivity labels carry through end to end. Audit, eDiscovery, Data Lifecycle Management, Insider Risk Management and Communication Compliance all apply. Microsoft has also said data loss prevention (DLP) controls are coming to Cowork.
- **Plugins are admin-controlled.** Custom plugins are uploaded and approved through the Microsoft 365 admin center.

One caution: Cowork can only see what each user can see. Overshared SharePoint sites become very easy to find. That is why [Copilot readiness starts with permissions](/blog/copilot-readiness-permissions-first/).

## Which AI models does it use?

Cowork lets you choose between models from Anthropic and OpenAI, and Microsoft adds new versions often. Treat the model list as something that changes month to month, and test your own tasks rather than relying on benchmarks.

## How to get started

1. **Tidy permissions** on the sites and teams the pilot group uses.
2. **Pick 5–10 people** with real, repetitive knowledge work, such as finance close, account planning or service escalations.
3. **Turn Cowork on for that group only**, with a modest spending limit.
4. **Write down three or four target tasks** and measure time saved against credits spent.
5. **Add plugins** for the systems those tasks touch. See our guide to [Copilot Cowork plugins and skills](/blog/copilot-cowork-plugins-and-skills-explained/).

---

*Want help planning a Cowork pilot? [Talk to us](/contact/?topic=Copilot%20%26%20Cowork).*

**Sources:** [Copilot Cowork is now generally available](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/) (Microsoft, June 2026) · [Copilot Cowork: now available in Frontier](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/30/copilot-cowork-now-available-in-frontier/) (Microsoft, March 2026) · [What's new in Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/whats-new) (Microsoft Learn)
