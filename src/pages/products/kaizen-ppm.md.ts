import { ppmMd, markdownResponse } from '../../lib/markdown';
export const GET = () => markdownResponse(ppmMd());
