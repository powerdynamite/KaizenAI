// German and Arabic text for the Packages page. Prices, ids and grouping come
// from packages.ts; only wording lives here. Keep keys in step with packages.ts.
import type { Lang } from '../i18n/strings';

export interface PackageText { name: string; duration: string; summary: string; includes: string[] }

type Dict = Record<string, PackageText>;

const de: Dict = {
  'architecture-session': {
    name: 'Architektur- & Roadmap-Session', duration: '1 Woche',
    summary: 'Eine Arbeitssitzung zu Ihrer Idee oder Ihrem aktuellen Setup, danach ein schriftlicher Plan.',
    includes: ['2-stündige Arbeitssitzung über Microsoft Teams', 'Prüfung Ihres Konzepts, Ihrer Prozesse oder Ihrer Microsoft-365-Umgebung', 'Schriftliche Zusammenfassung: empfohlene Architektur, Risiken und eine Roadmap in Phasen', 'Gebühr wird auf jedes Projekt angerechnet, das innerhalb von 60 Tagen beauftragt wird'],
  },
  'copilot-readiness': {
    name: 'Copilot Readiness Assessment', duration: '2 Wochen',
    summary: 'Finden und beheben, was Copilot offenlegen könnte, bevor Sie ihn einführen.',
    includes: ['Prüfung auf zu weit geteilte Inhalte in SharePoint, OneDrive und Teams', 'Check von Vertraulichkeitsbezeichnungen und Data Loss Prevention', 'Lizenzprüfung und priorisierte Maßnahmenliste', 'Pilotplan: wer, welche Anwendungsfälle, wie der Erfolg gemessen wird'],
  },
  'd365-health-check': {
    name: 'Dynamics 365 Health Check', duration: '2 Wochen',
    summary: 'Eine ehrliche Prüfung Ihrer bestehenden Dynamics-365-Umgebung mit einer umsetzbaren Maßnahmenliste.',
    includes: ['Prüfung von Performance, Sicherheitsrollen und Anpassungen', 'Check von Datenqualität und Nutzung', 'Bewertung technischer Schulden', 'Priorisierte Maßnahmenliste mit Aufwandsschätzung'],
  },
  'power-platform-governance-assessment': {
    name: 'Power Platform Governance Assessment', duration: '2–3 Wochen',
    summary: 'Wissen, was in Ihrem Tenant läuft und welche Kosten und Risiken das mit sich bringt.',
    includes: ['Bestandsaufnahme von Apps, Flows, Agents und Umgebungen', 'Prüfung von DLP-Richtlinien und Umgebungsstrategie', 'Empfehlungen zu ALM und Center of Excellence', 'Risiko- und Kostenbericht mit nächsten Schritten'],
  },
  'd365-sales-quick-start': {
    name: 'Dynamics 365 Sales Quick Start', duration: '2 Wochen',
    summary: 'Ein funktionierendes Dynamics 365 Sales, eingerichtet nach Ihrem Vertriebsprozess.',
    includes: ['Neue Dynamics-365-Sales-Umgebung und Lizenzzuweisung', 'Lead-to-Opportunity-Prozess mit bis zu 8 Phasen', 'Vertriebs-Dashboard und Datenimport (bis zu 2 Dateien)', 'Zwei Schulungen'],
  },
  'copilot-rollout': {
    name: 'Copilot-Einführung', duration: '4–6 Wochen',
    summary: 'Copilot sicher einführen und für echte Nutzung sorgen.',
    includes: ['Umsetzung der Readiness-Maßnahmen', 'Vertraulichkeitsbezeichnungen und Pilotgruppe', 'Adoptionsplan und zwei Schulungen', 'Ein Copilot-Studio-Agent'],
  },
  'ai-agent-pilot': {
    name: 'KI-Agent-Pilot', duration: '3–6 Wochen',
    summary: 'Ein produktiver Agent für einen Prozess, bei dem ein Mensch das Wichtige freigibt.',
    includes: ['Prozessanalyse und Erfolgskriterien', 'Agent auf Ihren Daten und Systemen', 'Leitplanken, Freigabeschritte und Monitoring', 'Übergabe und Dokumentation'],
  },
  'd365-implementation': {
    name: 'Dynamics 365 Sales oder Customer Service Implementierung', duration: '6–10 Wochen',
    summary: 'Dynamics 365, eingerichtet nach der Arbeitsweise Ihres Teams.',
    includes: ['Prozessdesign und Konfiguration', 'Bis zu 3 Integrationen oder Datenmigrationen', 'Sicherheitsmodell und Power-BI-Dashboards', 'Schulung und 30 Tage Hypercare'],
  },
  'power-apps-build': {
    name: 'Power-Apps-Entwicklung', duration: '3–6 Wochen',
    summary: 'Eine Business-App auf einem sauber entworfenen Dataverse-Schema.',
    includes: ['Modellgesteuerte App oder Canvas-App', 'Dataverse-Datenmodell und Sicherheit', 'Bis zu 5 Power-Automate-Flows', 'Bereitstellung über Pipelines'],
  },
  'power-pages-portal': {
    name: 'Power-Pages-Portal', duration: '4–8 Wochen',
    summary: 'Ein sicheres externes Portal für Kunden, Partner oder Lieferanten.',
    includes: ['Anmeldung und Webrollen', 'Tabellenberechtigungen auf Dataverse oder Dynamics 365', 'Formulare, Listen und Branding', 'Sicherheitsprüfung vor dem Go-live'],
  },
  'systems-integration': {
    name: 'Systemintegration', duration: '3–6 Wochen',
    summary: 'Zwei Systeme verbinden, damit Daten ohne erneute Eingabe fließen.',
    includes: ['Eine Integration, z. B. CRM ↔ Telefonanlage oder CRM ↔ ERP', 'Feld- und ID-Zuordnung gegen Dubletten', 'Wiederholungen, Health Checks und Alarme', 'Runbook und Übergabe'],
  },
  'power-bi-pack': {
    name: 'Power BI / Fabric Reporting-Paket', duration: '3–4 Wochen',
    summary: 'Berichte, denen man vertraut, auf einem sauberen Modell.',
    includes: ['Semantisches Modell im Sternschema', 'Bis zu 5 Berichtsseiten', 'Sicherheit auf Zeilenebene', 'Einrichtung der geplanten Aktualisierung'],
  },
  'kaizen-ppm-deployment': {
    name: 'Kaizen PPM Bereitstellung', duration: '4–8 Wochen',
    summary: 'Kaizen PPM in Ihrem eigenen Tenant, zum einmaligen Festpreis. Keine Gebühr pro Nutzer.',
    includes: ['Kaizen PPM in Ihrem Tenant bereitgestellt und konfiguriert', 'Bei Bedarf Migration Ihrer Project-Online- oder Planner-Daten', 'Rollenbasierte Schulung', '30 Tage Hypercare, danach ein Managed-Support-Plan'],
  },
  'power-platform-governance-setup': {
    name: 'Power Platform Governance Setup', duration: '3–5 Wochen',
    summary: 'Leitplanken, mit denen alle sicher entwickeln können.',
    includes: ['Umgebungsstrategie und DLP-Richtlinien', 'Verwaltete Umgebungen', 'Pipelines und ALM', 'Center-of-Excellence-Dashboards'],
  },
  'support-essentials': {
    name: 'Managed Support: Essentials', duration: 'Monatlich', summary: 'Bis zu 10 Stunden pro Monat.',
    includes: ['Fehlerbehebungen, kleine Änderungen und Admin-Fragen', 'Monatlicher Statusbericht', 'Antwort bis zum nächsten Werktag'],
  },
  'support-growth': {
    name: 'Managed Support: Growth', duration: 'Monatlich', summary: 'Bis zu 25 Stunden pro Monat.',
    includes: ['Alles aus Essentials', 'Kleine Erweiterungen, Lizenz- und Governance-Reviews', 'Quartalsweises Roadmap-Gespräch', 'Priorisierte Antwort innerhalb von 1 Werktag'],
  },
  'support-premium': {
    name: 'Managed Support: Premium', duration: 'Monatlich', summary: 'Bis zu 50 Stunden pro Monat.',
    includes: ['Alles aus Growth', 'Neue Funktionen und Agents', 'Feste Ansprechperson und monatliches Roadmap-Gespräch', 'Antwort am selben Werktag (britische Geschäftszeiten)'],
  },
};

