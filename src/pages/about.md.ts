import { aboutMd, markdownResponse } from '../lib/markdown';
export const GET = () => markdownResponse(aboutMd());
