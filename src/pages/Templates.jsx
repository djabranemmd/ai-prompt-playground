import { LayoutTemplate } from 'lucide-react'

const templates = [
  {
    title: 'Marketing Campaign',
    description:
      'Generate powerful marketing prompts for brands.',
  },
  {
    title: 'AI Art Generator',
    description:
      'Create cinematic prompts for AI image generation.',
  },
  {
    title: 'Coding Assistant',
    description:
      'Generate prompts for software development tasks.',
  },
]

function Templates() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
      <div className="mb-8 flex items-center gap-3">
        <LayoutTemplate className="text-cyan-300" />

        <h1 className="text-3xl font-bold">
          Prompt Templates
        </h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {templates.map((template, index) => (
          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-[#111827]/80 p-6 transition hover:border-cyan-400/30"
          >
            <h3 className="mb-3 text-xl font-semibold">
              {template.title}
            </h3>

            <p className="leading-7 text-gray-300">
              {template.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Templates