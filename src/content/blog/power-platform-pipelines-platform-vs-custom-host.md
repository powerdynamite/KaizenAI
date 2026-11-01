---
title: "Power Platform Pipelines: platform host or custom host?"
description: "Pipelines bring governed solution deployment into Power Platform without an external DevOps tool. The host you choose decides how much control you have. A practical comparison and setup checklist."
date: 2026-12-01
category: "Infra & DevSecOps"
tags: ["Power Platform", "ALM", "Pipelines", "Managed Environments", "DevOps"]
author: "Abdul Basit"
draft: false
---

Pipelines in Power Platform move solutions from development to test to production inside the platform itself. Non-development environments always receive managed solutions, and stages cannot be skipped. For many teams, that removes the need to build and maintain an Azure DevOps or GitHub pipeline just to deploy a model-driven app.

The first real decision is the **host**: the Dataverse environment that stores pipeline definitions, deployment history and solution artefacts.

## The two options

**Platform host.** The default, tenant-wide host. It is provisioned automatically the first time someone opens the Pipelines page, and makers can create personal pipelines. It has clear limits: personal pipelines cannot be extended or shared, and they support only a source plus two targets.

**Custom host.** An environment an administrator sets up with the Power Platform Pipelines application. Admins create pipelines, associate environments and grant access through the Deployment Pipeline User role. It consumes environment capacity, but gives full control over security, configuration and extensions.

## How we decide

| Question | Platform host | Custom host |
|---|---|---|
| Who owns ALM? | Individual makers | A central platform team |
| More than two target stages? | No | Yes |
| Approval gates before deployment? | No | Yes, through pipeline extensions |
| Shared pipelines across a team? | No | Yes |
| Central view of all deployments? | Limited | Yes |

For anything a customer depends on, we use a custom host. The platform host is fine for personal productivity apps and experiments.

## Managed Environments

Every **target** environment in a pipeline must be a Managed Environment, which in turn requires premium licences for its users. The development environment and the host environment do not need to be managed. Admins can set targets to convert to Managed Environments automatically.

Plan for the licence implications early. It is a common surprise late in a project.

## Setup checklist for a custom host

1. Create a production-type environment with Dataverse as the host, in the same region as the environments it serves, and give it a clear name (for example "Contoso Pipelines Host").
2. Install **Power Platform Pipelines** in it from the admin center.
3. Register development and target environments. An environment is either a development or a target environment in a host, never both.
4. Enable Managed Environments on all targets, and consider solution checker enforcement there.
5. Create the pipeline with ordered stages: Test, UAT, Production.
6. Assign makers the Deployment Pipeline User role and share the pipeline with them.
7. Where approvals are needed, enable the pre-deployment step and implement the approval logic in Power Automate.
8. Point the tenant at the custom host in the deployment settings so personal pipelines on the platform host cannot bypass it.

## What pipelines handle for you

Pipelines deploy the solution together with deployment settings such as connection references and environment variables, and store both managed and unmanaged artefacts in the host for every run. That gives you a deployment record and a rollback source without extra tooling.

## When you still want Azure DevOps or GitHub

- Source control as the single source of truth, with branching and pull requests.
- Automated tests, code analysis and plugin builds.
- Deployments that span more than Power Platform, such as Azure resources.

These are not mutually exclusive. A common setup exports and unpacks solutions to Git through the Power Platform CLI for version control and review, while Power Platform Pipelines handle the governed promotion between environments.

Start with a custom host and three stages. Add approvals and Git integration once the basic flow is routine.

*Product behaviour in this area changes regularly. Check the current [Microsoft Learn documentation on pipelines](https://learn.microsoft.com/power-platform/alm/pipelines) before you plan a rollout.*
