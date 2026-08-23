import { useState } from "react";
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

type Item = { name: string; slug?: string; src?: string };

const categories: { id: string; title: string; icon: LucideIcon; items: Item[] }[] = [
  {
    id: "ai",
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
    id: "cloud",
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
    id: "core",
    title: "Core Systems, DBs & APIs",
    icon: Terminal,
    items: [
      { name: "Python", slug: "python" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Java / Spring Boot", slug: "springboot" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Redis", slug: "redis" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Apache Kafka", slug: "apachekafka" },
      { name: "GraphQL", slug: "graphql" },
      { name: "REST APIs", slug: "fastapi" },
    ],
  },
  {
    id: "middleware",
    title: "Middleware & Automations",
    icon: Workflow,
    items: [
      { name: "Custom Webhooks", src: webhooksImg },
      { name: "Zapier", slug: "zapier" },
      { name: "Make", slug: "make" },
      { name: "n8n", slug: "n8n" },
      { name: "MuleSoft", slug: "salesforce" },
      { name: "Airbyte", slug: "airbyte" },
    ],
  },
];

function Badge({ name, slug, src }: Item) {
  const imageSrc = src || `https://cdn.simpleicons.org/${slug}`;
  return (
    <span className="group flex items-center gap-2 rounded-full border border-black/10 bg-[#FAF9F5] px-3.5 py-2 text-xs font-medium text-[#1B1B1B] transition-all duration-200 hover:border-black/30 hover:bg-white hover:shadow-sm">
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
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedCategories =
    activeTab === "all"
      ? categories
      : categories.filter((c) => c.id === activeTab);

  return (
    <section className="bg-[#FAF9F5] py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-b border-black/5">
      <div className="w-full">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-black mb-3 block bg-[#FEDD2B]/40 px-3.5 py-1 rounded-full border border-yellow-400/50 shadow-sm mx-auto w-max">
            Battle-Tested Tooling
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1B1B1B]">
            Production-Grade Engineering Stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#717182]">
            Battle-tested frameworks and platforms we leverage to build resilient AI pipelines, cloud infrastructure, and custom automations.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-[#FEDD2B] text-black shadow-md border border-yellow-400/60 scale-105"
                  : "bg-white/80 text-[#1B1B1B] border border-black/10 hover:bg-white"
              }`}
            >
              All Tools
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2 rounded-full font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-[#FEDD2B] text-black shadow-md border border-yellow-400/60 scale-105"
                    : "bg-white/80 text-[#1B1B1B] border border-black/10 hover:bg-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {displayedCategories.map((box) => {
            const Icon = box.icon;
            return (
              <div
                key={box.title}
                className="overflow-hidden rounded-[32px] border border-black/10 bg-[#FFFDF8] shadow-sm hover:shadow-md hover:border-yellow-400/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 border-b border-black/5 bg-[#F4F3EF]/60 px-6 py-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FEDD2B] text-black font-bold shadow-sm">
                    <Icon className="h-4 w-4 text-black" />
                  </span>
                  <h3 className="font-display text-sm font-bold text-[#1B1B1B]">{box.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 p-6">
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
