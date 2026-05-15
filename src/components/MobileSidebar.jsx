import {
  Sparkles,
  Compass,
  LayoutTemplate,
  Bookmark,
  X,
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

function MobileSidebar({
  isOpen,
  setIsOpen,
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen
          ? 'pointer-events-auto bg-black/50 opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
    >
      <aside
        className={`absolute left-0 top-0 h-full w-[280px] border-r border-white/10 bg-[#0b1120] p-6 backdrop-blur-2xl transition-transform duration-300 ${
          isOpen
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            Navigation
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-xl bg-white/10 p-2"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-3">
          {links.map((link) => {
            const Icon = link.icon

            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
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
      </aside>
    </div>
  )
}

export default MobileSidebar