function PromptScore({ score }) {
  let color = 'bg-red-500'

  if (score >= 70) {
    color = 'bg-green-500'
  } else if (score >= 40) {
    color = 'bg-yellow-500'
  }

  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">
          Prompt Quality Score
        </h3>

        <span className="text-sm font-bold text-cyan-300">
          {score}/100
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{
            width: `${score}%`,
          }}
        />
      </div>
    </div>
  )
}

export default PromptScore