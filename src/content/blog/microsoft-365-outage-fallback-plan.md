---
title: "Microsoft 365 went down. Does your organisation have a fallback plan?"
description: "The November 2026 Microsoft 365 outage took Outlook, Teams and Copilot offline for many organisations. Five things to check the day after, and how to build a simple fallback plan before the next one."
date: 2026-11-13
category: "Power Platform"
tags: ["Microsoft 365", "Outage", "Business continuity", "Power Automate", "Teams", "Outlook"]
author: "Abdul Basit"
image: /blog/og/microsoft-365-outage-fallback-plan.png
draft: false
---

On Thursday 12 November 2026, Microsoft 365 had a global outage. Outlook, Teams and Copilot were affected for many users, outage reports for Outlook alone climbed past 100,000, and recovery was uneven well into the next day. Microsoft said the outage was not caused by a cyberattack; at the time of writing it has not published a root cause.

Outages happen to every cloud provider, and this one will not be the last. For many organisations, though, it revealed something uncomfortable: **when email and Teams stop at the same time, there is no plan B.** People could not reach each other, approvals stalled, and automated processes failed quietly in the background.

This post covers what to check now, and how to build a fallback plan that takes days, not months.

## Five things to check the day after

### 1. Know where Microsoft reports incidents

During an outage, rumours travel faster than facts. Admins should go straight to the **Microsoft 365 admin center → Health → Service health**, which shows incidents affecting your tenant and their status. For everyone else, Microsoft's public status page is at **status.cloud.microsoft**. Agree in advance who checks, and who tells everyone else.

### 2. Have one communication channel outside Microsoft 365

If email and Teams fail together, how does your team reach each other, and how do you tell key customers what is happening? The answer should be decided before the outage, not during it: a phone tree, an SMS list, or a messaging group, with the right people already in it.

### 3. Resubmit failed Power Automate runs

Cloud flows that ran during the outage may have failed: approvals, notifications, data syncs, document generation. Check each critical flow's **run history**, filter for failed runs in the outage window, and **resubmit** them once services are stable. Nobody notices a missing notification until a customer asks about it.

### 4. Check agents and integrations that missed events

Processes triggered by an incoming email, a Teams message or a Copilot conversation may simply not have started. Those do not show up as errors; they show up as gaps. Compare what should have happened (orders received, tickets logged, records created) against what did.

### 5. List what actually stopped

Write down which processes halted and roughly what that cost: hours of work, delayed orders, missed responses. This list is the foundation of your fallback plan, because it tells you where to invest and where a short wait is acceptable.

## How to build a fallback plan

A fallback plan does not mean leaving the cloud or building a second copy of Microsoft 365. It means deciding, in advance, how the few things that really matter keep working, or catch up, when a service is down.

### Rank your critical processes

Not everything needs a plan. Start with the processes where a few hours of downtime has a real cost: customer communication, order intake, approvals with deadlines, anything regulated. Most organisations end up with five to ten.

### Agree the communication fallback

One channel outside Microsoft 365, the people in it, and a one-line message template ("We are affected by a Microsoft outage; here is how to reach us"). Test it once.

### Make critical flows recover on their own

In Power Automate, a few settings make a big difference:

- **Retry policies** on actions that call Microsoft 365 services, so short interruptions are absorbed automatically.
- **"Configure run after"** paths that catch failures and send an alert, instead of failing silently.
- **Monitoring**: a daily check, or an alert, for failed runs on the flows that matter.
- **Idempotent design**, so a resubmitted run does not create duplicate records or send the same email twice.

### Write a one-page runbook

Who checks the service health page, who sends the communication, which flows to resubmit afterwards, and how the backlog is cleared. One page, stored somewhere you can open when Microsoft 365 is down.

### Test it twice a year

Walk through the runbook with the people named in it. Most gaps show up in the first ten minutes of a tabletop exercise.

## We can help this week

If the outage showed that your organisation has no fallback plan, we offer a **[Microsoft 365 Outage Fallback Plan](/packages/#outage-fallback-plan)** as a fixed-price package, delivered in about a week:

- A review of which processes stopped during the outage, and what they cost you
- A backup communication plan outside Microsoft 365 for staff and key customers
- Retry policies and failure alerts on up to 10 critical Power Automate flows
- A one-page outage runbook

It follows our [Results as a Service](/blog/results-as-a-service/) model: we agree the result first, you get a fixed price after a free 30-minute call, and if we miss the agreed result we fix it at no extra cost.

---

*Want a plan B before the next outage? [Book a free 30-minute call](/contact/?topic=Power%20Platform&about=Microsoft%20365%20Outage%20Fallback%20Plan) and we will tell you honestly what you need, and what you don't.*
