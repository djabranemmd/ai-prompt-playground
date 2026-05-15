import {
  Sparkles,
  Image,
  Code2,
  Megaphone,
  Video,
} from 'lucide-react'

const categories = [
  {
    name: 'ChatGPT',
    icon: Sparkles,
  },
  {
    name: 'Image Generator',
    icon: Image,
  },
  {
    name: 'Coding Assistant',
    icon: Code2,
  },
  {
    name: 'Marketing',
    icon: Megaphone,
  },
  {
    name: 'Video Generator',
    icon: Video,
  },
]

function Sidebar({ category, setCategory }) {
  return (
    <aside className="sticky top-6 h-fit rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <h2 className="mb-6 text-lg font-bold text-white">
        AI Categories
      </h2>

      <div className="space-y-3">
        {categories.map((item) => {
          const Icon = item.icon

          const active = category === item.name

          return (
            <button
              key={item.name}
              onClick={() => setCategory(item.name)}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                active
                  ? 'bg-cyan-400 text-black'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Icon size={18} />

              {item.name}
            </button>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar