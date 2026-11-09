// Hand-written German and Arabic home pages. Detail pages stay in English and
// are linked from here.
import type { Faq } from '../data/services';

export interface LocalHome {
  title: string;
  description: string;
  eyebrow: string;
  h1: [string, string]; // plain part, highlighted part
  lead: string;
  primary: string;
  secondary: string;
  facts: [string, string][];
  servicesLabel: string;
  servicesTitle: string;
  servicesNote: string;
  services: { slug: string; title: string; short: string }[];
  ppmLabel: string;
  ppmTitle: string;
  ppmText: string;
  ppmPoints: string[];
  ppmLink: string;
  workLabel: string;
  workTitle: string;
  work: { slug: string; title: string; text: string }[];
  workLink: string;
  methodLabel: string;
  methodTitle: string;
  method: { title: string; body: string }[];
  faqTitle: string;
  faqs: Faq[];
  englishNote: string;
}

export const HOME: Record<'de' | 'ar', LocalHome> = {
  de: {
    title: 'KaizenAI: KI-Agenten, Copilot & Dynamics 365 Beratung',
    description: 'KaizenAI ist eine Remote-first-Beratung für KI-Agenten, Microsoft 365 Copilot und Cowork, Dynamics 365, Power Platform und Systemintegration. Weltweit tätig.',
    eyebrow: 'Microsoft & KI · remote-first, weltweit tätig',
    h1: ['KI-Agenten und Copilot auf dem Microsoft-Stack, ', 'den Sie bereits nutzen.'],
    lead: 'KaizenAI entwickelt KI-Agenten, führt Copilot und Cowork ein und setzt Dynamics 365 und die Power Platform um, auf sicheren Azure-Grundlagen. Wir starten klein und verbessern jede Woche ein Stück.',
    primary: 'Kostenlose Beratung buchen',
    secondary: 'Kaizen PPM ansehen',
    facts: [
      ['Leistungen', 'KI-Agenten · Copilot & Cowork · Dynamics 365 CRM · Power Platform · Power BI & Fabric · Integration · Azure DevSecOps'],
      ['Produkt', 'Kaizen PPM, Projekt- und Portfoliomanagement auf Dataverse'],
      ['Modell', 'Results as a Service: ein vereinbartes Ergebnis zum Festpreis'],
      ['Arbeitsweise', 'Remote-first, mit Kunden weltweit'],
      ['Antwort', 'Meist innerhalb eines Werktags'],
    ],
    servicesLabel: 'Leistungen',
    servicesTitle: 'Was wir tun',
    servicesNote: 'Die Detailseiten sind auf Englisch.',
    services: [
      { slug: 'ai-agents', title: 'Agentische KI', short: 'KI-Agenten, die in Ihren Systemen handeln, mit klaren Leitplanken und einem Menschen, der wichtige Schritte freigibt.' },
      { slug: 'copilot-cowork', title: 'Copilot & Cowork', short: 'Microsoft 365 Copilot, Copilot Studio und Cowork, die mit Ihren eigenen Daten wirklich nützlich werden.' },
      { slug: 'dynamics-365', title: 'Dynamics 365 CRM', short: 'Sales, Customer Service und Field Service, passend zu der Art, wie Ihr Team arbeitet.' },
      { slug: 'power-platform', title: 'Power Platform', short: 'Apps, Automatisierung und Portale auf Dataverse, gut gesteuert und langlebig gebaut.' },
      { slug: 'data-analytics', title: 'Daten & Analytics', short: 'Power BI und Microsoft Fabric: Berichte, denen man vertraut, bereit für Copilot und KI-Agenten.' },
      { slug: 'systems-integration', title: 'Systemintegration', short: 'CRM, Telefonie, ERP und Fachanwendungen verbunden, damit Daten nur einmal erfasst werden.' },
      { slug: 'infra-devsecops', title: 'Infrastruktur & DevSecOps', short: 'Sichere Azure-Grundlagen und Pipelines, die zuverlässig ausliefern.' },
    ],
    ppmLabel: 'Produkt',
    ppmTitle: 'Kaizen PPM',
    ppmText: 'Projekt- und Portfoliomanagement direkt in Ihrem eigenen Dataverse, von der ersten Idee bis zum abgeschlossenen Projekt.',
    ppmPoints: [
      'Interaktives Gantt-Diagramm, Kanban-Board, Finanzen, Ressourcen und Risiken',
      'Eine naheliegende Lösung für Teams, die Microsoft Project Online verlassen',
      'Ihre Daten bleiben in Ihrem eigenen Microsoft 365 Tenant',
      'Bereit für Copilot und Cowork, mit KI, die erklärt statt entscheidet',
    ],
    ppmLink: 'Kaizen PPM entdecken (Englisch)',
    workLabel: 'Referenzen',
    workTitle: 'Kürzlich umgesetzt',
    work: [
      { slug: 'timesheet-compliance-agent', title: 'KI-Agent für Zeiterfassung', text: 'Ein Azure-OpenAI-Agent in Microsoft Teams erinnert per Adaptive Card an fehlende Zeiteinträge, informiert Genehmiger und fasst den Stand im Teamkanal zusammen.' },
      { slug: 'portfolio-in-plain-language', title: 'Das Projektportfolio in Alltagssprache fragen', text: 'Ein Copilot-Cowork-Plugin beantwortet Fragen zu Projektstatus, Portfolio und Ressourcen direkt aus den PPM-Daten in Dataverse.' },
      { slug: 'service-desk-ticket-handling', title: 'KI-gestützter Service Desk', text: 'Ein eigener MCP-Connector gibt Claude und Microsoft 365 Copilot sicheren Zugriff auf Jira Service Management, für Triage, Kommentare und Statuswechsel.' },
    ],
    workLink: 'Alle neun Beispiele ansehen (Englisch)',
    methodLabel: 'Vorgehen',
    methodTitle: 'Kleine Schritte, die sich summieren.',
    method: [
      { title: 'Verstehen', body: 'Wir beginnen beim geschäftlichen Problem, nicht bei der Lizenz, und klären, wie „besser“ in Zahlen aussieht.' },
      { title: 'Klein bauen', body: 'Wir liefern in wenigen Wochen eine nutzbare erste Version, und das Feedback formt den nächsten Schritt.' },
      { title: 'Laufend verbessern', body: 'Kaizen heißt Veränderung zum Besseren. Nach dem Go-live messen, verfeinern und automatisieren wir Schritt für Schritt.' },
    ],
    faqTitle: 'Häufige Fragen',
    faqs: [
      { q: 'Was macht KaizenAI?', a: 'KaizenAI ist eine KI-orientierte Microsoft-Beratung. Wir entwickeln KI-Agenten, führen Microsoft 365 Copilot, Copilot Studio und Cowork ein, setzen Dynamics 365 CRM und die Power Platform um und bauen sichere Azure-Infrastruktur. Außerdem entwickeln wir Kaizen PPM.' },
      { q: 'Arbeiten Sie mit Kunden in Deutschland, Österreich und der Schweiz?', a: 'Ja. Wir arbeiten remote mit Kunden weltweit und haben bereits mit Microsoft-Partnern in Europa zusammengearbeitet. Die Kommunikation erfolgt auf Englisch; Anfragen auf Deutsch sind willkommen.' },
      { q: 'Wie setzen Sie KI sicher ein?', a: 'Jeder Agent arbeitet mit Ihren eigenen Daten, sieht nur, was der jeweilige Nutzer sehen darf, nennt seine Quellen, protokolliert seine Aktionen und fragt vor wichtigen Schritten einen Menschen.' },
      { q: 'Bleiben unsere Daten in unserem Tenant?', a: 'Ja. Unsere Lösungen laufen in Ihrem eigenen Microsoft 365 und Azure. Sie besitzen den Quellcode und die Dokumentation.' },
      { q: 'Wie beginnt eine Zusammenarbeit?', a: 'Mit einer kostenlosen Beratung. Danach schlagen wir einen kleinen ersten Schritt vor, der in Wochen statt Monaten umgesetzt werden kann.' },
    ],
    englishNote: 'Weitere Seiten, der Blog und die Detailbeschreibungen sind auf Englisch verfügbar.',
  },
  ar: {
    title: 'KaizenAI: وكلاء الذكاء الاصطناعي وCopilot وDynamics 365',
    description: 'KaizenAI شركة استشارات تعمل عن بُعد في وكلاء الذكاء الاصطناعي وMicrosoft 365 Copilot وCowork وDynamics 365 وPower Platform وتكامل الأنظمة، مع عملاء حول العالم.',
    eyebrow: 'Microsoft والذكاء الاصطناعي · نعمل عن بُعد مع عملاء حول العالم',
    h1: ['وكلاء ذكاء اصطناعي وCopilot مبنيون على منظومة Microsoft ', 'التي تستخدمونها بالفعل.'],
    lead: 'تبني KaizenAI وكلاء الذكاء الاصطناعي، وتطلق Copilot وCowork، وتنفّذ Dynamics 365 وPower Platform على أسس Azure آمنة. نبدأ بخطوة صغيرة ونحسّن قليلًا كل أسبوع.',
    primary: 'احجزوا استشارة مجانية',
    secondary: 'تعرّفوا على Kaizen PPM',
    facts: [
      ['الخدمات', 'وكلاء الذكاء الاصطناعي · Copilot وCowork · Dynamics 365 CRM · Power Platform · Power BI وFabric · تكامل الأنظمة · Azure DevSecOps'],
      ['المنتج', 'Kaizen PPM لإدارة المشاريع والمحافظ على Dataverse'],
      ['النموذج', 'النتائج كخدمة: نتيجة متفق عليها بسعر ثابت'],
      ['طريقة العمل', 'عن بُعد مع عملاء حول العالم'],
      ['الرد', 'عادةً خلال يوم عمل واحد'],
    ],
    servicesLabel: 'الخدمات',
    servicesTitle: 'ما نقدّمه',
    servicesNote: 'صفحات التفاصيل متوفرة باللغة الإنجليزية.',
    services: [
      { slug: 'ai-agents', title: 'وكلاء الذكاء الاصطناعي', short: 'وكلاء ذكاء اصطناعي يعملون داخل أنظمتكم، بضوابط واضحة ومراجعة بشرية لكل خطوة مهمة.' },
      { slug: 'copilot-cowork', title: 'Copilot وCowork', short: 'نجعل Microsoft 365 Copilot وCopilot Studio وCowork مفيدة فعلًا مع بياناتكم الخاصة.' },
      { slug: 'dynamics-365', title: 'Dynamics 365 CRM', short: 'المبيعات وخدمة العملاء والخدمة الميدانية، مصمّمة حول طريقة عمل فريقكم.' },
      { slug: 'power-platform', title: 'Power Platform', short: 'تطبيقات وأتمتة وبوابات على Dataverse، بحوكمة سليمة وبناء يدوم.' },
      { slug: 'data-analytics', title: 'البيانات والتحليلات', short: 'تقارير موثوقة على Power BI وMicrosoft Fabric، جاهزة لـ Copilot ووكلاء الذكاء الاصطناعي.' },
      { slug: 'systems-integration', title: 'تكامل الأنظمة', short: 'ربط أنظمة CRM والهاتف وERP والتطبيقات التشغيلية لإدخال البيانات مرة واحدة فقط.' },
      { slug: 'infra-devsecops', title: 'البنية التحتية وDevSecOps', short: 'أسس Azure آمنة وخطوط نشر موثوقة في كل إصدار.' },
    ],
    ppmLabel: 'المنتج',
    ppmTitle: 'Kaizen PPM',
    ppmText: 'إدارة المشاريع والمحافظ داخل Dataverse الخاص بكم، من الفكرة الأولى حتى إغلاق المشروع.',
    ppmPoints: [
      'مخطط Gantt تفاعلي ولوحة Kanban وإدارة المالية والموارد والمخاطر',
      'بديل طبيعي للفرق التي تنتقل من Microsoft Project Online',
      'تبقى بياناتكم داخل بيئة Microsoft 365 الخاصة بكم',
      'جاهز لـ Copilot وCowork، بذكاء اصطناعي يشرح ولا يقرّر بالنيابة عنكم',
    ],
    ppmLink: 'استكشفوا Kaizen PPM (بالإنجليزية)',
    workLabel: 'أعمالنا',
    workTitle: 'أعمال نُفّذت مؤخرًا',
    work: [
      { slug: 'timesheet-compliance-agent', title: 'وكيل ذكاء اصطناعي لالتزام سجلات الوقت', text: 'وكيل يعمل بـ Azure OpenAI داخل Microsoft Teams يرسل تذكيرات شخصية عبر Adaptive Cards، وينبّه المعتمدين، وينشر ملخصًا في قناة الفريق.' },
      { slug: 'portfolio-in-plain-language', title: 'اسألوا محفظة مشاريعكم بلغة عادية', text: 'إضافة لـ Copilot Cowork تجيب عن أسئلة حالة المشاريع والمحفظة والموارد مباشرةً من بيانات PPM في Dataverse.' },
      { slug: 'service-desk-ticket-handling', title: 'مكتب خدمة مدعوم بالذكاء الاصطناعي', text: 'موصل MCP مخصص يمنح Claude وMicrosoft 365 Copilot وصولًا آمنًا إلى Jira Service Management لفرز التذاكر والتعليق عليها وتحديث حالتها.' },
    ],
    workLink: 'شاهدوا الأمثلة التسعة كاملة (بالإنجليزية)',
    methodLabel: 'منهجيتنا',
    methodTitle: 'خطوات صغيرة تتراكم نتائجها.',
    method: [
      { title: 'الفهم', body: 'نبدأ من المشكلة التشغيلية لا من الترخيص، ونحدد كيف يبدو التحسّن بالأرقام.' },
      { title: 'البناء على مراحل صغيرة', body: 'نسلّم نسخة أولى قابلة للاستخدام خلال أسابيع، وتوجّه ملاحظاتكم المرحلة التالية.' },
      { title: 'التحسين المستمر', body: 'كايزن تعني التغيير نحو الأفضل. بعد الإطلاق نقيس ونحسّن ونؤتمت خطوة بخطوة.' },
    ],
    faqTitle: 'أسئلة شائعة',
    faqs: [
      { q: 'ما الذي تقدّمه KaizenAI؟', a: 'KaizenAI شركة استشارات تركّز على الذكاء الاصطناعي ضمن منظومة Microsoft. نبني وكلاء الذكاء الاصطناعي، ونطلق Microsoft 365 Copilot وCopilot Studio وCowork، وننفّذ Dynamics 365 CRM وPower Platform وPower BI وMicrosoft Fabric، ونبني بنية Azure آمنة. كما نطوّر منتج Kaizen PPM.' },
      { q: 'هل تعملون مع عملاء في الإمارات والسعودية ودول الخليج؟', a: 'نعم. نعمل عن بُعد مع عملاء حول العالم، وسبق أن عملنا مع شركاء Microsoft في الشرق الأوسط. التواصل باللغة الإنجليزية، ونرحّب بالاستفسارات بالعربية.' },
      { q: 'كيف تستخدمون الذكاء الاصطناعي بأمان؟', a: 'كل وكيل يعمل على بياناتكم الخاصة، ولا يرى إلا ما يحق للمستخدم رؤيته، ويذكر مصادره، ويسجّل إجراءاته، ويطلب موافقة شخص قبل أي خطوة مهمة.' },
      { q: 'هل تبقى بياناتنا داخل بيئتنا؟', a: 'نعم. تعمل حلولنا داخل Microsoft 365 وAzure الخاصين بكم، وتملكون الشيفرة المصدرية والتوثيق.' },
      { q: 'كيف يبدأ التعاون؟', a: 'باستشارة مجانية، ثم نقترح خطوة أولى صغيرة يمكن تنفيذها خلال أسابيع لا أشهر.' },
    ],
    englishNote: 'باقي الصفحات والمدونة وتفاصيل الخدمات متوفرة باللغة الإنجليزية.',
  },
};
