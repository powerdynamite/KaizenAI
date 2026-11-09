// Interface text for the three site languages. English is the default; the
// German and Arabic sites cover the home and contact pages, and every other
// page is offered as a machine translation from the language switcher.

export type Lang = 'en' | 'de' | 'ar';

export const LANGS: { code: Lang; name: string; dir: 'ltr' | 'rtl'; home: string; contact: string }[] = [
  { code: 'en', name: 'English', dir: 'ltr', home: '/', contact: '/contact/' },
  { code: 'de', name: 'Deutsch', dir: 'ltr', home: '/de/', contact: '/de/kontakt/' },
  { code: 'ar', name: 'العربية', dir: 'rtl', home: '/ar/', contact: '/ar/contact/' },
];

export const langInfo = (l: Lang) => LANGS.find((x) => x.code === l)!;

const en = {
  nav: { services: 'Services', packages: 'Packages', ppm: 'Kaizen PPM', experience: 'Our work', kits: 'Starter kits', blog: 'Blog', about: 'About', contact: 'Contact us' },
  menu: 'Menu', close: 'Close',
  toLight: 'Switch to light mode', toDark: 'Switch to dark mode',
  language: 'Language', machine: 'machine translation',
  ctaBar: 'Free consultation',
  cta: {
    title: 'Have a process that should run itself?',
    body: 'Tell us what you are trying to fix. You get an honest answer on whether, and how, Microsoft and AI can help, usually within a working day.',
    button: 'Book a free consultation', whatsapp: 'Or message on WhatsApp', next: 'Next step',
  },
  footer: {
    services: 'Services', studio: 'Studio', write: 'Write or call', agents: 'For AI agents', privacy: 'Privacy',
    motto: 'continuous improvement · remote-first, working worldwide',
    trademark: 'Microsoft, Dynamics 365, Power Platform and Copilot are trademarks of the Microsoft group of companies.',
    built: 'Set in Sora & Inter. Built with Astro.',
  },
  form: {
    name: 'Name', email: 'Work email', company: 'Company', phone: 'Phone / WhatsApp', optional: 'optional',
    topic: 'Topic', message: 'Message', placeholder: 'What are you trying to achieve, and by when?', honeypot: 'Leave this field empty',
    send: 'Send message', invalid: 'Please fill in your name, a valid email and a message.', opening: 'Opening your email app…',
    sending: 'Sending…', thanks: 'Thanks! Your message is on its way. We will reply soon.',
    failed: 'Sorry, that did not send. Please email us at', aboutPrefix: 'I’m interested in something like',
    topics: ['Agentic AI', 'Copilot & Cowork', 'Dynamics 365 CRM', 'Power Platform', 'Data & Analytics', 'Systems Integration', 'Infra & DevSecOps', 'Kaizen PPM demo', 'Something else'],
  },
  contact: {
    title: 'Contact KaizenAI: Book a Free Consultation',
    description: 'Talk to KaizenAI about AI agents, Copilot and Cowork, Dynamics 365, Power Platform, Power BI and Fabric, Azure DevSecOps or a Kaizen PPM demo. Remote-first, working with clients worldwide.',
    crumb: 'Contact', h1: 'Tell us what you want to improve.',
    lead: 'A few lines are enough. We usually reply within one working day (Pakistan time, UTC+5).',
    email: 'Email', moreEmail: 'Specific inboxes', salesEmail: 'Sales & proposals', supportEmail: 'Kaizen PPM support', careersEmail: 'Careers', phone: 'Phone', whatsapp: 'WhatsApp', whatsappLink: 'Message us →', linkedin: 'LinkedIn', linkedinLink: 'Follow KaizenAI →',
    how: 'How we work', workMode: 'Remote-first, working with clients worldwide.', homeBase: 'Home base', other: 'Other ways to reach us',
  },
};

export type Strings = typeof en;

