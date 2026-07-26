import { Cpu, Terminal, Layers } from "lucide-react";

export function EngineeringCore() {
  return (
    <section className="bg-zinc-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            The Engineering Core
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Deep-tech solutions for uncompromising performance. We optimize at the lowest levels so your AI operations scale seamlessly.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-800/50 border border-zinc-700/50 p-8 transition-all hover:bg-zinc-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700">
              <Cpu className="h-6 w-6" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-medium text-white">CUDA Kernel Configurations & Low-Latency Inference Tuning</h3>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                We write custom CUDA kernels and optimize hardware utilization to slash inference latency. Whether you're running LLMs or computer vision models, we squeeze every drop of performance from your GPUs.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-800/50 border border-zinc-700/50 p-8 transition-all hover:bg-zinc-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700">
              <Terminal className="h-6 w-6" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-medium text-white">End-to-End ML Training & PEFT/LoRA</h3>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                Move beyond off-the-shelf models. We construct rigorous training pipelines and utilize Parameter-Efficient Fine-Tuning (PEFT) and LoRA to adapt foundation models specifically to your proprietary data—cost effectively.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-800/50 border border-zinc-700/50 p-8 transition-all hover:bg-zinc-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-[var(--accent-yellow)] ring-1 ring-zinc-700">
              <Layers className="h-6 w-6" />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-medium text-white">Vector Database Management & Semantic Chunking</h3>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                The backbone of intelligent retrieval. We design and maintain high-performance vector stores, employing advanced semantic chunking strategies to ensure context is perfectly preserved and retrieved in milliseconds.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
