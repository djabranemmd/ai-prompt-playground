import { useState } from 'react'
import toast from 'react-hot-toast'
import { Copy, Sparkles, Wand2 } from 'lucide-react'
import { motion } from 'framer-motion'

import { generatePrompt } from '../utils/promptGenerator'
import SuggestionCards from './SuggestionCards'

function PromptBox({
  promptHistory,
  setPromptHistory,
}) {
  const [idea, setIdea] = useState('')
  const [category, setCategory] = useState('ChatGPT')
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGeneratePrompt = () => {
    if (!idea.trim()) {
      toast.error('Please describe your idea first.')
      return
    }

    setLoading(true)

    setTimeout(() => {
      const result = generatePrompt(category, idea)

      setGeneratedPrompt(result)

      const updatedHistory = [
        {
          text: result,
          category,
        },
        ...promptHistory,
      ]

      setPromptHistory(updatedHistory)

      localStorage.setItem(
        'promptHistory',
        JSON.stringify(updatedHistory)
      )

      setLoading(false)

      toast.success('Prompt generated successfully!')
    }, 1800)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt)

      toast.success('Prompt copied to clipboard!')
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Failed to copy prompt.')
    }
  }

  return (
    <section className="mx-auto max-w-4xl pb-10">
      <SuggestionCards setIdea={setIdea} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-6 flex items-center gap-3">
          <Sparkles className="text-cyan-300" />

          <h2 className="text-2xl font-bold">
            AI Prompt Generator
          </h2>
        </div>

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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleGeneratePrompt}
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-400 py-4 text-lg font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Wand2 className="animate-spin" size={20} />

                AI is thinking...
              </>
            ) : (
              <>
                <Sparkles size={20} />

                Generate Prompt
              </>
            )}
          </motion.button>

          {generatedPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 rounded-2xl border border-cyan-400/20 bg-[#111827] p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={18}
                    className="text-cyan-300"
                  />

                  <h3 className="text-lg font-semibold text-cyan-300">
                    Generated Prompt
                  </h3>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  <Copy size={16} />

                  Copy
                </button>
              </div>

              <p className="leading-8 text-gray-300">
                {generatedPrompt}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default PromptBox