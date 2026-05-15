import {
  Sparkles,
  Compass,
  LayoutTemplate,
  Bookmark,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

const links = [
  {
    name: 'Home',
    path: '/',
    icon: Sparkles,
  },
  {
    name: 'Explore',
    path: '/explore',
    icon: Compass,
  },
  {
    name: 'Templates',
    path: '/templates',
    icon: LayoutTemplate,
  },
  {
    name: 'Saved',
    path: '/saved',
    icon: Bookmark,
  },
]

const categories = [
  'ChatGPT',
  'Image Generator',
  'Coding Assistant',
  'Marketing',
  'Video Generator',
]

function Sidebar({
  category,
  setCategory,
}) {
  return (
    <aside className="sticky top-6 h-fit rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-bold">
          Navigation
        </h2>

        <div className="space-y-3">
          {links.map((link) => {
            const Icon = link.icon

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
                    isActive
                      ? 'bg-cyan-400 text-black'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`
                }
              >
                <Icon size={18} />

                {link.name}
              </NavLink>
            )
          })}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold">
          Categories
        </h2>

        <div className="space-y-3">
          {categories.map((item) => {
            const active = category === item

            return (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`w-full rounded-2xl px-4 py-3 text-left transition ${
                  active
                    ? 'bg-cyan-400 text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar