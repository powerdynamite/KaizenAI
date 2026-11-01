---
title: 'Useful AI agents keep a human in the loop'
description: 'A simple four-rung ladder for deciding what an AI agent should be allowed to do on its own, and what it must leave to a person.'
date: 2026-10-12
category: Agentic AI
---

"Agentic AI" is everywhere, and so are demos of agents doing everything on their own. In real businesses, the agents that last are the ones people **trust**. Trust comes from being clear about what the agent may and may not do.

We use a simple four-rung ladder.

| Rung | What the agent does | Who is accountable |
|---|---|---|
| **1. Capture** | Gets data in with less typing: reads an email, fills a record | The person, assisted |
| **2. Surface** | Finds and summarises on request | The person asks, the agent retrieves |
| **3. Interpret** | Explains a result that rules or calculations produced | The agent narrates and never sets the value |
| **4. Decide** | Chooses a course of action | **Always a human** |

Most of the value sits on rungs 1–3. Rung 4 is where an agent can *propose* and *rank* options, but a person approves.

## Guardrails we build into every agent

- **Security-trimmed**: an agent only sees what the user it acts for can see.
- **Explainable**: every output cites the records or documents it used.
- **Approval on writes**: nothing important is committed without a confirmation step.
- **Auditable**: AI-assisted content is marked as such, with the confirming user.
- **An off switch**: every feature can be disabled per environment.

This is the same approach we take with the AI features in [Kaizen PPM](/products/kaizen-ppm/), and with the agents we build for clients.

---

*Have a process you think an agent could take over? [Tell us about it](/contact/?topic=Agentic%20AI).*
