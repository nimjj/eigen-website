import { ImageWithFallback } from "./figma/ImageWithFallback";

// slug maps to the Simple Icons CDN (https://simpleicons.org) for official
// brand SVG marks in the brand's color.
type Integration = { name: string; slug: string };

const integrations: Integration[] = [
  { name: "Airtable", slug: "airtable" },
  { name: "Notion", slug: "notion" },
  { name: "Google Drive", slug: "googledrive" },
  { name: "Microsoft Excel", slug: "microsoftexcel" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Slack", slug: "slack" },
  { name: "Microsoft Teams", slug: "microsoftteams" },
  { name: "Typeform", slug: "typeform" },
  { name: "Intercom", slug: "intercom" },
  { name: "Gmail", slug: "gmail" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "Zoom", slug: "zoom" },
  { name: "Monday.com", slug: "mondaydotcom" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Jira", slug: "jira" },
  { name: "Mailchimp", slug: "mailchimp" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Stripe", slug: "stripe" },
  { name: "QuickBooks", slug: "quickbooks" },
  { name: "Asana", slug: "asana" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "Zoho CRM", slug: "zoho" },
  { name: "GitHub", slug: "github" },
  { name: "Twilio", slug: "twilio" },
  { name: "Figma", slug: "figma" },
  { name: "PayPal", slug: "paypal" },
  { name: "Shopify", slug: "shopify" },
  { name: "Discord", slug: "discord" },
  { name: "Trello", slug: "discord" }, // keeping some random ones to fill 3 rows
  { name: "Dropbox", slug: "trello" },
  { name: "Linear", slug: "linear" },
  { name: "Vercel", slug: "vercel" },
];

function Card({ name, slug }: Integration) {
  return (
    <div className="group mx-8 flex shrink-0 items-center gap-3.5 py-4">
      <ImageWithFallback
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={`${name} logo`}
        className="h-7 w-7 object-contain grayscale transition-all duration-200 group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
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
          <Card key={`${it.name}-${i}`} name={it.name} slug={it.slug} />
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
    <section className="overflow-hidden bg-zinc-50">
      <div className="mx-auto max-w-3xl px-6 pt-24 text-center lg:pt-28">
        <h2 className="text-4xl leading-tight tracking-tight text-zinc-900 sm:text-5xl">
          Seamless Integration Across Your Entire Software Stack
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
          We engineer custom middleware and iPaaS connections to sync data
          effortlessly across your tools.
        </p>
      </div>

      <div className="relative mt-16 space-y-5 pb-8">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-50 to-transparent" />
        <Row items={firstRow} />
        <Row items={secondRow} reverse />
        <Row items={thirdRow} />
      </div>

      <div className="pb-24 text-center lg:pb-28">
        <p className="text-sm font-medium tracking-wide text-zinc-400">
          + 3000 more other integration capabilities
        </p>
      </div>
    </section>
  );
}
