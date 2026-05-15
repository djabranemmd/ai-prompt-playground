import { motion } from 'framer-motion'

const suggestions = [
  'A futuristic AI robot walking in Tokyo at night',
  'Create a luxury coffee brand marketing strategy',
  'Build a modern authentication system using React',
  'Generate a cinematic sci-fi movie trailer concept',
]

function SuggestionCards({ setIdea }) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2">
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
          }}
          onClick={() => setIdea(suggestion)}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
        >
          {suggestion}
        </motion.button>
      ))}
    </div>
  )
}

export default SuggestionCards