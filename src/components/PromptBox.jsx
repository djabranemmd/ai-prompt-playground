import { useState } from 'react'
import { generatePrompt } from '../utils/promptGenerator'

function PromptBox() {
  const [idea, setIdea] = useState('')
  const [category, setCategory] = useState('ChatGPT')
  const [generatedPrompt, setGeneratedPrompt] = useState('')

  const handleGeneratePrompt = () => {
    if (!idea.trim()) return

    const result = generatePrompt(category, idea)

    setGeneratedPrompt(result)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt)
      alert('Prompt copied successfully!')
    } catch (error) {
      alert('Failed to copy prompt.')
    }
  }

  return (
    <section className="mx-auto max-w-4xl pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <div className="space-y-6">
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-300">
              Describe Your Idea
            </label>

            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Example: A futuristic cyberpunk city at night with neon lights and flying cars..."
              className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-[#111827] p-5 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-300">
              Choose AI Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-[#111827] p-4 text-white outline-none transition focus:border-cyan-400"
            >
              <option>ChatGPT</option>
              <option>Image Generator</option>
              <option>Coding Assistant</option>
              <option>Marketing</option>
              <option>Video Generator</option>
            </select>
          </div>

          <button
            onClick={handleGeneratePrompt}
            className="w-full rounded-2xl bg-cyan-400 py-4 text-lg font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-300"
          >
            Generate Prompt
          </button>

          {generatedPrompt && (
            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-[#111827] p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-cyan-300">
                  Generated Prompt
                </h3>

                <button
                  onClick={handleCopy}
                  className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  Copy
                </button>
              </div>

              <p className="leading-8 text-gray-300">
                {generatedPrompt}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PromptBox