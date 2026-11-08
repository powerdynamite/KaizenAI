import { packagesMd, markdownResponse } from '../lib/markdown';
export const GET = () => markdownResponse(packagesMd());
