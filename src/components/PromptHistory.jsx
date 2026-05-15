import { History } from 'lucide-react'

function PromptHistory({ prompts }) {
  if (prompts.length === 0) return null

  return (
    <section className="mx-auto mt-10 max-w-4xl pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 flex items-center gap-3">
          <History className="text-cyan-300" />

          <h2 className="text-2xl font-bold">
            Prompt History
          </h2>
        </div>

        <div className="space-y-4">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#111827] p-5 transition hover:border-cyan-400/30"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {prompt.category}
                </span>
              </div>

              <p className="line-clamp-3 text-gray-300">
                {prompt.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromptHistory