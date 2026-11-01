---
title: 'Claude Cowork vs Copilot Cowork plugins: same idea, different packaging'
description: 'Anthropic and Microsoft both call their agentic workspace "Cowork", and both use plugins. Here is what carries over between them and what does not.'
date: 2026-11-01
category: Agentic AI
tags: [Claude Cowork, Copilot Cowork, plugins, skills, MCP, Anthropic]
---

Two products are called "Cowork". **Claude Cowork** is Anthropic's agentic workspace in the Claude app. **Copilot Cowork** is Microsoft's, built with Anthropic and running inside Microsoft 365. Both can be extended with **plugins**, and both use the same underlying idea: package instructions and tool access so the AI behaves like a specialist for your role, team or company.

If you build plugins, or are choosing between the two, this is what you need to know.

## What a plugin is in each product

**Claude Cowork.** Anthropic introduced Cowork plugins on 30 January 2026. A plugin can bundle four things:

- **Skills:** domain knowledge Claude applies automatically when it's relevant
- **Connectors:** MCP connections to your tools, such as your CRM or knowledge base
- **Slash commands:** actions you trigger yourself, like `/sales:call-prep`
- **Sub-agents:** specialised helpers for parts of a task

Everything is file-based, so plugins are easy to read, edit, version and share. Anthropic open-sourced eleven starter plugins (Sales, Finance, Legal, Marketing, Customer support, Product management, Data, Productivity, Enterprise search, Biology research, and a plugin for creating plugins) in its `knowledge-work-plugins` repository.

**Copilot Cowork.** Microsoft's plugins contain **skills and connectors**, packaged as a standard **Microsoft 365 app package** (a `manifest.json` plus a `skills/` folder) and deployed by an admin through the Microsoft 365 admin center. See our [Copilot Cowork plugins guide](/blog/copilot-cowork-plugins-and-skills-explained/) for the details.

## Side by side

| | Claude Cowork | Copilot Cowork |
|---|---|---|
| Skills (`SKILL.md`) | Yes | Yes, same format |
| Connectors (MCP) | Yes | Yes (Streamable HTTP over HTTPS) |
| Slash commands | Yes | Not yet supported |
| Sub-agents | Yes | Not yet supported |
| Hooks | Supported in Claude's plugin format | Not yet supported |
| Packaging | Plugin folder | Microsoft 365 app package (`.zip` + manifest) |
| Distribution | Install in Cowork, or upload your own | Microsoft 365 admin center, Microsoft 365 App Store |
| Governance | Anthropic plans and admin settings | Microsoft 365 admin, Purview, Copilot Credit limits |
| Data it sees best | What you connect | Your Microsoft 365 graph, plus what you connect |

## What carries over

The good news is that **skills are portable**. A well-written `SKILL.md` with a clear `name`, a `description` full of trigger phrases and step-by-step instructions works in both products. MCP connectors are portable too, as long as they meet Microsoft's transport and authentication requirements. Microsoft documents a conversion path that imports a Claude plugin's skills and `.mcp.json`.

What doesn't carry over today is slash commands, sub-agents and hooks. If your Claude plugin relies on them, move that logic into skill instructions, or into the connector itself, before targeting Copilot Cowork.

## Which should you build for?

- **Your organisation runs on Microsoft 365** and wants central governance, Purview coverage and billing through Copilot Credits: **build for Copilot Cowork.**
- **You want the richest plugin model today** (commands, sub-agents) or your team works mainly in Claude: **build for Claude Cowork.**
- **You need both:** keep skills and MCP servers as the shared core, and package them twice. Writing the skill once and reusing it is the real advantage of a shared format.

---

*We design portable skills and MCP connectors that work in both. [Start a conversation](/contact/?topic=Agentic%20AI).*

**Sources:** [Customize Cowork with plugins](https://claude.com/blog/cowork-plugins) (Anthropic, January 2026) · [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (GitHub) · [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development) (Microsoft Learn)
