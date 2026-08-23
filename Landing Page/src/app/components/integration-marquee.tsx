import { ImageWithFallback } from "./figma/ImageWithFallback";
import microsoftTeamsImg from "../../imports/microsoft_teams.webp";
import excelImg from "../../imports/excel.jpeg";
import mondayImg from "../../imports/monday.png";
import pipedriveImg from "../../imports/pipedrive.avif";
import salesforceImg from "../../imports/salesforce.webp";
import slackImg from "../../imports/slack.jpeg";
import trelloImg from "../../imports/trello_logo.png";
import twilioImg from "../../imports/twilio_logo.jpeg";

// slug maps to the Simple Icons CDN (https://simpleicons.org) for official
// brand SVG marks in the brand's color. If src is provided, it uses the local image.
type Integration = { name: string; slug?: string; src?: string };

const integrations: Integration[] = [
  { name: "Airtable", slug: "airtable" },
  { name: "Notion", slug: "notion" },
  { name: "Google Drive", slug: "googledrive" },
  { name: "Microsoft Excel", src: excelImg },
  { name: "Salesforce", src: salesforceImg },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Slack", src: slackImg },
  { name: "Microsoft Teams", src: microsoftTeamsImg },
  { name: "Typeform", slug: "typeform" },
  { name: "Intercom", slug: "intercom" },
  { name: "Gmail", slug: "gmail" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "Zoom", slug: "zoom" },
  { name: "Monday.com", src: mondayImg },
  { name: "ClickUp", slug: "clickup" },
  { name: "Jira", slug: "jira" },
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Stripe", slug: "stripe" },
  { name: "QuickBooks", slug: "quickbooks" },
  { name: "Asana", slug: "asana" },
  { name: "Pipedrive", src: pipedriveImg },
  { name: "Zoho CRM", slug: "zoho" },
  { name: "GitHub", slug: "github" },
  { name: "Twilio", src: twilioImg },
  { name: "Figma", slug: "figma" },
  { name: "PayPal", slug: "paypal" },
  { name: "Shopify", slug: "shopify" },
  { name: "Discord", slug: "discord" },
  { name: "Trello", src: trelloImg },
  { name: "Dropbox", slug: "dropbox" },
  { name: "Linear", slug: "linear" },
  { name: "Vercel", slug: "vercel" },
];

function Card({ name, slug, src }: Integration) {
  const imageSrc = src || `https://cdn.simpleicons.org/${slug}`;
  return (
    <div className="group mx-8 flex shrink-0 items-center gap-3.5 py-4">
      <ImageWithFallback
        src={imageSrc}
        alt={`${name} logo`}
        className="h-7 w-7 object-contain grayscale transition-all duration-200 group-hover:grayscale-0 opacity-70 group-hover:opacity-100 mix-blend-multiply"
      />
      <span className="text-base font-medium tracking-tight text-zinc-500 transition-colors duration-200 group-hover:text-zinc-900">{name}</span>
    </div>
  );
}

function Row({ items, reverse }: { items: Integration[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex w-max">
      <div className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((it, i) => (
          <Card key={`${it.name}-${i}`} name={it.name} slug={it.slug} src={it.src} />
        ))}
      </div>
    </div>
  );
}

export function IntegrationMarquee() {
  const firstRow = integrations.slice(0, 11);
  const secondRow = integrations.slice(11, 22);
  const thirdRow = integrations.slice(22);

  return (
    <section className="overflow-hidden bg-[#FAF9F5] border-t border-b border-black/5 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1B1B1B]">
          Seamless Integration Across Your Entire Software Stack
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#717182]">
          We engineer custom middleware, webhooks & iPaaS connections to sync data
          effortlessly across your proprietary tools.
        </p>
      </div>

      <div className="relative mt-12 space-y-4 pb-4">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#FAF9F5] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#FAF9F5] to-transparent" />
        <Row items={firstRow} />
        <Row items={secondRow} reverse />
        <Row items={thirdRow} />
      </div>

      <div className="text-center mt-6">
        <p className="font-display text-xs font-semibold tracking-wider text-[#8C8880] uppercase">
          + 3,000 more API & enterprise system integrations
        </p>
      </div>
    </section>
  );
}
