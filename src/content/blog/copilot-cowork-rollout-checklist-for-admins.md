---
title: 'Rolling out Copilot Cowork safely: a 10-step checklist for IT admins'
description: 'Copilot Cowork is off by default, which gives you time to prepare. A practical checklist covering permissions, pilots, spending limits, Purview and plugins.'
date: 2026-11-01
category: Copilot
tags: [Copilot Cowork, Microsoft 365 admin, governance, Purview, Copilot Credits]
---

[Copilot Cowork](/blog/what-is-microsoft-365-copilot-cowork/) doesn't just answer questions. It acts: it edits files, runs multi-step tasks in the cloud and, with plugins, works inside your CRM and ERP. Microsoft ships it **off by default**, so admins decide when and how it arrives. Use that time well. Here is the checklist we work through with clients.

## Before you switch it on

**1. Fix oversharing first.** Cowork works with whatever each user can access. Find SharePoint sites and Teams shared with "Everyone", and "anyone with the link" sharing on sensitive libraries, and fix them. This is the [single biggest Copilot readiness task](/blog/copilot-readiness-permissions-first/).

**2. Check sensitivity labels.** Cowork carries labels through to everything it produces. If your HR, finance and legal content isn't labelled, the protections have nothing to apply to.

**3. Confirm licensing.** Every Cowork user needs a Microsoft 365 Copilot licence. Usage is then billed separately in **Copilot Credits**, so agree in advance who owns that budget.

## The pilot

**4. Choose a small, real pilot group.** Five to fifteen people with repetitive, multi-step knowledge work, such as finance close, account planning or service escalations. Avoid a pilot made up only of IT staff.

**5. Turn Cowork on for that group only.** Use group-based enablement rather than enabling it for the whole tenant.

**6. Set spending limits and alerts.** Cowork supports limits at tenant, group and user level, plus usage alerts. Start conservatively; it's easier to raise a limit than to explain an unexpected invoice.

**7. Define three to five target tasks and measure them.** For each one, record the time it takes today, the time with Cowork, credits consumed and quality. That evidence is your business case.

## Governance

**8. Confirm Purview coverage.** Audit, eDiscovery, Data Lifecycle Management, Insider Risk Management and Communication Compliance all extend to Cowork. Check that your retention and review policies cover the new content it creates. Microsoft has said data loss prevention (DLP) controls are coming to Cowork, so plan for them.

**9. Control plugins deliberately.** Custom plugins are uploaded and approved through the Microsoft 365 admin center. Keep a short allow-list, review each plugin's connectors (what can it read? what can it write?), and make sure no credentials are embedded in skill files. Our [plugins guide](/blog/copilot-cowork-plugins-and-skills-explained/) covers what to look for.

**10. Write a one-page acceptable-use note.** Explain what Cowork is for, what users must check before sharing its output, and how to report something unexpected. Keep it short enough that people actually read it.

## After the pilot

Review the measurements, adjust the spending limits, add the plugins your pilot users asked for, and expand group by group. That's the kaizen approach: small, measured steps rather than a big-bang rollout.

---

*Want a second pair of eyes on your Cowork rollout? [Book a free consultation](/contact/?topic=Copilot%20%26%20Cowork).*

**Sources:** [Copilot Cowork is now generally available](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/) (Microsoft) · [What's new in Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/whats-new) (Microsoft Learn) · [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development) (Microsoft Learn)