const de: Strings = {
  nav: { services: 'Leistungen', packages: 'Festpreis-Pakete', ppm: 'Kaizen PPM', experience: 'Referenzen', kits: 'Starter-Kits', blog: 'Blog', about: 'Über uns', contact: 'Kontakt' },
  menu: 'Menü', close: 'Schließen',
  toLight: 'Zum hellen Modus wechseln', toDark: 'Zum dunklen Modus wechseln',
  language: 'Sprache', machine: 'maschinelle Übersetzung',
  ctaBar: 'Kostenlose Beratung',
  cta: {
    title: 'Haben Sie einen Prozess, der von selbst laufen sollte?',
    body: 'Erzählen Sie uns, was Sie verbessern möchten. Sie erhalten eine ehrliche Einschätzung, ob und wie Microsoft und KI helfen können, meist innerhalb eines Werktags.',
    button: 'Kostenlose Beratung buchen', whatsapp: 'Oder per WhatsApp schreiben', next: 'Nächster Schritt',
  },
  footer: {
    services: 'Leistungen', studio: 'Unternehmen', write: 'Schreiben oder anrufen', agents: 'Für KI-Agenten', privacy: 'Datenschutz',
    motto: 'kontinuierliche Verbesserung · remote-first, weltweit tätig',
    trademark: 'Microsoft, Dynamics 365, Power Platform und Copilot sind Marken der Microsoft-Unternehmensgruppe.',
    built: 'Gesetzt in Sora & Inter. Erstellt mit Astro.',
  },
  form: {
    name: 'Name', email: 'Geschäftliche E-Mail', company: 'Unternehmen', phone: 'Telefon / WhatsApp', optional: 'optional',
    topic: 'Thema', message: 'Nachricht', placeholder: 'Was möchten Sie erreichen, und bis wann?', honeypot: 'Dieses Feld bitte leer lassen',
    send: 'Nachricht senden', invalid: 'Bitte geben Sie Ihren Namen, eine gültige E-Mail-Adresse und eine Nachricht ein.', opening: 'Ihr E-Mail-Programm wird geöffnet …',
    sending: 'Wird gesendet …', thanks: 'Vielen Dank! Ihre Nachricht ist unterwegs. Wir melden uns bald.',
    failed: 'Leider hat das Senden nicht geklappt. Bitte schreiben Sie uns an', aboutPrefix: 'Ich interessiere mich für etwas wie',
    topics: ['Agentische KI', 'Copilot & Cowork', 'Dynamics 365 CRM', 'Power Platform', 'Daten & Analytics', 'Systemintegration', 'Infrastruktur & DevSecOps', 'Kaizen PPM Demo', 'Etwas anderes'],
  },
  contact: {
    title: 'Kontakt zu KaizenAI: Kostenlose Beratung',
    description: 'Sprechen Sie mit KaizenAI über KI-Agenten, Copilot und Cowork, Dynamics 365, Power Platform, Azure DevSecOps oder eine Kaizen PPM Demo. Remote-first, weltweit tätig.',
    crumb: 'Kontakt', h1: 'Erzählen Sie uns, was Sie verbessern möchten.',
    lead: 'Ein paar Zeilen genügen. Wir antworten meist innerhalb eines Werktags (pakistanische Zeit, UTC+5). Gerne auf Deutsch oder Englisch.',
    email: 'E-Mail', moreEmail: 'Weitere Postfächer', salesEmail: 'Vertrieb & Angebote', supportEmail: 'Kaizen PPM Support', careersEmail: 'Karriere', phone: 'Telefon', whatsapp: 'WhatsApp', whatsappLink: 'Nachricht senden →', linkedin: 'LinkedIn', linkedinLink: 'KaizenAI folgen →',
    how: 'So arbeiten wir', workMode: 'Remote-first, mit Kunden weltweit.', homeBase: 'Standort', other: 'Weitere Kontaktmöglichkeiten',
  },
};

