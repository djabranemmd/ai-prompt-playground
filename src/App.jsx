import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromptBox from './components/PromptBox'
import PromptHistory from './components/PromptHistory'

function App() {
  const [promptHistory, setPromptHistory] = useState([])

  useEffect(() => {
    const savedPrompts =
      JSON.parse(localStorage.getItem('promptHistory')) || []

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPromptHistory(savedPrompts)
  }, [])

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <Toaster position="top-right" />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <Navbar />

      <main className="px-6">
        <Hero />

        <PromptBox
          promptHistory={promptHistory}
          setPromptHistory={setPromptHistory}
        />

        <PromptHistory prompts={promptHistory} />
      </main>
    </div>
  )
}

export default App