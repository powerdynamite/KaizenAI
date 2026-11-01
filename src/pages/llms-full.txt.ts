// /llms-full.txt: the full text of the site in one Markdown document.
import { services } from '../data/services';
import { homeMd, servicesIndexMd, serviceMd, ppmMd, starterKitsMd, aboutMd, contactMd, publishedPosts, postMd } from '../lib/markdown';

export async function GET() {
  const posts = await publishedPosts();
  const parts = [homeMd(), servicesIndexMd(), ...services.map(serviceMd), ppmMd(), starterKitsMd(), aboutMd(), contactMd(), ...posts.map(postMd)];
  return new Response(parts.join('\n\n---\n\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
