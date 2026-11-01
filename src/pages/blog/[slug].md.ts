import type { APIRoute } from 'astro';
import { publishedPosts, postMd, markdownResponse } from '../../lib/markdown';
export const getStaticPaths = async () => (await publishedPosts()).map((post) => ({ params: { slug: post.id }, props: { post } }));
export const GET: APIRoute = ({ props }) => markdownResponse(postMd(props.post as any));
