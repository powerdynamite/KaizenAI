---
title: 'Screen pop and call logging in Dynamics 365: your options, and how to build them'
description: 'Open the right customer record the moment the phone rings and log every call to the timeline: built-in options, the Channel Integration Framework and the details.'
date: 2026-11-01
category: Dynamics 365
tags: [Dynamics 365, screen pop, call logging, CTI, Channel Integration Framework, telephony]
---

In our [CRM and telephony integration guide](/blog/crm-telephony-integration-guide/) we described four levels of integration: contact sync, click-to-dial, screen pop and call logging. This post covers the last two for **Dynamics 365 and other model-driven apps**:

- **Screen pop:** when a call comes in, Dynamics 365 opens the matching contact, account or case automatically.
- **Call logging:** every call is saved as a **phone call activity** on the right record's timeline, with direction, duration and notes.

Together they mean an agent never starts a conversation blind, and a manager never has to ask "did anyone call this customer?".

## Option 1: use what Microsoft already provides

Before building anything, check whether a built-in option covers your needs.

- **Microsoft Teams dialer in Dynamics 365 Sales.** Sellers can call from a record using Teams. After each call, Dynamics 365 creates a phone call activity on the record's timeline. For incoming calls, if the number matches a record, the *Call From* and *Regarding* fields are filled in automatically. Limitations to be aware of: the dialer doesn't support custom tables, and internal calls aren't tracked.
- **Sales Hub dialer.** Microsoft has announced a built-in dialer in its 2026 release waves, with inbound and outbound calling and automatic call logging. Check availability in your region and licence before planning around it.
- **Dynamics 365 Contact Center and Customer Service** include a native voice channel for service teams, with call routing and the customer record presented to the agent.

**If your telephony is Teams Phone, or you can move to it, start here.** The rest of this post is for the common case where you already have another phone system and want to keep it.

## Option 2: your phone system, embedded with the Channel Integration Framework

Microsoft's **Channel Integration Framework (CIF)** is the supported way to embed a third-party softphone inside model-driven apps. The softphone runs in a panel next to the CRM, and talks to Dynamics 365 through a JavaScript API. CIF 2.0 adds support for multi-session experiences such as Customer Service workspace.

Many telephony vendors already ship a CIF-based connector. **Check your vendor's marketplace first.** If one exists, configuring it is far cheaper than building. If not, or if it doesn't do what you need, a custom widget is a well-trodden path.

### How screen pop works with CIF

1. The phone system notifies the softphone widget of an incoming call and the caller's number.
2. The widget asks Dynamics 365 to find and open the matching record using `searchAndOpenRecords`.
3. If exactly one record matches, it opens. If several match, the user picks one. If none match, the widget can open a new contact form with the number pre-filled.

A simplified example, looking up a contact by a normalised phone number:

```js
// e164 = caller number normalised to international format, e.g. +923001234567
const query = `?$select=fullname&$filter=mobilephone eq '${e164}' or telephone1 eq '${e164}'`;
Microsoft.CIFramework.searchAndOpenRecords('contact', query, false);
```

### How click-to-dial works with CIF

The widget enables click-to-act and registers a handler. When a user clicks a phone number in Dynamics 365, the handler receives the number and record context, and asks the phone system to place the call.

## Call logging: getting the phone call activity right

Whichever option you choose, calls should land in Dynamics 365 as standard **phone call activities** (`phonecall`), not as notes or a custom table. That way they appear on timelines, in activity reports and in Copilot summaries without extra work.

A well-formed call log sets:

| Field | What to store |
|---|---|
| Subject | e.g. "Inbound call from +92 300 123 4567" |
| Direction | Incoming or outgoing |
| Phone number | The number dialled or received |
| Call from / Call to | Activity parties: the contact and the user |
| Regarding | The account, contact, opportunity or case the call was about |
| Duration | Actual duration in minutes |
| Status | Completed, then *Made* or *Received* |

Create the activity when the call **ends**, not when it starts. That way duration and outcome are known, and abandoned calls don't clutter the timeline. If agents add notes during the call, save them into the activity description as part of the same step.

## The details that decide whether it works

- **Normalise phone numbers.** Dynamics 365 stores numbers however people typed them: "0300-1234567", "+92 300 1234567", "(0300) 123 4567". Screen pop only works if the search can match. Normalise numbers to international (E.164) format on save, or keep a normalised search column alongside the display value.
- **Decide what "match" means.** Contacts only, or accounts and leads too? Which phone fields count? Agree the search order up front.
- **Handle no match and multiple matches.** These are normal, not edge cases. Design the screens for them.
- **Respect security.** Screen pop and logging run as the signed-in user. If they can't see a record, it shouldn't pop. That's correct behaviour, so make sure roles allow what agents genuinely need.
- **Think about recordings carefully.** Store links to recordings in the phone platform rather than copying audio into Dataverse, and follow your consent and retention rules.
- **Measure adoption.** Report on how many calls are logged, and with a Regarding record. That tells you whether the integration is being used as intended.

## A sensible order of work

1. **Clean and normalise phone numbers** in Dynamics 365. Everything else depends on it.
2. **Check built-in and vendor options** before writing code.
3. **Add call logging first.** It works even without screen pop and builds history immediately.
4. **Then add screen pop and click-to-dial**, starting with one team.
5. **Review a week of logged calls** with the team and adjust matching rules.

---

*Need your phone system working inside Dynamics 365? See our [Systems Integration](/services/systems-integration/) and [Dynamics 365](/services/dynamics-365/) services, or [describe your setup](/contact/?topic=Systems%20Integration).*

**Sources:** [What is Channel Integration Framework 2.0?](https://learn.microsoft.com/en-gb/dynamics365/channel-integration-framework/v2/administer/overview-channel-integration-framework) (Microsoft Learn) · [Microsoft.CIFramework methods, CIF 2.0](https://learn.microsoft.com/en-us/dynamics365/customer-service/channel-integration-framework/v2/reference/microsoft-ciframework-v2) (Microsoft Learn) · [Call using Microsoft Teams in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/call-using-microsoft-teams) (Microsoft Learn)
