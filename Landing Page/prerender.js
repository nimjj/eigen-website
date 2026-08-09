import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import(toAbsolute("dist/server/entry-server.js"));

const routesToPrerender = [
  "/",
  "/about",
  "/contact",
  "/services/ai-orchestration",
  "/services/automations",
  "/services/cloud-infrastructure",
  "/services/crm-orchestration",
  "/services/data-engineering",
];

console.log("🚀 Starting SSG Prerendering for AI Bots and Web Scrapers...");

for (const url of routesToPrerender) {
  const appHtml = render(url);
  const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

  const filePath = `dist${url === "/" ? "/index.html" : `${url}/index.html`}`;
  const dir = path.dirname(toAbsolute(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(toAbsolute(filePath), html);
  console.log(`  ✓ Prerendered: ${url} -> ${filePath}`);
}

// Clean up server build folder
fs.rmSync(toAbsolute("dist/server"), { recursive: true, force: true });
console.log("✨ Static Pre-rendering Complete!");
