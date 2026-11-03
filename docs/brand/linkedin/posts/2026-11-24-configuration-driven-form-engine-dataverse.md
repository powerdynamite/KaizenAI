# LinkedIn post: One script instead of fifty (Tuesday 24 November 2026)

Image: `2026-11-24-configuration-driven-form-engine-dataverse.png`
Link (first comment): https://kaizenai.systems/blog/configuration-driven-form-engine-dataverse/

---

Five years into most Dynamics 365 projects, nobody knows which form rule lives where.

One script for accounts, another for opportunities, a third for a custom table. Each with its own version of "hide this section when status is X".

There's a simpler pattern: one generic script, driven by configuration rows in Dataverse.

📋 Rules are stored as data: table, trigger field, condition, action, target
⚙️ One engine runs on every form, cached once per load
🧩 A small action vocabulary: show, hide, require, lock, set value, notify
🚚 Rules move between environments as data, not code releases

Written once, tested once, reused everywhere. We've published it as an open starter kit.

How it works, and when not to use it, in the first comment 👇

#Dynamics365 #Dataverse #PowerPlatform #ModelDrivenApps
