---
title: 'CRM and telephony integration: a practical guide (and what we learned building one)'
description: 'Connect your CRM to your phone system so calls arrive with a name and land on the customer record. The patterns, the pitfalls and how to plan one.'
date: 2026-11-01
category: Systems Integration
tags: [CRM, telephony, CTI, VoIP, Dynamics 365, Azure Functions, integration]
---

**CRM and telephony integration connects your customer database to your phone system.** Incoming calls show who is calling, staff can dial from the customer record, and calls are logged against the right account. Done well, it removes a surprising amount of daily friction: no "sorry, who am I speaking to?", no copying numbers by hand, no calls that never reach the CRM.

This guide covers the main integration patterns, the decisions to make before you build, and the lessons from a CRM-to-VoIP integration we delivered recently.

## What "integration" can mean: four levels

Not every business needs everything. Pick the level that solves your actual problem.

| Level | What users get | Typical effort |
|---|---|---|
| **1. Contact sync** | The phone system knows your customers, so calls display a name instead of a number | Low to medium |
| **2. Click-to-dial** | Call a customer directly from the CRM record | Low, often built into the phone vendor's app |
| **3. Screen pop** | An incoming call opens the matching CRM record automatically | Medium |
| **4. Call logging** | Calls (time, duration, direction, notes, sometimes recordings) are saved to the CRM record | Medium to high |

**Level 1 is often the best first step.** It is quick to deliver, visible to every user from day one, and it produces the clean, matched data that levels 3 and 4 rely on later.

## Decisions to make before you build

### 1. Which system is the master?
For customer contacts it is almost always the **CRM**. Syncing one way, from CRM to phone system, is simpler and avoids conflicts. Two-way sync sounds attractive, but it needs rules for every conflict: what happens when a number is edited in both places?

### 2. Which records should sync?
Not every CRM contact belongs in the phone system. Agree a filter, such as active customers with a customer number or contacts with at least one phone number, so the phone directory stays useful rather than cluttered.

### 3. How will records be matched?
This is where most integrations go wrong. You need a **stable key** linking each CRM record to its counterpart in the phone system, stored in an **ID mapping**. Matching on names or phone numbers alone produces duplicates as soon as anything changes.

### 4. How fresh does the data need to be?
- **Scheduled sync** (for example, twice a day) is simple, robust and enough for most contact directories.
- **Event-driven sync** (webhooks or change notifications) is near real-time but has more moving parts.
- Whichever you choose, add a **manual "sync now" trigger** for urgent changes.

### 5. Where will it run, and who owns it?
We usually build integrations as **Azure Functions** or **Logic Apps** in the client's own Azure tenant, or as **Power Automate** flows for simpler cases. Credentials stay in the client's environment, and they own the code.

## Pitfalls we see again and again

- **Phone number formats.** "0300 1234567", "+92 300 1234567" and "00923001234567" are the same number. Normalise numbers to international (E.164) format before syncing and matching, or caller identification will silently fail.
- **Duplicates on re-run.** Every sync must be safe to run twice. With an ID mapping, the second run updates records instead of creating new ones.
- **Deletions.** Decide what happens when a customer is deactivated in the CRM: remove the contact, hide it, or leave it. Write that rule down.
- **API limits and paging.** Phone and CRM APIs page their results and limit request rates. Fetch in pages, back off when throttled, and allow long-running jobs enough time to finish.
- **Secrets in code.** API keys and OAuth client secrets belong in application settings or Azure Key Vault, never in source control.
- **Silent failure.** If nobody notices when a sync stops, staff lose trust in the data. Add logging, alerts and a simple health check.

## A real example

For a sales and service business, we built a one-way contact sync from their CRM into a cloud VoIP telephone system:

- A **.NET Azure Function** runs **twice a day**, with an **HTTP endpoint for manual syncs**.
- Only customers with a **customer number** are synced, which keeps thousands of relevant contacts and leaves out incomplete records.
- An **ID mapping** (customer number → phone-system contact ID) makes every run idempotent: create once, update afterwards, never duplicate.
- The phone system's API uses **OAuth 2.0**. Tokens are handled per request and never shared across clients.
- **Connection-test endpoints** let support staff check both systems in seconds, and **OpenTelemetry** sends logs and metrics to Azure Monitor.

The result for staff is simple: when the phone rings, they see the customer's name. That small change is what makes the integration worth building, and it sets up the next steps, screen pop and call logging.

## Integrating with Dynamics 365

If your CRM is Dynamics 365 or another Dataverse-based app, you have extra options:

- **Microsoft's Channel Integration Framework** lets a telephony vendor's softphone run inside model-driven apps, enabling screen pop and click-to-dial within the CRM.
- **Dataverse APIs and plugins** make it straightforward to create **phone call activities** on the right account or contact.
- **Power Automate** can handle lighter, event-driven tasks, such as creating a follow-up task after a missed call.

Check first whether your phone vendor already offers a Dynamics 365 connector. Sometimes the best integration is configuring one that exists, then filling the gaps with a small amount of custom code.

## A simple plan to get started

1. **List the systems and their APIs.** No API means no clean integration, so confirm this first.
2. **Agree the master system, the filter and the matching key.**
3. **Start with one-way contact sync**, scheduled, with a manual trigger and monitoring.
4. **Run it in parallel for a week** and check a sample of records by hand.
5. **Then add screen pop or call logging**, one capability at a time.

That's the kaizen approach to integration: a small, reliable first step, then steady improvement.

**Next:** [Screen pop and call logging in Dynamics 365](/blog/screen-pop-and-call-logging-dynamics-365/): the options, and how to build them.

---

*Want your CRM and phone system working together? See our [Systems Integration service](/services/systems-integration/) or [describe your setup](/contact/?topic=Systems%20Integration).*

**Further reading:** [Channel Integration Framework overview](https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/overview-channel-integration-framework) (Microsoft Learn) · [Azure Functions documentation](https://learn.microsoft.com/en-us/azure/azure-functions/) (Microsoft Learn) · [E.164 numbering plan](https://www.itu.int/rec/T-REC-E.164) (ITU)
