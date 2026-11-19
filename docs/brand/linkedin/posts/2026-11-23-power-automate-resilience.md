# LinkedIn post: 3 settings that make flows survive an outage (Monday 23 November 2026)

Image: `2026-11-23-power-automate-resilience.png`
Link (first comment): https://kaizenai.systems/blog/microsoft-365-outage-fallback-plan/

---

Most Power Automate flows that failed during last week's Microsoft 365 outage didn't need a rebuild. They needed three settings.

1️⃣ A retry policy on every Microsoft 365 action
Open the action → Settings → Retry policy. Short interruptions are absorbed automatically instead of failing the whole run. For critical steps, use an exponential policy with enough attempts to ride out a brief outage.

2️⃣ "Configure run after" to catch the failure
Wrap the main steps in a Scope, then add a step that runs only if it has failed or timed out. Send an alert to a person or a channel outside Microsoft 365. A flow that fails loudly is fixable. A flow that fails silently is a customer complaint next week.

3️⃣ Idempotent steps, so a resubmit is safe
After an outage you'll resubmit failed runs. Make sure that can't create duplicates: check whether the record already exists, or upsert using an alternate key in Dataverse. Then resubmitting is a two-click job, not a clean-up project.

None of this is complicated. It just rarely gets done until something breaks.

Want us to harden your critical flows? It's part of our Microsoft 365 Outage Fallback Plan: about one week, fixed price agreed after a free call. Link in the first comment 👇

#PowerAutomate #PowerPlatform #Microsoft365 #LowCode #BusinessContinuity
