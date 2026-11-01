---
title: 'Leaving Project Online: a practical migration checklist'
description: 'What to inventory, what to clean up and what to move first when you take your project portfolio off Project Online and onto Power Platform.'
date: 2026-10-28
category: Project Management
---

Microsoft has announced the retirement of **Project Online**, and many PMOs are now asking the same question: *where does our portfolio go next, and how do we move it without losing years of history?*

Here is the checklist we use before any migration to a Dataverse-based PPM solution such as [Kaizen PPM](/products/kaizen-ppm/).

## 1. Inventory what you actually have

- **Projects**: active, closed and on-hold. How many are you really going to move?
- **Enterprise custom fields and lookup tables**: these often carry the most business logic, and the most clutter.
- **Resource pool**: named resources, generic roles, cost rates and calendars.
- **Timesheets and actuals**: decide how far back you really need them.
- **Reports**: list every Power BI or Excel report that reads from Project Online, because each one needs a new data source.

## 2. Decide what *not* to migrate

A migration is the cheapest moment you will ever have to clean up. Archive closed projects to a read-only export, drop custom fields nobody has filled in for a year, and merge duplicate resources.

> Rule of thumb: if nobody can tell you what a field is for, it does not move.

## 3. Keep the lineage

Every migrated record should remember **where it came from**: its source system, original ID and when it last synced. That lets you reconcile counts, re-run a migration safely and answer audit questions later. Kaizen PPM's data model carries these lineage fields on every migratable table for exactly this reason.

## 4. Move in waves

1. Reference data first: resources, calendars and lookups.
2. Then a **pilot portfolio** of 5–10 live projects with their schedules.
3. Then the remaining active projects.
4. Finally, history and actuals, if you still need them.

## 5. Re-point reporting and train people

The data being moved is only half the job. Rebuild your key reports on Dataverse, then run short role-based sessions for PMs, resource managers and executives.

---

*Planning a move? [Talk to us](/contact/?topic=Kaizen%20PPM%20demo). We will review your current setup and tell you honestly how big the job is.*
