---
title: "One script instead of fifty: a configuration-driven form engine for Dataverse"
description: "Per-form JavaScript multiplies with every requirement. Moving form rules into Dataverse configuration records makes them testable, auditable and changeable without a deployment."
date: 2026-11-24
category: "Dynamics 365"
tags: ["Dataverse", "JavaScript", "Model-driven apps", "Dynamics 365", "Copilot Studio"]
author: "Abdul Basit"
draft: false
---

Most Dynamics 365 implementations accumulate form scripts. One for the account form, another for opportunities, a third for a custom table, each with its own version of "hide this section when status is X" and "make that field required when type is Y". Five years in, nobody knows which rule lives where.

There is a simpler pattern: **one generic script, driven by configuration records in Dataverse.** We built an open-source implementation, the [Configurable Form Engine](https://github.com/abdul-basit-545/configurable-form-engine), and this post explains the idea.

## The problem with per-form scripts

- The same logic is written many times, slightly differently each time.
- Every rule change needs a developer, a solution export and a deployment.
- Rules are invisible to the business people who own them.
- Testing means clicking through forms.

## The pattern

Instead of code per form, store rules as rows in a configuration table:

| Table | Trigger field | Condition | Action | Target |
|---|---|---|---|---|
| account | customertypecode | equals Partner | show | section_partner |
| opportunity | budgetamount | greater than 100000 | require | approvername |
| case | prioritycode | equals High | notify | "Escalate within 4 hours" |

A single web resource is registered on every form where rules apply. On load and on change it:

1. Reads the rules for the current table (once, then caches them for the session).
2. Evaluates each condition against the current form values.
3. Applies the actions: show or hide, enable or disable, required level, default values, notifications.

The script is written once, tested once and reused everywhere.

## Design choices that matter

- **Use logical names everywhere.** Display names change with language and customisation; logical names do not.
- **Cache the rules.** Retrieve them once per form load with the Web API, not once per field change.
- **Make it idempotent.** Re-evaluating all rules on every change is simpler and safer than tracking which rule affected what.
- **Keep the action vocabulary small.** Show, hide, require, lock, set value, notify covers most real requirements. Anything more complex stays as code.
- **Move rules as data.** The configuration table is solution-aware schema, but its rows are configuration data and move between environments with stable IDs.

## What changes for the team

- Business analysts can read, and with appropriate security change, the rules.
- Rule changes are a record update, auditable with Dataverse auditing, instead of a deployment.
- New forms get behaviour by adding rows, not code.
- Developers spend their time on the logic that genuinely needs code.

## Adding a natural-language layer

Once rules are data, an agent can work with them. We added a Copilot Studio layer that lets an administrator say "make the approver field required on opportunities over 100,000" and get a proposed rule record. The agent drafts; a person reviews and activates it. The [human-in-the-loop principle](/blog/ai-agents-human-in-the-loop/) applies here as well.

## When not to use it

Complex calculations, multi-step integrations and heavy server-side validation still belong in plugins or Power Automate. A form engine handles form behaviour. It is not a replacement for business logic on the server, which runs regardless of how the record is changed.

The code is on [GitHub](https://github.com/abdul-basit-545/configurable-form-engine). Feedback and pull requests are welcome.
