---
title: "Ten Power Automate expression mistakes, and how to fix them"
description: "Power Fx habits, wrong output functions and null handling cause most broken cloud flows. A practical checklist for writing expressions that work the first time."
date: 2026-11-10
category: "Power Platform"
tags: ["Power Automate", "Expressions", "Cloud flows", "Dataverse"]
author: "Abdul Basit"
draft: false
---

Power Automate cloud flows do not use Power Fx. They use the Workflow Definition Language that also powers Azure Logic Apps. Anyone who moves between canvas apps and flows will, sooner or later, write a canvas-app expression into a flow and wonder why it fails.

These are the ten mistakes we see most often in client flows, with the fix for each.

## 1. Writing Power Fx in a flow

Canvas apps accept `If(Status = "Active", 1, 0)`. A cloud flow does not. Operators are functions:

```text
if(equals(triggerBody()?['status'], 'Active'), 1, 0)
```

The same applies to `&&`, `||`, `<>` and `>`: use `and()`, `or()`, `not(equals())` and `greater()`.

## 2. Double quotes for strings

Flow expressions use single quotes. A literal apostrophe is escaped by doubling it:

```text
concat('Customer''s order: ', variables('OrderNo'))
```

## 3. Confusing `body()`, `outputs()` and `result()`

- `body('Action')` returns the response body of an action.
- `outputs('Action')` returns the whole output, including headers and status code. You usually need `outputs('Action')?['body']` or simply `body()`.
- `result('Scope')` returns the results of every action inside a scope. Use it for try/catch patterns, for example to collect the error message of the action that failed.

## 4. Spaces in action names

The designer shows "Get row by ID". The expression needs `outputs('Get_row_by_ID')`. Rename actions to something meaningful early; references are updated for you, and later readers will thank you.

## 5. Not guarding against nulls

`triggerBody()['email']` fails when the property is missing. `triggerBody()?['email']` returns null instead. Combine with `coalesce()` for a default:

```text
coalesce(triggerBody()?['email'], 'no-reply@example.com')
```

## 6. Checking emptiness the wrong way

`equals(variables('Name'), null)` misses empty strings and empty arrays. `empty()` handles strings, arrays and objects:

```text
if(empty(body('List_rows')?['value']), 'none', 'found')
```

## 7. Comparing numbers as strings

Dataverse values, HTTP responses and SharePoint columns often arrive as strings. `greater('10', '9')` compares text. Convert first with `int()` or `float()`.

## 8. Forgetting time zones in dates

`utcNow()` is UTC. Dataverse stores date-time values in UTC. Convert only for display:

```text
convertFromUtc(utcNow(), 'W. Europe Standard Time', 'yyyy-MM-dd HH:mm')
```

## 9. Double-serialised JSON

Some APIs and custom connectors return JSON as a string inside JSON. Property access fails until you parse it:

```text
json(body('HTTP')?['payload'])?['id']
```

If you need the result repeatedly, parse it once into a variable or a Parse JSON action rather than calling `json()` in every expression.

## 10. Using `items()` with the wrong loop name

Inside nested Apply to each loops, `item()` refers to the innermost loop. To reach an outer loop, name it explicitly:

```text
items('Apply_to_each_project')?['name']
```

## A working routine

- Build complex expressions in a Compose action first and inspect the run output.
- Keep one expression per Compose while debugging; merge them later.
- Name actions before you reference them.
- Put error handling in scopes and read the failure with `result()`.

Small habits, but they remove most of the "it worked in the designer" problems before they reach production.
