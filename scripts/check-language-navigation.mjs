import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/zande/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const base = process.argv[2] || "http://127.0.0.1:4326";
const cases = [
  ["/", "ja", "ja"], ["/blog/", "zh-hant", "zh-Hant"],
  ["/blog/swipey-ai-vs-lovescape/", "de", "de"],
  ["/privacy/", "ar", "ar"],
];
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
try {
  for (const [part, target, lang] of cases) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(base + part, { waitUntil: "networkidle" });
    await page.locator(`.locale-footer-languages a[href="/${target}${part}"]`).click();
    await page.waitForURL(base + `/${target}${part}`);
    if (await page.locator("html").getAttribute("lang") !== lang) throw Error(`${part}: wrong ${lang} language`);
    if (await page.locator("h1").count() !== 1) throw Error(`${part}: target H1 count`);
    if (target === "ar" && await page.locator("html").getAttribute("dir") !== "rtl") throw Error("Arabic navigation lost RTL");
    await page.locator(".locale-switcher summary").click();
    await page.locator(`.locale-switcher a[href="${part}"]`).click();
    await page.waitForURL(base + part);
    if (await page.locator("html").getAttribute("lang") !== "en") throw Error(`${part}: return to English failed`);
    await page.close();
  }
  console.log(`${cases.length} English-to-locale-and-back mobile navigation cases passed.`);
} finally { await browser.close(); }
