import { experienceMd, markdownResponse } from '../lib/markdown';
export const GET = () => markdownResponse(experienceMd());
