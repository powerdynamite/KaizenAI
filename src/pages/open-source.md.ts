import { openSourceMd, markdownResponse } from '../lib/markdown';
export const GET = () => markdownResponse(openSourceMd());
