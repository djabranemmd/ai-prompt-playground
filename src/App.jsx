import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromptBox from './components/PromptBox'
import PromptHistory from './components/PromptHistory'
import Sidebar from './components/Sidebar'

function App() {
  const [promptHistory, setPromptHistory] = useState([])

  const [category, setCategory] =
    useState('ChatGPT')

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedPrompts =
      JSON.parse(localStorage.getItem('promptHistory')) || []

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPromptHistory(savedPrompts)
  }, [])

  const themeClasses = darkMode
    ? 'bg-[#0b1120] text-white'
    : 'bg-[#f3f7ff] text-black'

  return (
    <div className={`min-h-screen transition ${themeClasses}`}>
      <Toaster position="top-right" />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_1fr]">
        <Sidebar
          category={category}
          setCategory={setCategory}
        />

        <div>
          <Hero />

          <PromptBox
            category={category}
            promptHistory={promptHistory}
            setPromptHistory={setPromptHistory}
          />

          <PromptHistory
            prompts={promptHistory}
            setPromptHistory={setPromptHistory}
          />
        </div>
      </main>
    </div>
  )
}

export default App