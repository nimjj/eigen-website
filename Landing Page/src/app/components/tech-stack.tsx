import { Brain, Cloud, Terminal, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import azureImg from "../../imports/azure.png";
import vectorDbImg from "../../imports/vector_database.jpg";
import webhooksImg from "../../imports/webhooks.png";
import s3Img from "../../imports/aws_s3.svg";
import ec2Img from "../../imports/aws_ec2.svg";
import lambdaImg from "../../imports/aws_lambda.svg";
import bedrockImg from "../../imports/amazon_bedrock.png";
import mcpImg from "../../imports/mcp.webp";
import openaiImg from "../../imports/openai.webp";
import redshiftImg from "../../imports/redshift.png";
import iamImg from "../../imports/aws_iam.jpg";

// slug maps to the Simple Icons CDN (https://simpleicons.org) which serves
// official brand SVG marks in the brand's color. If src is provided, it uses the local image.
type Item = { name: string; slug?: string; src?: string };

const boxes: { title: string; icon: LucideIcon; items: Item[] }[] = [
  {
    title: "AI & ML Orchestration",
    icon: Brain,
    items: [
      { name: "OpenAI", src: openaiImg },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Amazon Bedrock", src: bedrockImg },
      { name: "Model Context Protocol", src: mcpImg },
      { name: "Ollama / vLLM", slug: "ollama" },
      { name: "Vector Databases", src: vectorDbImg },
    ],
  },
  {
    title: "Cloud Architecture & Security",
    icon: Cloud,
    items: [
      { name: "AWS EC2", src: ec2Img },
      { name: "AWS Lambda", src: lambdaImg },
      { name: "AWS S3", src: s3Img },
      { name: "AWS Redshift", src: redshiftImg },
      { name: "Microsoft Azure", src: azureImg },
      { name: "Google Cloud", slug: "googlecloud" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Terraform", slug: "terraform" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "AWS IAM / Vault", src: iamImg },
    ],
  },
  {
    title: "Core Systems, DBs & APIs",
    icon: Terminal,
    items: [
      { name: "Python", slug: "python" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Java / Spring Boot", slug: "springboot" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
      { name: "GraphQL", slug: "graphql" },
      { name: "REST APIs", slug: "openapiinitiative" },
    ],
  },
  {
    title: "Middleware & Automations",
    icon: Workflow,
    items: [
      { name: "n8n", slug: "n8n" },
      { name: "Zapier", slug: "zapier" },
      { name: "Zoho Deluge / APIs", slug: "zoho" },
      { name: "Apache Airflow", slug: "apacheairflow" },
      { name: "Apache Kafka", slug: "apachekafka" },
      { name: "Webhooks", src: webhooksImg },
      { name: "Custom API Connectors", slug: "postman" },
      { name: "Custom Python Scripts", slug: "python" },
    ],
  },
];

function Badge({ name, slug, src }: Item) {
  const imageSrc = src || `https://cdn.simpleicons.org/${slug}`;
  return (
    <span className="group flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-white">
      <ImageWithFallback
        src={imageSrc}
        alt={`${name} logo`}
        className="h-4 w-4 shrink-0 object-contain grayscale transition-all duration-200 group-hover:grayscale-0"
      />
      {name}
    </span>
  );
}

export function TechStack() {
  return (
    <section id="ecosystem" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Production-Grade Engineering Stack
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Battle-tested tools and frameworks we leverage to build resilient AI
            pipelines, cloud infrastructure, and custom automations.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {boxes.map((box) => {
            const Icon = box.icon;
            return (
              <div
                key={box.title}
                className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-50 px-6 py-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-yellow)]">
                    <Icon className="h-4.5 w-4.5 text-zinc-900" />
                  </span>
                  <h3 className="text-base text-zinc-900">{box.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5 p-6">
                  {box.items.map((item) => (
                    <Badge key={item.name} name={item.name} slug={item.slug} src={item.src} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
