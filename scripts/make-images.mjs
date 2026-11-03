// Renders on-brand sharing images with the preinstalled Playwright Chromium.
//   node scripts/make-images.mjs            -> every image in scripts/images.json
//   node scripts/make-images.mjs <id> ...   -> only those ids
// Each spec: { id, kind: "og" | "linkedin", out, eyebrow, title (may use <em>), items[], foot? }
// "og" is 1200x630 (link previews); "linkedin" is 1200x1200 (post images).
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { chromium } = createRequire(import.meta.url)('playwright');
const specs = JSON.parse(readFileSync(resolve(root, 'scripts/images.json'), 'utf8'));
const only = process.argv.slice(2);
const font = (p) => `file://${resolve(root, 'node_modules', p)}`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/&lt;(\/?)em>/g, '<$1em>');
const logo = (n) => `<svg width="${n}" height="${n}" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#F7F5F0"/><rect x="13" y="38" width="10" height="13" rx="2.5" fill="#0E1726"/><rect x="27" y="28" width="10" height="23" rx="2.5" fill="#0E1726"/><rect x="41" y="13" width="10" height="38" rx="2.5" fill="#E2492F"/></svg>`;

const base = `
@font-face{font-family:S;src:url(${font('@fontsource-variable/sora/files/sora-latin-wght-normal.woff2')});font-weight:100 900}
@font-face{font-family:I;src:url(${font('@fontsource-variable/inter/files/inter-latin-wght-normal.woff2')});font-weight:100 900}
body{margin:0}
#c{background:#0E1726;color:#F7F5F0;position:relative;overflow:hidden;font-family:I;box-sizing:border-box}
.top{display:flex;align-items:center;gap:14px;font:700 28px S;letter-spacing:-0.8px}.top b{color:#E2492F}
.eyebrow{font:600 19px I;letter-spacing:3px;text-transform:uppercase;color:#9aa5b8}
h1{margin:14px 0 0;font-family:S;font-weight:700}h1 em{font-style:normal;color:#E2492F}
ol{list-style:none;margin:0;padding:0;counter-reset:r}
li{counter-increment:r;display:flex;border-bottom:2px solid #1c2638;color:#e8ecf3}
li::before{content:counter(r,decimal-leading-zero);font-family:S;font-weight:700;color:#E2492F}
.foot{position:absolute;color:#9aa5b8;font-family:I;font-weight:500}
.sub{margin:18px 0 0;font:400 25px/1.4 I;color:#c9d1de;max-width:640px}`;

const og = (s) => `<style>${base}
#c{width:1200px;height:630px;padding:64px 72px}
.eyebrow{margin-top:52px}
h1{font-size:54px;line-height:1.1;letter-spacing:-1.6px;max-width:660px}
ol{position:absolute;right:72px;top:150px;width:300px}
li{gap:14px;padding:11px 0;font:500 19px/1.3 I}li::before{font-size:16px;padding-top:2px}
.foot{left:72px;bottom:58px;font-size:22px}
</style><div id="c"><div class="top">${logo(46)}<span>Kaizen<b>AI</b></span></div>
<div class="eyebrow">${esc(s.eyebrow)}</div><h1>${esc(s.title)}</h1>${s.sub ? `<p class="sub">${esc(s.sub)}</p>` : ''}
<ol>${s.items.slice(0, 5).map((i) => `<li>${esc(i)}</li>`).join('')}</ol>
<div class="foot">${esc(s.foot || 'kaizenai.systems')}</div></div>`;

const li = (s) => `<style>${base}
#c{width:1200px;height:1200px;padding:84px 88px}
.top{gap:16px;font-size:30px}
.eyebrow{margin-top:70px;font-size:22px}
h1{margin-top:18px;font-size:70px;line-height:1.06;letter-spacing:-2.2px;max-width:940px}
ol{margin-top:56px;border-top:2px solid #253148}
li{gap:28px;align-items:baseline;padding:21px 0;font:500 34px/1.25 I}li::before{font-size:26px;min-width:44px}
.foot{left:88px;right:88px;bottom:70px;display:flex;justify-content:space-between;font-size:24px}
.foot span:last-child{color:#F7F5F0;font-weight:600}
</style><div id="c"><div class="top">${logo(52)}<span>Kaizen<b>AI</b></span></div>
<div class="eyebrow">${esc(s.eyebrow)}</div><h1>${esc(s.title)}</h1>
<ol>${s.items.slice(0, 5).map((i) => `<li>${esc(i)}</li>`).join('')}</ol>
<div class="foot"><span>${esc(s.tagline || 'Microsoft · Power Platform · AI agents')}</span><span>${esc(s.foot || 'kaizenai.systems/blog')}</span></div></div>`;

// Rendered from a temporary file: a page built with setContent may not load file:// fonts.
const tmp = mkdtempSync(resolve(tmpdir(), 'kz-img-'));
const browser = await chromium.launch();
for (const s of specs.filter((x) => !only.length || only.includes(x.id))) {
  const [w, h] = s.kind === 'og' ? [1200, 630] : [1200, 1200];
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  const file = resolve(tmp, `${s.id}.html`);
  writeFileSync(file, `<!doctype html><html><head><meta charset="utf-8"></head><body>${s.kind === 'og' ? og(s) : li(s)}</body></html>`);
  await page.goto(`file://${file}`, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const loaded = await page.evaluate(() => [...document.fonts].filter((f) => f.status === 'loaded').length);
  if (loaded < 2) throw new Error(`fonts did not load for ${s.id}`);
  const overflow = await page.evaluate(() => {
    const c = document.getElementById('c').getBoundingClientRect();
    const h1 = document.querySelector('h1').getBoundingClientRect();
    const ol = document.querySelector('ol').getBoundingClientRect();
    const foot = document.querySelector('.foot').getBoundingClientRect();
    const sideBySide = ol.left > h1.left + 100;
    return (sideBySide ? h1.right > ol.left - 20 : false) || ol.bottom > foot.top - 16 || h1.bottom > c.bottom;
  });
  await page.locator('#c').screenshot({ path: resolve(root, s.out) });
  console.log(`${overflow ? 'CHECK LAYOUT' : 'ok'}  ${s.out}`);
  await page.close();
}
await browser.close();
rmSync(tmp, { recursive: true, force: true });
