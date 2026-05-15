import toast from 'react-hot-toast'
import { Trash2, History } from 'lucide-react'

function PromptHistory({
  prompts,
  setPromptHistory,
}) {
  if (prompts.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center text-gray-400 backdrop-blur-xl">
        No prompts generated yet.
      </div>
    )
  }

  const clearHistory = () => {
    localStorage.removeItem('promptHistory')

    setPromptHistory([])

    toast.success('Prompt history cleared!')
  }

  return (
    <section className="pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <History className="text-cyan-300" />

            <h2 className="text-2xl font-bold">
              Prompt History
            </h2>
          </div>

          <button
            onClick={clearHistory}
            className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300 transition hover:bg-red-500/20"
          >
            <Trash2 size={16} />

            Clear
          </button>
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