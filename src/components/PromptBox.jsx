function PromptBox() {
  return (
    <section className="mx-auto max-w-4xl pb-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <div className="space-y-6">
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-300">
              Describe Your Idea
            </label>

            <textarea
              placeholder="Example: A futuristic cyberpunk city at night with neon lights and flying cars..."
              className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-[#111827] p-5 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-300">
              Choose AI Category
            </label>

            <select className="w-full rounded-2xl border border-white/10 bg-[#111827] p-4 text-white outline-none transition focus:border-cyan-400">
              <option>ChatGPT</option>
              <option>Image Generator</option>
              <option>Coding Assistant</option>
              <option>Marketing</option>
              <option>Video Generator</option>
            </select>
          </div>

          <button className="w-full rounded-2xl bg-cyan-400 py-4 text-lg font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-300">
            Generate Prompt
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromptBox