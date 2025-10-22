import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { games } from "@/lib/games-data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface GuideStepContent {
  title: string;
  body: string;
  image: string;
}

interface GuideStep extends GuideStepContent {
  number: number;
}

const defaultGuideSteps: GuideStepContent[] = [
  {
    title: "Getting Started",
    body: "Begin your journey by understanding the basic controls and mechanics. Familiarize yourself with the interface and practice the fundamental movements. This initial step is crucial for mastering the game and will set the foundation for advanced techniques.",
    image: "/mobile-game-tutorial-step-1.jpg",
  },
  {
    title: "Master the Controls",
    body: "Learn the advanced control techniques that will give you an edge over other players. Practice timing your moves perfectly and discover hidden combos. Understanding these mechanics will significantly improve your gameplay and help you achieve higher scores.",
    image: "/mobile-game-tutorial-step-2.jpg",
  },
  {
    title: "Power-Ups and Bonuses",
    body: "Discover all the power-ups available in the game and learn when to use them strategically. Each power-up has unique properties that can turn the tide of gameplay. Collect bonuses to maximize your score and unlock special abilities.",
    image: "/mobile-game-tutorial-step-3.jpg",
  },
  {
    title: "Advanced Strategies",
    body: "Apply pro-level strategies to dominate the leaderboards. Learn optimal paths, timing techniques, and secret shortcuts. Master these advanced tactics to achieve the highest scores and compete with the best players worldwide.",
    image: "/mobile-game-tutorial-step-4.jpg",
  },
];

export default function GameGuidePage({
  params,
}: {
  params: { gameId: string };
}) {
  const game = games.find((g) => g.id === params.gameId);

  if (!game) {
    notFound();
  }

  const rawGuideSteps =
    game.guide && game.guide.length > 0 ? game.guide : defaultGuideSteps;
  const guideSteps: GuideStep[] = rawGuideSteps.map((step, index) => ({
    number: index + 1,
    ...step,
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="text-[#B7FF00] hover:text-[#B7FF00]/80"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="text-2xl font-bold font-pixelify">
              Hellbound Studios
            </div>
          </div>
        </div>
      </header>

      {/* Game Title Section */}
      <section className="container mx-auto px-4 py-12 text-center space-y-4">
        <Badge
          variant="outline"
          className="border-[#B7FF00] text-[#B7FF00] font-semibold"
        >
          Game Guide
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold">{game.title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {game.subtitle}
        </p>
      </section>

      {/* Guide Steps */}
      <section className="container mx-auto px-4 py-12 space-y-24">
        {guideSteps.map((step, index) => (
          <div
            key={step.number}
            className={`relative grid lg:grid-cols-2 gap-12 items-center rounded-3xl bg-card/85 p-8 md:p-12 backdrop-blur-sm overflow-hidden ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            <div
              className={`pointer-events-none absolute inset-0 opacity-35 blur-3xl ${
                index % 2 === 0
                  ? "bg-[radial-gradient(circle_at_left,rgba(183,255,0,0.2),transparent_55%)]"
                  : "bg-[radial-gradient(circle_at_right,rgba(183,255,0,0.2),transparent_55%)]"
              }`}
            />
            {/* Image - alternates position */}
            <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <div className="relative">
                {/* Number Circle */}
                <div className="absolute -top-8 -left-8 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#B7FF00] flex items-center justify-center z-10 border-4 border-background">
                  <span className="text-3xl md:text-4xl font-semibold text-black">
                    {step.number}
                  </span>
                </div>
                {/* Image Container */}
                <div className="aspect-2/3 w-full max-w-md mx-auto relative overflow-hidden rounded-3xl border-2 border-[#B7FF00]/30">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className={`space-y-6 ${
                index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                {step.title}
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed text-pretty">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to play?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Now that you've mastered the basics, it's time to put your skills to
          the test!
        </p>
        <Button
          size="lg"
          className="bg-[#B7FF00] hover:bg-[#B7FF00]/90 text-black font-semibold text-xl px-12 py-5"
          asChild
        >
          <a href={game.playUrl} target="_blank" rel="noopener noreferrer">
            PLAY
          </a>
        </Button>
      </section>
    </div>
  );
}
