# LinkedIn post: Power Automate expression mistakes (Tuesday 10 November 2026)

Image: `2026-11-10-power-automate-expression-mistakes.png`
Link (first comment): https://kaizenai.systems/blog/power-automate-expression-mistakes/

---

Power Automate cloud flows don't use Power Fx.

They use the Workflow Definition Language from Azure Logic Apps. So if you move between canvas apps and flows, sooner or later you'll paste a canvas-app formula into a flow and wonder why it fails.

The mistakes we see most in client flows:

1️⃣ Writing Power Fx in a flow (operators are functions here: equals(), if())
2️⃣ Double quotes for strings (flows want single quotes)
3️⃣ Mixing up body(), outputs() and result()
4️⃣ Not guarding against nulls
5️⃣ Forgetting time zones: utcNow() and Dataverse dates are UTC

All ten, with the fix for each, in the first comment 👇

#PowerAutomate #PowerPlatform #LowCode #Automation
