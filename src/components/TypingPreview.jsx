import { TypeAnimation } from 'react-type-animation'

function TypingPreview() {
  return (
    <div className="mb-10 rounded-3xl border border-cyan-400/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-cyan-400" />

        <h3 className="text-lg font-semibold text-cyan-300">
          AI Live Prompt Preview
        </h3>
      </div>

      <TypeAnimation
        sequence={[
          'Create a cinematic futuristic Tokyo city with neon lights and flying vehicles...',
          2000,

          'Generate a highly detailed marketing campaign for a luxury coffee brand...',
          2000,

          'Build a scalable authentication system using React and Node.js...',
          2000,
        ]}
        wrapper="p"
        speed={60}
        repeat={Infinity}
        className="leading-8 text-gray-300"
      />
    </div>
  )
}

export default TypingPreview