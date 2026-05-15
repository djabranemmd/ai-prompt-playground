import { Moon, Sun, Menu } from 'lucide-react'

function Navbar({
  darkMode,
  setDarkMode,
  setIsSidebarOpen,
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1120]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              AI Prompt Playground
            </h1>

            <p className="text-sm text-gray-400">
              Next-generation AI prompt engineering
            </p>
          </div>
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