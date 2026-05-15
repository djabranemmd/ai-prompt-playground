import Hero from '../components/Hero'

import PromptBox from '../components/PromptBox'

import PromptHistory from '../components/PromptHistory'

import StatsCards from '../components/StatsCards'

function Home({
  category,
  promptHistory,
  setPromptHistory,
  favorites,
  setFavorites,
}) {
  return (
    <>
      <Hero />

      <StatsCards
        promptHistory={promptHistory}
        favorites={favorites}
      />

      <PromptBox
        category={category}
        promptHistory={promptHistory}
        setPromptHistory={setPromptHistory}
        favorites={favorites}
        setFavorites={setFavorites}
      />

      <PromptHistory
        prompts={promptHistory}
        setPromptHistory={setPromptHistory}
      />
    </>
  )
}

export default Home