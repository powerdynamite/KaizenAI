import type { APIRoute } from 'astro';
import { services, type Service } from '../../data/services';
import { serviceMd, markdownResponse } from '../../lib/markdown';
export const getStaticPaths = () => services.map((s) => ({ params: { slug: s.slug }, props: { service: s } }));
export const GET: APIRoute = ({ props }) => markdownResponse(serviceMd(props.service as Service));
