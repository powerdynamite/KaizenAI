// The founder's Microsoft certifications, shown on the home and About pages and
// in the structured data. To link a badge to its proof, paste its Credly (or
// Microsoft Learn transcript) URL into `url`.

export interface Certification {
  code: string;
  name: string;
  level: 'Expert' | 'Associate' | 'Fundamentals';
  url?: string;
}

export const certifications: Certification[] = [
  { code: 'PL-600', name: 'Power Platform Solution Architect Expert', level: 'Expert' },
  { code: 'PL-400', name: 'Power Platform Developer Associate', level: 'Associate' },
  { code: 'PL-200', name: 'Power Platform Functional Consultant Associate', level: 'Associate' },
  { code: 'PL-100', name: 'Power Platform App Maker Associate', level: 'Associate' },
  { code: 'PL-900', name: 'Power Platform Fundamentals', level: 'Fundamentals' },
  { code: 'MB-910', name: 'Dynamics 365 Fundamentals (CRM)', level: 'Fundamentals' },
  { code: 'DP-900', name: 'Azure Data Fundamentals', level: 'Fundamentals' },
];
