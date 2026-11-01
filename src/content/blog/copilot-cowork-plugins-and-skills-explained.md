---
title: 'Copilot Cowork plugins and skills, explained (and how to build your own)'
description: 'Plugins connect Copilot Cowork to your business systems, and skills teach it your way of working. How they are packaged, deployed and secured.'
date: 2026-11-01
category: Copilot
tags: [Copilot Cowork, plugins, skills, MCP, Microsoft 365 app package]
---

Out of the box, [Copilot Cowork](/blog/what-is-microsoft-365-copilot-cowork/) knows your Microsoft 365 content. **Plugins and skills are how you teach it about everything else**: your CRM, your ERP, and the specific way your team prepares a board pack or handles a complaint.

## Skills and connectors: the two building blocks

A Cowork plugin is made of one or both of these:

- **Skills** are written instructions in a `SKILL.md` file. A skill tells Cowork how to do a particular job: the steps, the format and the checks. Cowork picks up a skill automatically when a request matches its description.
- **Connectors** link Cowork to external systems through the [Model Context Protocol (MCP)](/blog/model-context-protocol-explained-for-business-leaders/). That is how Cowork can read a Salesforce opportunity or create a ServiceNow ticket.

A skill without a connector suits workflows that are mostly prompting: "write our weekly status report in this format". A connector without a skill gives Cowork data access but no method. **The most useful plugins combine both.**

## Plugins you can use today

As of November 2026, Microsoft offers first-party plugins for **Dynamics 365 Sales, Customer Service and ERP**, and for **Fabric**, plus Accounting, Finance and Capital Markets plugins. There are partner plugins from companies including Harvey, LSEG, Miro, monday.com, Moody's and Morningstar, with more announced. There are also connectors to Jira, Salesforce, ServiceNow, SAP, Workday and Zendesk.

## How a custom plugin is packaged

Cowork plugins use the same **Microsoft 365 app package** format as Teams apps and Copilot agents: a `.zip` file that looks like this:

```
my-plugin.zip
├── manifest.json        # Microsoft 365 unified app manifest
├── color.png            # 192×192 icon
├── outline.png          # 32×32 icon
└── skills/
    └── board-pack-review/
        ├── SKILL.md
        └── references/  # optional supporting files
```

Each `SKILL.md` starts with a short header:

```markdown
---
name: board-pack-review
description: Review a draft board pack against our finance and governance checklist. Use when asked to check, review or QA a board pack.
---

1. Confirm every figure in the summary matches the appendix tables.
2. Flag any decision paper missing a risk section.
3. ...
```

Microsoft Learn sets a few rules worth knowing:

- `name` must be kebab-case and **match the folder name exactly**.
- `description` should **include the trigger phrases** people will actually use, because that is how Cowork decides when to apply the skill.
- A skill can have up to **20 companion files** (5 MB each, 10 MB in total).
- Plugin skills **cannot override Cowork's built-in skills**, so don't duplicate them.

## How plugins are deployed

An admin uploads the package through **Microsoft 365 admin center → Manage apps → Upload custom app**. It then appears in Cowork under *Sources & Skills → Plugins*. Microsoft also provides a preview command-line tool for building and sharing test versions before a full rollout.

## Security: what to get right

- **Never put secrets in `SKILL.md`.** Connectors authenticate through the plugin vault (OAuth) or dynamic client registration.
- **Annotate your tools.** Cowork treats MCP tools without annotations as destructive and asks the user to confirm, which is the safe default.
- **Scope connectors narrowly.** Expose read operations broadly and write operations sparingly.
- **Plan around Information Barriers:** Microsoft notes that Purview Information Barriers aren't supported for plugin management.

## Already built plugins for Claude Cowork?

Microsoft documents a way to convert Claude plugins, and the skill format is shared. Some parts don't carry over yet, such as slash commands, sub-agents and hooks. We compare the two in [Claude Cowork vs Copilot Cowork plugins](/blog/claude-cowork-vs-copilot-cowork-plugins/).

---

*We build Cowork plugins and MCP connectors for Dynamics 365, Dataverse and line-of-business systems. [Tell us what you need](/contact/?topic=Copilot%20%26%20Cowork).*

**Sources:** [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development) (Microsoft Learn) · [What's new in Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/whats-new) (Microsoft Learn) · [Copilot Cowork is now generally available](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available/) (Microsoft)
