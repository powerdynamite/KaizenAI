---
title: "How Kaizen PPM uses AI: it explains, it never decides"
description: "Most AI in project tools produces confident fiction. The four-rung value ladder we use in Kaizen PPM, and the questions to ask any PPM vendor about AI."
date: 2026-11-05
category: "Project Management"
tags: ["Kaizen PPM", "AI", "Copilot", "Dataverse", "PMO", "Project portfolio management"]
author: "Abdul Basit"
image: /blog/og/how-kaizen-ppm-uses-ai.png
draft: false
---

Most project and portfolio tools that add AI have a data problem. The schedule is real, but the risk register is half empty, status lives in a slide deck, and resourcing lives in someone's head. Put a language model on top of that and you get confident fiction: a fluent status summary that does not match the numbers.

Kaizen PPM is in a different position, and that changes what AI should do in it. This post explains the rule we use to decide where AI is allowed to operate, the roadmap that rule produces, and the questions we think every PMO should ask a PPM vendor about AI.

## Why AI lands well in a PPM tool built on Dataverse

AI is only as good as the records behind it. In Kaizen PPM, the things AI needs are already captured as structured, related records in your own Dataverse:

| What AI needs to know | Where it already lives |
|---|---|
| What was promised vs what is happening | Baselines vs the current schedule |
| What it was meant to cost vs what it costs | Budget, forecast and actuals |
| What is going wrong, and how badly | Scored risks and issues |
| What was reported, and when | Dated status updates across four health dimensions |
| Who is committed to what | Resource requests, assignments and timesheets |
| What we learned last time | Lessons learned, decisions and change requests |
| What the organisation is trying to achieve | Weighted strategic goals |

So the opportunity is not "add a chatbot". It is closing the gap between data the system already holds and the human work of turning that data into a narrative, a judgement or a decision. Writing the status report, spotting the project about to slip, remembering who is good at what: that is where PMO time actually goes.

## The test every AI feature has to pass

Power BI is a useful comparison. In the early 2010s it made data easier to look at. Today people open a report to decide something. The charts did not go away; they stopped being the point.

It would be easy to fill a PPM roadmap with Copilot for its own sake: a chat box on every form. So every AI idea in Kaizen PPM has to pass one question:

> **Does a project manager or PMO make a different, faster or better-evidenced decision because this exists?**

Anything that fails that test is decoration, however good the demo looks.

## The value ladder: where AI is allowed to operate

Every AI feature in Kaizen PPM sits on one of four rungs. AI stops before the last one.

1. **Capture: less typing.** You enter the data, with AI assisting. Drop a project charter on the form and review suggested values instead of retyping them.
2. **Surface: plain-language answers.** You ask, AI retrieves. "Which of my projects are over budget and slipping?" is answered from live records.
3. **Interpret: AI explains, it never sets.** Health, slippage and variance are calculated by ordinary, transparent rules. AI turns the result into a sentence a busy PM can read in five seconds, and cites the records behind it.
4. **Decide: always a human.** AI can propose and rank options. A person chooses, and a person approves before anything is committed.

Rung 3 is where most of the value lives, and it carries the most important rule in the product: **AI never sets a project's health.** If a persuasive AI narrative could overwrite what the numbers say, it would undermine the very control a PMO bought the tool for.

## The roadmap, in four waves

The ladder shapes the order we build things in. Autonomy increases only as features earn trust.

### Wave 0: turn on what Microsoft already ships

The first wave is deliberately not ours to build. Microsoft now ships capabilities that cover a real slice of this roadmap as configuration:

- **Form fill assistance**: suggested values for blank fields, including from a document you drop on the form. Nothing is saved until the user accepts it.
- **Microsoft 365 Copilot chat inside the app**: natural-language questions without learning views and filters.
- **App forms inside Microsoft 365 Copilot chat**: a sponsor can approve a proposal, or a delivery lead can post a status update, without ever opening the app.

That last one matters most. The hardest audience for any PPM tool is the person who will not log in: the sponsor who owes a decision, the executive who wants one number. This reaches them where they already work.

