import { useState } from 'react'

import toast from 'react-hot-toast'

import {
  Copy,
  Sparkles,
  Wand2,
} from 'lucide-react'

import { motion } from 'framer-motion'

import { generatePrompt } from '../utils/promptGenerator'

import SuggestionCards from './SuggestionCards'
import TypingPreview from './TypingPreview'

function PromptBox({
  category,
  promptHistory,
  setPromptHistory,
}) {
  const [idea, setIdea] = useState('')

  const [generatedPrompt, setGeneratedPrompt] =
    useState('')

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
      await navigator.clipboard.writeText(
        generatedPrompt
      )

      toast.success('Prompt copied to clipboard!')
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Failed to copy prompt.')
    }
  }

  return (
    <section className="pb-10">
      <TypingPreview />

      <SuggestionCards setIdea={setIdea} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(0,255,255,0.08)] backdrop-blur-2xl"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="text-cyan-300" />

            <h2 className="text-2xl font-bold">
              AI Prompt Generator
            </h2>
          </div>

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            {category}
          </span>
        </div>

        <div className="space-y-6">
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your idea in detail..."
            className="min-h-[220px] w-full rounded-3xl border border-white/10 bg-[#111827]/80 p-6 text-white outline-none transition focus:border-cyan-400"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleGeneratePrompt}
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-3xl bg-cyan-400 py-4 text-lg font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Wand2
                  className="animate-spin"
                  size={20}
                />

                AI is generating your prompt...
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
              className="rounded-3xl border border-cyan-400/20 bg-[#111827]/80 p-6"
            >
              <div className="mb-5 flex items-center justify-between">
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
                  className="flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/20"
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