const ar: Dict = {
  'architecture-session': {
    name: 'جلسة البنية والخارطة', duration: 'أسبوع واحد',
    summary: 'جلسة عمل حول فكرتكم أو بيئتكم الحالية، تليها خطة مكتوبة.',
    includes: ['جلسة عمل لمدة ساعتين عبر Microsoft Teams', 'مراجعة فكرتكم أو عملياتكم أو بيئة Microsoft 365 الحالية', 'ملخص مكتوب: البنية المقترحة والمخاطر وخارطة طريق على مراحل', 'تُخصم الرسوم من أي مشروع يُطلب خلال 60 يومًا'],
  },
  'copilot-readiness': {
    name: 'تقييم الجاهزية لـ Copilot', duration: 'أسبوعان',
    summary: 'اكتشاف ما قد يكشفه Copilot ومعالجته قبل إطلاقه.',
    includes: ['مراجعة المشاركة المفرطة في SharePoint وOneDrive وTeams', 'فحص تسميات الحساسية ومنع فقدان البيانات', 'مراجعة ملاءمة التراخيص وقائمة إصلاحات حسب الأولوية', 'خطة تجريبية: من يشارك، وحالات الاستخدام، وكيفية قياس النجاح'],
  },
  'd365-health-check': {
    name: 'فحص سلامة Dynamics 365', duration: 'أسبوعان',
    summary: 'مراجعة صريحة لبيئة Dynamics 365 الحالية مع قائمة إصلاحات قابلة للتنفيذ.',
    includes: ['مراجعة الأداء وأدوار الأمان والتخصيصات', 'فحص جودة البيانات ومستوى الاستخدام', 'تقييم الدَّين التقني', 'قائمة إصلاحات حسب الأولوية مع تقدير الجهد'],
  },
  'power-platform-governance-assessment': {
    name: 'تقييم حوكمة Power Platform', duration: '2–3 أسابيع',
    summary: 'معرفة ما يعمل في بيئتكم وما يترتب عليه من تكاليف ومخاطر.',
    includes: ['حصر التطبيقات والتدفقات والوكلاء والبيئات', 'مراجعة سياسات منع فقدان البيانات واستراتيجية البيئات', 'توصيات حول إدارة دورة حياة التطبيقات ومركز التميز', 'تقرير بالمخاطر والتكاليف مع الخطوات التالية'],
  },
  'd365-sales-quick-start': {
    name: 'البدء السريع مع Dynamics 365 Sales', duration: 'أسبوعان',
    summary: 'نظام Dynamics 365 Sales جاهز للعمل، مُعدّ حول عملية البيع لديكم.',
    includes: ['بيئة Dynamics 365 Sales جديدة وتوزيع التراخيص', 'مسار من العميل المحتمل إلى الفرصة بحد أقصى 8 مراحل', 'لوحة مبيعات واستيراد بيانات (حتى ملفين)', 'جلستا تدريب'],
  },
  'copilot-rollout': {
    name: 'إطلاق Copilot', duration: '4–6 أسابيع',
    summary: 'إطلاق Copilot بأمان وضمان استخدامه فعليًا.',
    includes: ['تنفيذ إصلاحات الجاهزية', 'تسميات الحساسية ومجموعة تجريبية', 'خطة تبنٍّ وجلستا تدريب', 'وكيل واحد على Copilot Studio'],
  },
  'ai-agent-pilot': {
    name: 'تجربة وكيل ذكاء اصطناعي', duration: '3–6 أسابيع',
    summary: 'وكيل واحد في بيئة الإنتاج لعملية واحدة، مع موافقة بشرية على القرارات المهمة.',
    includes: ['تحليل العملية وتحديد مقاييس النجاح', 'وكيل مبني على بياناتكم وأنظمتكم', 'ضوابط وخطوات موافقة ومراقبة', 'تسليم وتوثيق'],
  },
  'd365-implementation': {
    name: 'تطبيق Dynamics 365 Sales أو Customer Service', duration: '6–10 أسابيع',
    summary: 'Dynamics 365 مُعدّ حول طريقة عمل فريقكم.',
    includes: ['تصميم العمليات والإعداد', 'حتى 3 عمليات تكامل أو ترحيل بيانات', 'نموذج الأمان ولوحات Power BI', 'تدريب و30 يومًا من الدعم المكثف بعد الإطلاق'],
  },
  'power-apps-build': {
    name: 'بناء تطبيق Power Apps', duration: '3–6 أسابيع',
    summary: 'تطبيق أعمال واحد على مخطط Dataverse مُصمم بعناية.',
    includes: ['تطبيق قائم على النموذج أو تطبيق Canvas', 'نموذج بيانات Dataverse والأمان', 'حتى 5 تدفقات Power Automate', 'النشر عبر خطوط النشر'],
  },
  'power-pages-portal': {
    name: 'بوابة Power Pages', duration: '4–8 أسابيع',
    summary: 'بوابة خارجية آمنة للعملاء أو الشركاء أو الموردين.',
    includes: ['تسجيل الدخول وأدوار الويب', 'أذونات الجداول على Dataverse أو Dynamics 365', 'نماذج وقوائم وهوية بصرية', 'مراجعة أمنية قبل الإطلاق'],
  },
  'systems-integration': {
    name: 'تكامل الأنظمة', duration: '3–6 أسابيع',
    summary: 'ربط نظامين لتتدفق البيانات دون إعادة إدخالها.',
    includes: ['تكامل واحد، مثل CRM ↔ نظام الهاتف أو CRM ↔ ERP', 'مطابقة الحقول والمعرّفات لمنع التكرار', 'إعادة المحاولة وفحوص السلامة والتنبيهات', 'دليل تشغيل وتسليم'],
  },
  'power-bi-pack': {
    name: 'باقة تقارير Power BI / Fabric', duration: '3–4 أسابيع',
    summary: 'تقارير موثوقة مبنية على نموذج سليم.',
    includes: ['نموذج دلالي بمخطط النجمة', 'حتى 5 صفحات تقارير', 'أمان على مستوى الصفوف', 'إعداد التحديث المجدول'],
  },
  'kaizen-ppm-deployment': {
    name: 'نشر Kaizen PPM', duration: '4–8 أسابيع',
    summary: 'إعداد Kaizen PPM داخل بيئتكم الخاصة بسعر ثابت لمرة واحدة، دون رسوم لكل مستخدم.',
    includes: ['نشر Kaizen PPM وإعداده في بيئتكم', 'ترحيل بيانات Project Online أو Planner عند الحاجة', 'تدريب حسب الأدوار', '30 يومًا من الدعم المكثف، ثم خطة دعم مُدار'],
  },
  'power-platform-governance-setup': {
    name: 'إعداد حوكمة Power Platform', duration: '3–5 أسابيع',
    summary: 'ضوابط تتيح للجميع البناء بأمان.',
    includes: ['استراتيجية البيئات وسياسات منع فقدان البيانات', 'البيئات المُدارة', 'خطوط النشر وإدارة دورة حياة التطبيقات', 'لوحات مركز التميز'],
  },
  'support-essentials': {
    name: 'الدعم المُدار: الأساسي', duration: 'شهريًا', summary: 'حتى 10 ساعات شهريًا.',
    includes: ['إصلاحات وتعديلات صغيرة وأسئلة إدارية', 'تقرير شهري عن الحالة', 'رد بحلول يوم العمل التالي'],
  },
  'support-growth': {
    name: 'الدعم المُدار: النمو', duration: 'شهريًا', summary: 'حتى 25 ساعة شهريًا.',
    includes: ['كل ما في الباقة الأساسية', 'تحسينات صغيرة ومراجعات للتراخيص والحوكمة', 'اجتماع ربع سنوي لخارطة الطريق', 'رد ذو أولوية خلال يوم عمل واحد'],
  },
  'support-premium': {
    name: 'الدعم المُدار: المتميز', duration: 'شهريًا', summary: 'حتى 50 ساعة شهريًا.',
    includes: ['كل ما في باقة النمو', 'ميزات ووكلاء جدد', 'مسؤول مخصص واجتماع شهري لخارطة الطريق', 'رد في يوم العمل نفسه (ساعات العمل في المملكة المتحدة)'],
  },
};