Two honest caveats. Some of these features are in preview and follow Microsoft's release schedule, not ours. And they need a Power Apps premium (or Dynamics 365) licence per user, so for some organisations "just turn it on" is a licensing conversation first.

### Wave 1: assist

- **Status report drafting.** The first thing we build. It reads what actually changed since the last report (schedule movement, budget vs forecast vs actual, new or escalated risks, issues, approved changes) and drafts the narrative. It explains the health ratings the system already calculated; it does not propose them. The PM edits and submits, and their edits are the record.
- **Portfolio Q&A.** Plain-language questions over live records, with links back to them.
- **Intake triage.** When an idea or proposal comes in, it flags near-duplicates, suggests a portfolio and category, and lists what the review board will ask for.

Status reporting comes first because it is the biggest recurring time cost in most PMOs, the data is entirely in the system, the output is draft-and-approve by nature, and under deadline pressure narratives tend to get copied from last period until they quietly stop matching the numbers.

### Wave 2: anticipate

- **Delivery early warning.** A ranked watchlist of projects likely to miss their date or budget, naming the signals behind each score: baseline variance widening, milestones repeatedly pushed, critical issues left open, key people over-committed. It starts rules-based, so it is explainable on day one and works before there is history to learn from.
- **Skills from delivery history.** Skills-based staffing tools usually fail the same way: skills are self-reported once and never updated, so the matching gets confidently wrong. Kaizen PPM can propose skill updates from the work people have actually delivered, and flag skills that have not been used in years. The person or their manager confirms every change.
- **Estimate assist.** A realistic range for a task or project based on how long similar work really took, with the sample size shown. A range with its evidence, never a single confident number.

### Wave 3: act

- **Scenario and replan.** "We lose two engineers for six weeks, what happens?" becomes ranked recovery options with their trade-offs. The PM chooses and applies.
- **Portfolio funding advisor.** Given a budget, delivery capacity and weighted strategic goals, it proposes which proposals to fund and shows what each alternative costs in strategic value. A recommendation to the governance board, never an approval.

## The trust rules behind every feature

These apply to every wave, from the first release:

- **Explainable by default.** Every AI output shows what produced it. If we cannot explain an output, we do not ship it.
- **Security-trimmed to the user.** AI sees only what the person asking may see. A summary must never become a side channel that leaks a pay rate to someone who cannot open that record.
- **A person approves every write.** AI drafts, proposes, ranks and flags. Nothing is committed to a governance record unattended.
- **Grounded in your own data, which stays yours.** Answers come from your Dataverse records inside your Microsoft 365 tenant, and your data is not used to train shared models.
- **Auditable.** AI-assisted content is marked as such, so a year later an assurance review can answer "did a person write this?"
- **Every feature has an off switch,** per environment and per feature. Adopting none of it is a supported configuration.

## What we will deliberately not build

- AI that sets project health
- Agents that write to governance records without a person approving
- A general-purpose chatbot with no grounding in your data
- Training shared models on customer data
- Automated staffing decisions. Staffing has career consequences; the product shows its reasoning so people decide better, not so it decides for them

## Questions to ask any PPM vendor about AI

Whether or not you choose Kaizen PPM, these questions separate useful AI from demos:

1. **Who calculates project health: rules or the model?** If the model sets it, how do you audit it?
2. **Does every AI answer cite the records it used?**
3. **Is AI security-trimmed to the user?** Could a summary reveal cost rates or HR data the user cannot open directly?
4. **Can AI write to records without a person approving?**
5. **Where does our data go, and is it used for training?**
6. **Can we switch each AI feature off, per environment?**
7. **Which features are preview, and which licences do they need?**

If a vendor cannot answer these clearly, the AI is a demo, not a capability.

---

*Want to see how this works on your own projects? Explore [Kaizen PPM](/products/kaizen-ppm/) and its [AI roadmap](/products/kaizen-ppm/#ai-roadmap), or [book a demo](/contact/?topic=Kaizen%20PPM%20demo).*
