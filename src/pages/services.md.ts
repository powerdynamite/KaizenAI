import { servicesIndexMd, markdownResponse } from '../lib/markdown';
export const GET = () => markdownResponse(servicesIndexMd());