export const packageText: Record<Exclude<Lang, 'en'>, Dict> = { de, ar };

/** Page-level wording for the Packages page in each language. */
export const packagesPageText = {
  en: {
    title: 'Fixed-Price Copilot, Dynamics 365 & Power Platform Packages',
    description: 'Fixed-price packages: Copilot readiness, Dynamics 365 health checks and implementations, Power Platform, AI agents, Power BI and managed support.',
    crumb: 'Packages',
    h1: 'Fixed scope. Fixed price. Weeks, not months.',
    lead: 'Pick a package, or tell us the problem and we will match one to it. The price is agreed before we start, and if we miss the agreed scope, we fix it at no extra cost.',
    quote: 'Get a fixed-price quote', proof: 'See what we’ve delivered', onPage: 'On this page', how: 'How fixed price works', questions: 'Questions',
    duration: 'Typical duration', talk: 'Talk to us', about: 'About this service', howLabel: 'How it works',
    note: ['Not sure which package fits?', 'Book a free 30-minute call', 'and we will recommend one, or tell you honestly if you don’t need us.'],
    faqTitle: 'Before you book', from: 'From', perMonth: '/ month',
    groups: {
      entry: { label: 'Start here', title: 'Entry packages', intro: 'Small, clearly scoped first steps. Each one ends with findings you can act on and, if you want it, a fixed-price quote for the next stage.' },
      project: { label: 'Build', title: 'Projects', intro: 'Fixed-scope delivery. Prices are typical starting points. After a short call we confirm the scope and a fixed price before any work starts.' },
      monthly: { label: 'Run', title: 'Monthly plans', intro: 'Managed support after go-live for anything we deploy, Kaizen PPM included: fixes, updates, admin help and small changes. Bigger changes are planned with you and quoted at a fixed price. Month to month: cancel with 30 days’ notice.' },
    },
  },
  de: {
    title: 'Festpreis-Pakete: Copilot, Dynamics 365 & Power Platform',
    description: 'Festpreis-Pakete: Copilot Readiness, Dynamics-365-Health-Checks und Implementierungen, Power Platform, KI-Agents, Power BI und Managed Support.',
    crumb: 'Festpreis-Pakete',
    h1: 'Fester Umfang. Fester Preis. Wochen statt Monate.',
    lead: 'Wählen Sie ein Paket oder beschreiben Sie uns Ihr Problem, und wir schlagen das passende vor. Der Preis wird vor Beginn vereinbart. Erfüllen wir den vereinbarten Umfang nicht, bessern wir ohne Mehrkosten nach.',
    quote: 'Festpreis-Angebot anfragen', proof: 'Unsere Referenzen ansehen (Englisch)', onPage: 'Auf dieser Seite', how: 'So funktioniert der Festpreis', questions: 'Häufige Fragen',
    duration: 'Typische Dauer', talk: 'Sprechen Sie mit uns', about: 'Zur Leistung (Englisch)', howLabel: 'So funktioniert es',
    note: ['Unsicher, welches Paket passt?', 'Buchen Sie ein kostenloses 30-Minuten-Gespräch', 'und wir empfehlen Ihnen eines oder sagen Ihnen ehrlich, wenn Sie uns nicht brauchen.'],
    faqTitle: 'Bevor Sie buchen', from: 'Ab', perMonth: '/ Monat',
    groups: {
      entry: { label: 'Einstieg', title: 'Einstiegspakete', intro: 'Kleine, klar abgegrenzte erste Schritte. Jedes Paket endet mit umsetzbaren Ergebnissen und auf Wunsch mit einem Festpreis-Angebot für die nächste Phase.' },
      project: { label: 'Umsetzen', title: 'Projekte', intro: 'Umsetzung mit festem Umfang. Die Preise sind typische Startwerte. Nach einem kurzen Gespräch bestätigen wir Umfang und Festpreis, bevor die Arbeit beginnt.' },
      monthly: { label: 'Betreiben', title: 'Monatliche Pläne', intro: 'Managed Support nach dem Go-live für alles, was wir bereitstellen, auch Kaizen PPM: Fehlerbehebungen, Updates, Admin-Hilfe und kleine Änderungen. Größere Änderungen planen wir gemeinsam und bieten sie zum Festpreis an. Monatlich mit 30 Tagen Frist kündbar.' },
    },
  },
  ar: {
    title: 'باقات بسعر ثابت: Copilot وDynamics 365 وPower Platform',
    description: 'باقات بسعر ثابت من KaizenAI: الجاهزية لـ Copilot، وفحص وتطبيق Dynamics 365، وبناء وحوكمة Power Platform، ووكلاء الذكاء الاصطناعي، وPower BI، والدعم المُدار.',
    crumb: 'الباقات',
    h1: 'نطاق ثابت. سعر ثابت. أسابيع لا أشهر.',
    lead: 'اختاروا باقة، أو أخبرونا بالمشكلة ونقترح عليكم الباقة المناسبة. نتفق على السعر قبل البدء، وإذا لم نلتزم بالنطاق المتفق عليه نصلح ذلك دون أي تكلفة إضافية.',
    quote: 'اطلبوا عرض سعر ثابت', proof: 'شاهدوا أعمالنا (بالإنجليزية)', onPage: 'في هذه الصفحة', how: 'كيف يعمل السعر الثابت', questions: 'أسئلة شائعة',
    duration: 'المدة المعتادة', talk: 'تحدثوا معنا', about: 'عن هذه الخدمة (بالإنجليزية)', howLabel: 'كيف نعمل',
    note: ['لستم متأكدين من الباقة المناسبة؟', 'احجزوا مكالمة مجانية مدتها 30 دقيقة', 'وسنقترح عليكم باقة، أو نخبركم بصراحة إن لم تكونوا بحاجة إلينا.'],
    faqTitle: 'قبل الحجز', from: 'ابتداءً من', perMonth: 'شهريًا',
    groups: {
      entry: { label: 'ابدأوا هنا', title: 'باقات البداية', intro: 'خطوات أولى صغيرة وواضحة النطاق. تنتهي كل باقة بنتائج قابلة للتنفيذ، وبعرض سعر ثابت للمرحلة التالية إن رغبتم.' },
      project: { label: 'التنفيذ', title: 'المشاريع', intro: 'تنفيذ بنطاق ثابت. الأسعار نقاط بداية معتادة، وبعد مكالمة قصيرة نؤكد النطاق والسعر الثابت قبل بدء أي عمل.' },
      monthly: { label: 'التشغيل', title: 'الخطط الشهرية', intro: 'دعم مُدار بعد الإطلاق لكل ما ننشره، بما في ذلك Kaizen PPM: إصلاحات وتحديثات ومساعدة إدارية وتعديلات صغيرة. التعديلات الأكبر نخطط لها معكم ونقدّمها بسعر ثابت. خطة شهرية يمكن إلغاؤها بإشعار قبل 30 يومًا.' },
    },
  },
} as const;

