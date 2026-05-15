import { useEffect, useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MobileSidebar from './components/MobileSidebar'

import Home from './pages/Home'
import Explore from './pages/Explore'
import Templates from './pages/Templates'
import SavedPrompts from './pages/SavedPrompts'

function App() {
  const [promptHistory, setPromptHistory] =
    useState([])

  const [favorites, setFavorites] = useState([])

  const [category, setCategory] =
    useState('ChatGPT')

  const [darkMode, setDarkMode] = useState(true)

  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false)

  useEffect(() => {
    const savedPrompts =
      JSON.parse(localStorage.getItem('promptHistory')) || []

    const savedFavorites =
      JSON.parse(localStorage.getItem('favorites')) || []

    setPromptHistory(savedPrompts)

    setFavorites(savedFavorites)
  }, [])

  const themeClasses = darkMode
    ? 'bg-[#0b1120] text-white'
    : 'bg-[#f3f7ff] text-black'

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition ${themeClasses}`}
      >
        <Toaster position="top-right" />

        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <MobileSidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        <main className="mx-auto grid max-w-7xl gap-8 px-4 py-6 md:px-6 md:py-10 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <Sidebar
              category={category}
              setCategory={setCategory}
            />
          </div>

          <div>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    category={category}
                    promptHistory={promptHistory}
                    setPromptHistory={setPromptHistory}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                }
              />

              <Route
                path="/explore"
                element={<Explore />}
              />

              <Route
                path="/templates"
                element={<Templates />}
              />

              <Route
                path="/saved"
                element={
                  <SavedPrompts
                    promptHistory={favorites}
                  />
                }
              />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App