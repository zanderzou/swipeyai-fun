import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import esbuild from "esbuild";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist/client");
const origin = "https://swipeyai.fun";
const locales = [
  ["en", ""], ["ja", "ja"], ["ko", "ko"], ["zh-Hant", "zh-hant"],
  ["es", "es"], ["pt-BR", "pt-br"], ["ru", "ru"], ["de", "de"],
  ["fr", "fr"], ["ar", "ar"],
];
const paths = ["/", "/blog/", "/about/", "/contact/", "/editorial-policy/", "/privacy/", "/terms/", ...["candy-ai", "crushon-ai", "ourdream-ai", "girlfriendgpt", "lovescape"].map((key) => `/blog/swipey-ai-vs-${key}/`)];
const dataFile = readFileSync(path.join(root, "src/data/localized-articles.ts"), "utf8");
const moduleCode = esbuild.transformSync(dataFile, { loader: "ts", format: "esm" }).code;
const data = await import(`data:text/javascript;base64,${Buffer.from(moduleCode).toString("base64")}`);
const errors = [];
const fail = (condition, message) => { if (!condition) errors.push(message); };
const route = (slug, part) => slug ? `/${slug}${part}` : part;
const htmlFile = (urlPath) => path.join(output, urlPath.slice(1), "index.html");
const sitemap = readFileSync(path.join(output, "sitemap-0.xml"), "utf8");
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
for (const [code, slug] of locales) {
  for (const part of paths) {
    const urlPath = route(slug, part);
    const file = htmlFile(urlPath);
    if (!existsSync(file)) { errors.push(`missing ${urlPath}`); continue; }
    const html = readFileSync(file, "utf8");
    const url = origin + urlPath;
    fail(sitemapUrls.has(url), `${urlPath}: absent from sitemap`);
    fail(html.includes(`<html lang="${code}"`), `${urlPath}: wrong lang`);
    fail(/<h1(?:\s|>)/g.test(html), `${urlPath}: no H1`);
    fail(html.includes(`rel="canonical" href="${url}"`), `${urlPath}: wrong canonical`);
    fail(!html.includes("noindex"), `${urlPath}: noindex`);
    fail(html.includes('property="og:url" content="' + url + '"'), `${urlPath}: wrong social URL`);
    fail(html.includes('name="twitter:description"'), `${urlPath}: no social description`);
    fail(html.includes('id="site-analytics"'), `${urlPath}: no consent UI`);
    if (slug === "ar") fail(html.includes('dir="rtl"'), `${urlPath}: Arabic is not RTL`);
    for (const [otherCode, otherSlug] of locales) {
      const expected = `hreflang="${otherCode}" href="${origin}${route(otherSlug, part)}"`;
      fail(html.includes(expected), `${urlPath}: missing alternate ${otherCode}`);
    }
    fail(html.includes(`hreflang="x-default" href="${origin}${part}"`), `${urlPath}: missing x-default`);
    if (part === "/") {
      fail(html.includes("<title>Swipey AI</title>"), `${urlPath}: homepage title is not exact keyword`);
      fail(html.includes("<h1>Swipey AI</h1>"), `${urlPath}: homepage H1 is not exact keyword`);
    }
  }
}
fail(sitemapUrls.size === locales.length * paths.length, `sitemap has ${sitemapUrls.size}, expected ${locales.length * paths.length}`);
for (const locale of locales.slice(1).map((entry) => entry[1])) {
  for (const key of data.comparisonKeys) {
    const article = data.comparisonCopy[locale]?.[key];
    fail(Boolean(article), `${locale}/${key}: no article`);
    if (!article) continue;
    fail(article.sections.length === 4, `${locale}/${key}: sections`);
    fail(article.sections.every((section) => section[1].length >= 2), `${locale}/${key}: paragraph depth`);
    const minLength = locale === "zh-hant" ? 950 : locale === "ja" || locale === "ko" ? 1250 : locale === "ar" ? 1900 : 2500;
    fail(JSON.stringify(article).length >= minLength, `${locale}/${key}: unusually short for ${locale}`);
  }
}
if (errors.length) { console.error(`${errors.length} localization errors:\n- ${errors.slice(0, 60).join("\n- ")}`); process.exit(1); }
console.log(`Localization audit passed: ${locales.length * paths.length} sitemap routes, reciprocal hreflang, exact home keyword, RTL and 45 full VS articles.`);
