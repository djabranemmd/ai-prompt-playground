import { Bookmark } from 'lucide-react'

function SavedPrompts({
  promptHistory,
}) {
  return (
    <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
      <div className="mb-8 flex items-center gap-3">
        <Bookmark className="text-cyan-300" />

        <h1 className="text-3xl font-bold">
          Saved Prompts
        </h1>
      </div>

      {promptHistory.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 p-10 text-center text-gray-400">
          No saved prompts yet.
        </div>
      ) : (
        <div className="space-y-5">
          {promptHistory.map((prompt, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#111827]/80 p-6"
            >
              <div className="mb-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300">
                  {prompt.category}
                </span>
              </div>

              <p className="leading-8 text-gray-300">
                {prompt.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default SavedPrompts