export const packageTermsI18n = {
  de: [
    { title: 'Einmal bereitstellen, dann ein Managed-Plan', body: 'Jede Lösung, auch Kaizen PPM, wird zu einem einmaligen Festpreis bereitgestellt. Nach dem Go-live wechseln Sie in einen monatlichen Managed-Support-Plan. Neue Funktionen und Änderungen planen wir gemeinsam und bieten sie vor Beginn zum Festpreis an.' },
    { title: 'Festpreis, vorab vereinbart', body: 'Nach einem kurzen Gespräch bestätigen wir Umfang und Festpreis schriftlich. Nichts beginnt ohne Ihre Zustimmung.' },
    { title: 'Unsere Garantie', body: 'Erfüllen wir den vereinbarten Umfang nicht, bessern wir ohne Mehrkosten nach.' },
    { title: 'Schneller mit KI', body: 'Wir arbeiten mit KI-gestützter Entwicklung. Die Umsetzung dauert Wochen statt Monate, und ein Teil dieser Ersparnis steckt im Preis.' },
    { title: 'Nicht enthalten', body: 'Die Preise verstehen sich in US-Dollar, ohne Microsoft-Lizenzen und ohne gegebenenfalls anfallende Steuern. Microsoft-Lizenzen beziehen Sie direkt bei Microsoft oder Ihrem Reseller.' },
  ],
  ar: [
    { title: 'نشر لمرة واحدة، ثم خطة مُدارة', body: 'كل حل، بما في ذلك Kaizen PPM، يُنشر بسعر ثابت لمرة واحدة. بعد الإطلاق تنتقلون إلى خطة دعم مُدار شهرية. الميزات الجديدة والتعديلات نخطط لها معكم ونقدّم لها سعرًا ثابتًا قبل بدء العمل.' },
    { title: 'سعر ثابت يُتفق عليه أولًا', body: 'بعد مكالمة قصيرة نؤكد النطاق والسعر الثابت كتابيًا. لا يبدأ أي عمل قبل موافقتكم.' },
    { title: 'ضماننا', body: 'إذا لم نلتزم بالنطاق المتفق عليه، نصلح ذلك دون أي تكلفة إضافية.' },
    { title: 'أسرع بالذكاء الاصطناعي', body: 'نعتمد على الهندسة المدعومة بالذكاء الاصطناعي، فيستغرق التنفيذ أسابيع لا أشهرًا، وجزء من هذا التوفير ينعكس على السعر.' },
    { title: 'ما لا يشمله السعر', body: 'الأسعار بالدولار الأمريكي ولا تشمل تراخيص Microsoft أو أي ضرائب مطبقة. تُشترى تراخيص Microsoft من Microsoft أو من موزعكم المعتمد.' },
  ],
};

