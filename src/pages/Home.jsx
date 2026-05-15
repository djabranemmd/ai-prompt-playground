import Hero from '../components/Hero'
import PromptBox from '../components/PromptBox'
import PromptHistory from '../components/PromptHistory'

function Home({
  category,
  promptHistory,
  setPromptHistory,
}) {
  return (
    <>
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
    </>
  )
}

export default Home