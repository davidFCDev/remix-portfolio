"use client"

interface PhoneMockupProps {
  videoUrl: string
}

export function PhoneMockup({ videoUrl }: PhoneMockupProps) {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-[280px] h-[560px] bg-black rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          <video src={videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>

        {/* Side buttons */}
        <div className="absolute -right-2 top-24 w-1 h-12 bg-gray-900 rounded-l" />
        <div className="absolute -right-2 top-40 w-1 h-16 bg-gray-900 rounded-l" />
        <div className="absolute -left-2 top-32 w-1 h-8 bg-gray-900 rounded-r" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-[#B7FF00] rounded-full scale-75" />
    </div>
  )
}
