# LinkedIn post: Pipelines, platform host or custom host? (Tuesday 1 December 2026)

Image: `2026-12-01-power-platform-pipelines-platform-vs-custom-host.png`
Link (first comment): https://kaizenai.systems/blog/power-platform-pipelines-platform-vs-custom-host/

---

Pipelines in Power Platform can move solutions dev → test → prod without building an Azure DevOps or GitHub pipeline.

The first real decision is the host.

🏠 Platform host: set up automatically, fine for personal apps and experiments. Personal pipelines can't be shared or extended, and stop at two targets.

🏢 Custom host: a central platform team owns it, with more stages, approval gates, shared pipelines and one view of every deployment.

Our rule: for anything a customer depends on, use a custom host.

Setup checklist, plus when you still want Azure DevOps or GitHub, in the first comment 👇

#PowerPlatform #ALM #DevOps #Dataverse #ManagedEnvironments