export const packageFaqsI18n = {
  de: [
    { q: 'Ist Kaizen PPM ein Abonnement?', a: 'Nein. Kaizen PPM wird zu einem einmaligen Festpreis in Ihrem eigenen Microsoft-Tenant bereitgestellt, ohne Gebühr pro Nutzer an uns. Nach dem Go-live deckt ein Managed-Support-Plan Updates, Fehlerbehebungen und Hilfe ab; neue Funktionen bieten wir zum Festpreis an. Ihre Nutzer benötigen Lizenzen für Power Apps Premium oder Dynamics 365, die Sie bei Microsoft erwerben.' },
    { q: 'Was passiert, wenn sich der Umfang während des Projekts ändert?', a: 'Der Festpreis deckt den schriftlich vereinbarten Umfang ab. Wünschen Sie zusätzliche Leistungen, bepreisen wir sie als Änderungsanfrage, und Sie geben sie frei, bevor wir beginnen. Ohne Ihre Zustimmung kommt nichts auf Ihre Rechnung.' },
    { q: 'Wer erledigt die Arbeit?', a: 'Jedes Projekt wird von unserem Gründer geleitet, einem Power-Platform- und KI-Lösungsarchitekten mit acht Jahren Beratungserfahrung bei Microsoft Business Applications. Wo ein Paket es erfordert, kommen Spezialisten hinzu, und wir arbeiten durchgehend mit KI-gestützter Entwicklung.' },
    { q: 'In welcher Zeitzone arbeiten Sie?', a: 'Wir sitzen in Pakistan (UTC+5) und arbeiten remote mit Kunden weltweit. Unser Arbeitstag überschneidet sich mit dem Vormittag in Großbritannien und Europa sowie mit dem Arbeitstag am Golf. Termine mit Amerika und Australien legen wir an den Anfang oder das Ende unseres Tages.' },
    { q: 'Brauche ich zuerst Microsoft-Lizenzen?', a: 'Meist einige, ja, und sie sind in unseren Preisen nicht enthalten. Wir sagen Ihnen genau, welche Lizenzen ein Paket benötigt, bevor Sie sich festlegen. Sie kaufen sie bei Microsoft oder Ihrem Reseller.' },
    { q: 'Wie funktioniert die Bezahlung?', a: 'Einstiegspakete werden im Voraus bezahlt. Projekte werden in der Regel aufgeteilt: die Hälfte zum Start, die Hälfte beim Go-live. Monatliche Pläne werden monatlich im Voraus berechnet. Die Preise sind in US-Dollar; auf Wunsch nennen wir den Gegenwert in GBP oder EUR.' },
    { q: 'Was, wenn kein Paket passt?', a: 'Buchen Sie ein kostenloses 30-Minuten-Gespräch und schildern Sie Ihr Problem. Wir empfehlen ein Paket, erstellen ein individuelles Festpreis-Angebot oder sagen Ihnen ehrlich, wenn Sie uns nicht brauchen.' },
  ],
  ar: [
    { q: 'هل Kaizen PPM اشتراك؟', a: 'لا. يُنشر Kaizen PPM داخل بيئة Microsoft الخاصة بكم بسعر ثابت لمرة واحدة، دون رسوم لكل مستخدم ندفعها لنا. بعد الإطلاق تغطي خطة الدعم المُدار التحديثات والإصلاحات والمساعدة، والميزات الجديدة نقدّم لها سعرًا ثابتًا. يحتاج مستخدموكم إلى تراخيص Power Apps Premium أو Dynamics 365 من Microsoft.' },
    { q: 'ماذا لو تغيّر النطاق أثناء المشروع؟', a: 'يغطي السعر الثابت النطاق الذي نتفق عليه كتابيًا. إذا رغبتم في شيء إضافي، نسعّره كطلب تغيير وتوافقون عليه قبل أن نبدأ. لا يُضاف شيء إلى فاتورتكم دون موافقتكم.' },
    { q: 'من ينفّذ العمل؟', a: 'يقود كل مشروع مؤسسنا، وهو مهندس حلول Power Platform والذكاء الاصطناعي بخبرة ثماني سنوات في استشارات تطبيقات الأعمال من Microsoft. ينضم إلينا متخصصون حين تتطلب الباقة ذلك، ونعتمد الهندسة المدعومة بالذكاء الاصطناعي في كل مراحل العمل.' },
    { q: 'بأي منطقة زمنية تعملون؟', a: 'نحن في باكستان (UTC+5) ونعمل عن بُعد مع عملاء حول العالم. يتداخل يوم عملنا مع صباح المملكة المتحدة وأوروبا ومع يوم العمل في الخليج. أما مع الأمريكيتين وأستراليا فنحدد المكالمات في بداية يومنا أو نهايته.' },
    { q: 'هل أحتاج إلى تراخيص Microsoft أولًا؟', a: 'غالبًا تحتاجون إلى بعضها، وهي غير مشمولة في أسعارنا. نخبركم بدقة بالتراخيص التي تحتاجها كل باقة قبل أن تلتزموا، وتشترونها من Microsoft أو من موزعكم المعتمد.' },
    { q: 'كيف يتم الدفع؟', a: 'تُدفع باقات البداية مقدمًا. أما المشاريع فتُقسم عادةً: النصف عند البدء والنصف عند الإطلاق. وتُحتسب الخطط الشهرية شهريًا مقدمًا. الأسعار بالدولار الأمريكي، ويمكننا تقديم ما يعادلها بالجنيه الإسترليني أو اليورو.' },
    { q: 'ماذا لو لم تناسبني أي باقة؟', a: 'احجزوا مكالمة مجانية مدتها 30 دقيقة وأخبرونا بالمشكلة. سنقترح باقة، أو نعدّ عرض سعر ثابت مخصصًا، أو نخبركم بصراحة إن لم تكونوا بحاجة إلينا.' },
  ],
};