const ar: Strings = {
  nav: { services: 'الخدمات', packages: 'الباقات', ppm: 'Kaizen PPM', experience: 'أعمالنا', kits: 'الحزم الجاهزة', blog: 'المدونة', about: 'من نحن', contact: 'تواصل معنا' },
  menu: 'القائمة', close: 'إغلاق',
  toLight: 'التبديل إلى الوضع الفاتح', toDark: 'التبديل إلى الوضع الداكن',
  language: 'اللغة', machine: 'ترجمة آلية',
  ctaBar: 'استشارة مجانية',
  cta: {
    title: 'هل لديكم إجراء يجب أن يعمل تلقائيًا؟',
    body: 'أخبرونا بما تريدون تحسينه، وسنقدّم لكم إجابة صريحة حول ما إذا كانت حلول Microsoft والذكاء الاصطناعي ستساعدكم وكيف، غالبًا خلال يوم عمل واحد.',
    button: 'احجزوا استشارة مجانية', whatsapp: 'أو راسلونا عبر واتساب', next: 'الخطوة التالية',
  },
  footer: {
    services: 'الخدمات', studio: 'الشركة', write: 'راسلونا أو اتصلوا بنا', agents: 'لوكلاء الذكاء الاصطناعي', privacy: 'الخصوصية',
    motto: 'تحسين مستمر · العمل عن بُعد مع عملاء حول العالم',
    trademark: 'Microsoft وDynamics 365 وPower Platform وCopilot علامات تجارية لمجموعة شركات Microsoft.',
    built: 'مبني باستخدام Astro.',
  },
  form: {
    name: 'الاسم', email: 'البريد الإلكتروني للعمل', company: 'الشركة', phone: 'الهاتف / واتساب', optional: 'اختياري',
    topic: 'الموضوع', message: 'الرسالة', placeholder: 'ما الذي تريدون تحقيقه، وما الموعد المستهدف؟', honeypot: 'اتركوا هذا الحقل فارغًا',
    send: 'إرسال الرسالة', invalid: 'يرجى إدخال الاسم وبريد إلكتروني صحيح ورسالة.', opening: 'جارٍ فتح تطبيق البريد الإلكتروني…',
    sending: 'جارٍ الإرسال…', thanks: 'شكرًا لكم! تم إرسال رسالتكم وسنرد قريبًا.',
    failed: 'عذرًا، لم يتم الإرسال. يرجى مراسلتنا على', aboutPrefix: 'أنا مهتم بشيء مثل',
    topics: ['وكلاء الذكاء الاصطناعي', 'Copilot وCowork', 'Dynamics 365 CRM', 'Power Platform', 'البيانات والتحليلات', 'تكامل الأنظمة', 'البنية التحتية وDevSecOps', 'عرض Kaizen PPM', 'موضوع آخر'],
  },
  contact: {
    title: 'تواصل مع KaizenAI: احجز استشارة مجانية',
    description: 'تحدثوا مع KaizenAI عن وكلاء الذكاء الاصطناعي وCopilot وCowork وDynamics 365 وPower Platform وAzure DevSecOps أو عرض Kaizen PPM. نعمل عن بُعد مع عملاء حول العالم.',
    crumb: 'تواصل معنا', h1: 'أخبرونا بما تريدون تحسينه.',
    lead: 'بضعة أسطر تكفي. نرد عادةً خلال يوم عمل واحد (بتوقيت باكستان، UTC+5). يمكنكم الكتابة بالعربية أو الإنجليزية.',
    email: 'البريد الإلكتروني', moreEmail: 'صناديق بريد مخصصة', salesEmail: 'المبيعات والعروض', supportEmail: 'دعم Kaizen PPM', careersEmail: 'الوظائف', phone: 'الهاتف', whatsapp: 'واتساب', whatsappLink: '← راسلونا', linkedin: 'LinkedIn', linkedinLink: '← تابعوا KaizenAI',
    how: 'طريقة عملنا', workMode: 'نعمل عن بُعد مع عملاء حول العالم.', homeBase: 'المقر', other: 'طرق أخرى للتواصل',
  },
};

export const STRINGS: Record<Lang, Strings> = { en, de, ar };
export const t = (l: Lang) => STRINGS[l];

/** Google's free translation proxy for pages without a hand translation. */
export const machineUrl = (path: string, l: Lang) =>
  `https://kaizenai-systems.translate.goog${path}?_x_tr_sl=en&_x_tr_tl=${l}&_x_tr_hl=${l}`;
