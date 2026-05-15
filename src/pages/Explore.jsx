import { Compass } from 'lucide-react'

function Explore() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
      <div className="mb-6 flex items-center gap-3">
        <Compass className="text-cyan-300" />

        <h1 className="text-3xl font-bold">
          Explore AI Ideas
        </h1>
      </div>

      <p className="max-w-2xl leading-8 text-gray-300">
        Discover trending prompt ideas, AI workflows,
        creative concepts, and inspiration for your next
        project.
      </p>
    </section>
  )
}

export default Explore