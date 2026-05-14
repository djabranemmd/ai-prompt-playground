import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromptBox from './components/PromptBox'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <Navbar />

      <main className="px-6">
        <Hero />
        <PromptBox />
      </main>
    </div>
  )
}

export default App