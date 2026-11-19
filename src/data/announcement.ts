// Slim, dismissible bar above the header. Change `id` whenever the message
// changes, so visitors who closed the old one see the new one. Set `active`
// to false to hide it everywhere.
import type { Lang } from '../i18n/strings';

export const announcement = {
  active: true,
  id: 'outage-fallback-2026-11',
  /** Path appended to each language's Packages page. */
  hash: '#outage-fallback-plan',
  text: {
    en: { badge: 'New', text: 'Microsoft 365 Outage Fallback Plan: be ready before the next outage.', link: 'Get a fixed-price quote' },
    de: { badge: 'Neu', text: 'Notfallplan für Microsoft-365-Ausfälle: vorbereitet sein, bevor der nächste kommt.', link: 'Festpreis-Angebot anfragen' },
    ar: { badge: 'جديد', text: 'خطة بديلة لانقطاع Microsoft 365: استعدوا قبل الانقطاع القادم.', link: 'اطلبوا عرض سعر ثابت' },
  } satisfies Record<Lang, { badge: string; text: string; link: string }>,
  close: { en: 'Close announcement', de: 'Hinweis schließen', ar: 'إغلاق الإعلان' } satisfies Record<Lang, string>,
};
