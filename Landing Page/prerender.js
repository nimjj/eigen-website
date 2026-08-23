import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import(toAbsolute("dist/server/entry-server.js"));


const routeMeta = {
  "/": {
    title: "eigen. — Applied AI Orchestration & Cloud Infrastructure",
    description: "We engineer custom AI orchestration, robust cloud infrastructure & seamless platform integrations so your tools work for you, not against you.",
    canonical: "https://ei-gen.tech/",
  },
  "/about": {
    title: "About Us — eigen.",
    description: "Learn about our purpose, mission, and pragmatic engineering approach to enterprise AI, cloud architecture, and automation.",
    canonical: "https://ei-gen.tech/about",
  },
  "/contact": {
    title: "Contact Us — eigen.",
    description: "Initiate an engineer-led architecture review for your enterprise AI, cloud, automation, or data stack.",
    canonical: "https://ei-gen.tech/contact",
  },
  "/services/ai-orchestration": {
    title: "AI Orchestration & LLM Solutions — eigen.",
    description: "Sovereign AI architectures, RAG pipelines, CUDA kernel optimization, and custom ML fine-tuning.",
    canonical: "https://ei-gen.tech/services/ai-orchestration",
  },
  "/services/automations": {
    title: "Enterprise Automations & RPA — eigen.",
    description: "Self-executing RPA workflows, self-hosted n8n pipelines, and cognitive AI agents running 24/7.",
    canonical: "https://ei-gen.tech/services/automations",
  },
  "/services/cloud-infrastructure": {
    title: "Cloud Infrastructure & DevOps — eigen.",
    description: "Hyper-secure AWS, GCP, and Azure cloud environments engineered for peak performance and radical FinOps cost efficiency.",
    canonical: "https://ei-gen.tech/services/cloud-infrastructure",
  },
  "/services/crm-orchestration": {
    title: "CRM & Middleware Orchestration — eigen.",
    description: "Bi-directional API middleware connecting Zoho One, Salesforce, HubSpot, and ERP platforms.",
    canonical: "https://ei-gen.tech/services/crm-orchestration",
  },
  "/services/data-engineering": {
    title: "Data Engineering & Analytics — eigen.",
    description: "High-throughput streaming & batch data pipelines, lakehouses, Apache Spark, Kafka, and predictive intelligence.",
    canonical: "https://ei-gen.tech/services/data-engineering",
  },
};

console.log("🚀 Starting SSG Prerendering for AI Bots and Web Scrapers...");

for (const [url, meta] of Object.entries(routeMeta)) {
  const appHtml = render(url);
  let html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

  // Replace Title & Description in pre-rendered static HTML
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${meta.canonical}" />`);
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.description}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${meta.canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${meta.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${meta.description}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${meta.canonical}" />`);

  const filePath = `dist${url === "/" ? "/index.html" : `${url}/index.html`}`;
  const dir = path.dirname(toAbsolute(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(toAbsolute(filePath), html);
  console.log(`  ✓ Prerendered [${meta.title}]: ${url} -> ${filePath}`);
}

// Clean up server build folder
fs.rmSync(toAbsolute("dist/server"), { recursive: true, force: true });
console.log("✨ Static Pre-rendering Complete!");

