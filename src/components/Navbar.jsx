function Navbar() {
  return (
    <header className="border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          AI Prompt Playground
        </h1>

        <button className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20">
          Explore
        </button>
      </div>
    </header>
  )
}

export default Navbar