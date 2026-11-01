// Rewrites root-relative URLs in the built site when GitHub Pages serves it from a
// sub-path (e.g. https://powerdynamite.github.io/KaizenAI/ before the custom domain is live).
// Usage: node scripts/rebase-for-subpath.mjs "/KaizenAI"   (empty or "/" = no-op)
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const base = (process.argv[2] || '').replace(/\/+$/, '');
if (!base) {
  console.log('No base path: site is served from the domain root, nothing to rewrite.');
  process.exit(0);
}
if (!/^\/[A-Za-z0-9._-]+(\/[A-Za-z0-9._-]+)*$/.test(base)) {
  console.error(`Refusing to use unexpected base path: ${base}`);
  process.exit(1);
}

const DIST = 'dist';
const exts = new Set(['.html', '.css', '.js', '.webmanifest', '.xml']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (exts.has(extname(entry.name))) yield p;
  }
}

let changed = 0;
for await (const file of walk(DIST)) {
  const src = await readFile(file, 'utf8');
  let out = src
    // attributes holding a single root-relative URL (not protocol-relative //)
    .replace(/\b(href|src|action|poster|data)=(["'])\/(?!\/)/g, `$1=$2${base}/`)
    // srcset lists and CSS url() pointing at built assets
    .replace(/([\s,"'(])\/_astro\//g, `$1${base}/_astro/`)
    // web manifest icon/start paths
    .replace(/"(src|start_url)":\s*"\/(?!\/)/g, `"$1": "${base}/`);
  // undo accidental double prefixes
  out = out.split(`${base}${base}/`).join(`${base}/`);
  if (out !== src) {
    await writeFile(file, out);
    changed++;
  }
}
console.log(`Rebased ${changed} files onto ${base}/`);
