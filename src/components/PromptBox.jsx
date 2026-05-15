import { useState } from 'react'

import toast from 'react-hot-toast'

import {
  Copy,
  Sparkles,
  Wand2,
  BookmarkPlus,
  WandSparkles,
} from 'lucide-react'

import { motion } from 'framer-motion'

import { generatePrompt } from '../utils/promptGenerator'

import { calculatePromptScore } from '../utils/promptScorer'

import { enhancePrompt } from '../utils/promptEnhancer'

import SuggestionCards from './SuggestionCards'
import TypingPreview from './TypingPreview'
import PromptScore from './PromptScore'

function PromptBox({
  category,
  promptHistory,
  setPromptHistory,
  favorites,
  setFavorites,
}) {
  const [idea, setIdea] = useState('')

  const [generatedPrompt, setGeneratedPrompt] =
    useState('')

  const [loading, setLoading] = useState(false)

  const [score, setScore] = useState(0)

  const handleGeneratePrompt = () => {
    if (!idea.trim()) {
      toast.error('Please describe your idea first.')
      return
    }

    setLoading(true)

    setTimeout(() => {
      const result = generatePrompt(category, idea)

      const enhancedResult =
        enhancePrompt(result)

      setGeneratedPrompt(enhancedResult)

      const promptScore =
        calculatePromptScore(enhancedResult)

      setScore(promptScore)

      const updatedHistory = [
        {
          text: enhancedResult,
          category,
          score: promptScore,
        },
        ...promptHistory,
      ]

      setPromptHistory(updatedHistory)

      localStorage.setItem(
        'promptHistory',
        JSON.stringify(updatedHistory)
      )

      setLoading(false)

      toast.success(
        'Enhanced AI prompt generated!'
      )
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

  const handleFavorite = () => {
    const newFavorite = {
      text: generatedPrompt,
      category,
      score,
    }

    const updatedFavorites = [
      newFavorite,
      ...favorites,
    ]

    setFavorites(updatedFavorites)

    localStorage.setItem(
      'favorites',
      JSON.stringify(updatedFavorites)
    )

    toast.success('Added to favorites!')
  }

  return (
    <section className="pb-10">
      <TypingPreview />

      <SuggestionCards setIdea={setIdea} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[32px] border border-white/10 bg-white/5 p-5 md:p-8 shadow-[0_0_60px_rgba(0,255,255,0.08)] backdrop-blur-2xl"
      >
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="text-cyan-300" />

            <h2 className="text-xl font-bold md:text-2xl">
              AI Prompt Generator
            </h2>
          </div>

          <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
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

                AI is generating...
              </>
            ) : (
              <>
                <WandSparkles size={20} />

                Generate Enhanced Prompt
              </>
            )}
          </motion.button>

          {generatedPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-cyan-400/20 bg-[#111827]/80 p-6"
            >
              <PromptScore score={score} />

              <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={18}
                    className="text-cyan-300"
                  />

                  <h3 className="text-lg font-semibold text-cyan-300">
                    Enhanced Prompt
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleFavorite}
                    className="flex items-center gap-2 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300 transition hover:bg-yellow-400/20"
                  >
                    <BookmarkPlus size={16} />

                    Favorite
                  </button>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/20"
                  >
                    <Copy size={16} />

                    Copy
                  </button>
                </div>
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