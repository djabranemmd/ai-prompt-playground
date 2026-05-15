import { useState } from 'react'
import toast from 'react-hot-toast'

import {
  Trash2,
  History,
  Search,
  Download,
} from 'lucide-react'

function PromptHistory({
  prompts,
  setPromptHistory,
}) {
  const [search, setSearch] = useState('')

  const filteredPrompts = prompts.filter((prompt) =>
    prompt.text
      .toLowerCase()
      .includes(search.toLowerCase())
  )

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

  const exportPrompts = () => {
    const text = prompts
      .map(
        (prompt) =>
          `Category: ${prompt.category}\n\n${prompt.text}\n\n----------------------------\n`
      )
      .join('')

    const blob = new Blob([text], {
      type: 'text/plain',
    })

    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.href = url

    link.download = 'ai-prompts.txt'

    link.click()

    toast.success('Prompts exported successfully!')
  }

  return (
    <section className="pb-24">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(0,255,255,0.08)] backdrop-blur-2xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <History className="text-cyan-300" />

            <h2 className="text-2xl font-bold">
              Prompt History
            </h2>
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search prompts..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="rounded-2xl border border-white/10 bg-[#111827] py-3 pl-11 pr-4 text-white outline-none focus:border-cyan-400"
              />
            </div>

            <button
              onClick={exportPrompts}
              className="flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-cyan-300 transition hover:bg-cyan-400/20"
            >
              <Download size={18} />

              Export
            </button>

            <button
              onClick={clearHistory}
              className="flex items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-red-300 transition hover:bg-red-500/20"
            >
              <Trash2 size={18} />

              Clear
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {filteredPrompts.map((prompt, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#111827]/80 p-6 transition hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.08)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
                  {prompt.category}
                </span>
              </div>

              <p className="leading-8 text-gray-300">
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
