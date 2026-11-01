import { homeMd, markdownResponse } from '../lib/markdown';
export const GET = () => markdownResponse(homeMd());
