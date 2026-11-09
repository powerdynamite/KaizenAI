---
title: 'Model Context Protocol (MCP), explained for business leaders'
description: 'MCP lets AI assistants such as Copilot and Claude safely use your business systems. What it is, why it matters and what to ask before you connect anything.'
date: 2026-11-01
category: Agentic AI
tags: [MCP, Model Context Protocol, AI agents, integration, security]
---

**The Model Context Protocol (MCP) is an open standard for connecting AI assistants to tools and data.** It does for AI what USB did for peripherals: build one connector, and any assistant that supports MCP can use it. Anthropic introduced it in late 2024, and it is now supported across the industry, including in Claude, Microsoft Copilot Studio and both [Claude Cowork and Copilot Cowork](/blog/claude-cowork-vs-copilot-cowork-plugins/).

## Why it matters to your business

Before MCP, every AI product needed its own custom integration with every system. Connecting three AI tools to five business systems meant fifteen integrations, each with its own security model. With MCP, each system is exposed once, as an **MCP server**, and every MCP-capable assistant can use it.

In practice, that means:

- **Less integration work:** one Dynamics 365 or ERP connector serves several AI tools.
- **No lock-in:** if you switch AI vendors, your integrations stay put.
- **One place to control access:** the MCP server decides what the AI can see and do.

## How it works, in one paragraph

An MCP server publishes a list of **tools**, such as "search accounts", "get open cases" or "create a draft invoice". Each tool has a description and defined inputs. When the AI assistant needs information or wants to act, it calls the right tool. The server runs the request against your system, using the permissions of the person the AI is acting for, and returns the result. The AI never gets direct database access; it only gets the tools you chose to publish.

## Five questions to ask before connecting a system

1. **Whose permissions does it use?** The right answer is the signed-in user's permissions, never a shared admin account.
2. **Which tools can write data?** Keep read tools broad and write tools few. Clients such as Copilot Cowork ask the user to confirm actions on tools that aren't marked as safe.
3. **Where are secrets kept?** In a vault or an OAuth flow, never in prompts, skill files or config checked into source control.
4. **What is logged?** You should be able to answer "what did the AI do, and for whom?" weeks later.
5. **Who owns it?** An MCP server is production software. It needs an owner, monitoring and updates.

## Where to start

Pick one system that people constantly look things up in, such as CRM, the service desk or project data, and expose a handful of **read-only** tools. Measure how often they are used and how much time they save. Add write tools later, one at a time, each with a confirmation step.

This is the approach we follow in our [agentic AI work](/services/ai-agents/), and it is how [Kaizen PPM](/products/kaizen-ppm/) is being opened up to Copilot and Cowork.

---

*Thinking about an MCP server for Dynamics 365 or Dataverse? [Let's talk](/contact/?topic=Agentic%20AI).*

**Sources:** [Model Context Protocol](https://modelcontextprotocol.io/) (official site) · [Build plugins for Copilot Cowork](https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-plugin-development) (Microsoft Learn) · [Customize Cowork with plugins](https://claude.com/blog/cowork-plugins) (Anthropic)
