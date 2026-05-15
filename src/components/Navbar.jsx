import { Moon, Sun } from 'lucide-react'

function Navbar({
  darkMode,
  setDarkMode,
}) {
  return (
    <header className="border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            AI Prompt Playground
          </h1>

          <p className="text-sm text-gray-400">
            Next-generation AI prompt engineering
          </p>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 transition hover:bg-cyan-400/20"
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>
      </div>
    </header>
  )
}

export default Navbar