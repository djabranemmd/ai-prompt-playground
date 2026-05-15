import {
  Sparkles,
  Bookmark,
  BarChart3,
} from 'lucide-react'

function StatsCards({
  promptHistory,
  favorites,
}) {
  const totalPrompts = promptHistory.length

  const totalFavorites = favorites.length

  const averageLength =
    totalPrompts === 0
      ? 0
      : Math.floor(
          promptHistory.reduce(
            (acc, item) => acc + item.text.length,
            0
          ) / totalPrompts
        )

  const stats = [
    {
      title: 'Generated Prompts',
      value: totalPrompts,
      icon: Sparkles,
    },
    {
      title: 'Favorites',
      value: totalFavorites,
      icon: Bookmark,
    },
    {
      title: 'Average Length',
      value: averageLength,
      icon: BarChart3,
    },
  ]

  return (
    <div className="mb-10 grid gap-5 md:grid-cols-3">
      {stats.map((item, index) => {
        const Icon = item.icon

        return (
          <div
            key={index}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(0,255,255,0.06)] backdrop-blur-2xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm text-gray-400">
                {item.title}
              </h3>

              <Icon
                size={20}
                className="text-cyan-300"
              />
            </div>

            <p className="text-4xl font-bold">
              {item.value}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default StatsCards