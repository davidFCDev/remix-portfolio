import { games } from "@/lib/games-data"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface GuideStep {
  number: number
  title: string
  description: string
  image: string
}

const guideSteps: GuideStep[] = [
  {
    number: 1,
    title: "Getting Started",
    description:
      "Begin your journey by understanding the basic controls and mechanics. Familiarize yourself with the interface and practice the fundamental movements. This initial step is crucial for mastering the game and will set the foundation for advanced techniques.",
    image: "/mobile-game-tutorial-step-1.jpg",
  },
  {
    number: 2,
    title: "Master the Controls",
    description:
      "Learn the advanced control techniques that will give you an edge over other players. Practice timing your moves perfectly and discover hidden combos. Understanding these mechanics will significantly improve your gameplay and help you achieve higher scores.",
    image: "/mobile-game-tutorial-step-2.jpg",
  },
  {
    number: 3,
    title: "Power-Ups and Bonuses",
    description:
      "Discover all the power-ups available in the game and learn when to use them strategically. Each power-up has unique properties that can turn the tide of gameplay. Collect bonuses to maximize your score and unlock special abilities.",
    image: "/mobile-game-tutorial-step-3.jpg",
  },
  {
    number: 4,
    title: "Advanced Strategies",
    description:
      "Apply pro-level strategies to dominate the leaderboards. Learn optimal paths, timing techniques, and secret shortcuts. Master these advanced tactics to achieve the highest scores and compete with the best players worldwide.",
    image: "/mobile-game-tutorial-step-4.jpg",
  },
]

export default function GameGuidePage({ params }: { params: { gameId: string } }) {
  const game = games.find((g) => g.id === params.gameId)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="text-[#B7FF00] hover:text-[#B7FF00]/80" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="text-2xl font-bold font-pixelify">Hellbound Studios</div>
          </div>
        </div>
      </header>

      {/* Game Title Section */}
      <section className="container mx-auto px-4 py-12 text-center space-y-4">
        <Badge variant="outline" className="border-[#B7FF00] text-[#B7FF00] font-semibold">
          Game Guide
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold font-pixelify">{game.title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{game.subtitle}</p>
      </section>

      {/* Guide Steps */}
      <section className="container mx-auto px-4 py-12 space-y-24">
        {guideSteps.map((step, index) => (
          <div
            key={step.number}
            className={`grid lg:grid-cols-2 gap-12 items-center bg-card rounded-2xl p-8 md:p-12 border border-border/50 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
          >
            {/* Image - alternates position */}
            <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <div className="relative">
                {/* Number Circle */}
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-[#B7FF00] flex items-center justify-center z-10 shadow-lg shadow-[#B7FF00]/50">
                  <span className="text-3xl font-bold text-black font-pixelify">{step.number}</span>
                </div>
                {/* Image Container */}
                <div className="aspect-[9/16] w-full max-w-sm mx-auto relative overflow-hidden rounded-2xl border-2 border-[#B7FF00]/30 shadow-lg shadow-[#B7FF00]/20">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <h2 className="text-4xl md:text-5xl font-bold font-pixelify text-balance">{step.title}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed text-pretty">{step.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold font-pixelify">Ready to Play?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Now that you've mastered the basics, it's time to put your skills to the test!
        </p>
        <Button
          size="lg"
          className="bg-[#B7FF00] hover:bg-[#B7FF00]/90 text-black font-semibold neon-glow text-lg px-8"
          asChild
        >
          <a href={game.playUrl} target="_blank" rel="noopener noreferrer">
            Play {game.title} Now
          </a>
        </Button>
      </section>
    </div>
  )
}
