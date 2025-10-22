"use client";

import {
  Play as PlayStatIcon,
  Rating,
  Time,
  Users,
} from "@/components/icons/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { games } from "@/lib/games-data";
import Link from "next/link";

export function FeaturedGame() {
  const latestGame = games[0];
  const statValues = latestGame.stats ?? {
    plays: "+1K",
    users: "+113",
    time: "+9h",
    rating: "100%",
  };
  const featureStats = [
    {
      label: "Plays",
      value: statValues.plays,
      Icon: PlayStatIcon,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      gradient: "from-emerald-500/25",
      labelColor: "text-emerald-300",
      valueColor: "text-emerald-50",
      ring: "ring-emerald-500/30",
    },
    {
      label: "Users",
      value: statValues.users,
      Icon: Users,
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      gradient: "from-rose-500/20",
      labelColor: "text-rose-300",
      valueColor: "text-rose-50",
      ring: "ring-rose-500/30",
    },
    {
      label: "Time",
      value: statValues.time,
      Icon: Time,
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      gradient: "from-purple-500/20",
      labelColor: "text-purple-300",
      valueColor: "text-purple-50",
      ring: "ring-purple-500/30",
    },
    {
      label: "Rating",
      value: statValues.rating,
      Icon: Rating,
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      gradient: "from-amber-500/25",
      labelColor: "text-amber-300",
      valueColor: "text-amber-50",
      ring: "ring-amber-500/30",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-card/60 backdrop-blur-sm py-16 md:py-24 mt-16 min-h-[70vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,255,0,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(183,255,0,0.05),transparent_55%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-14 lg:gap-24 w-full">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#B7FF00]/70">
                Latest Release
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-balance">
                {latestGame.title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground text-balance">
                {latestGame.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {latestGame.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-4 py-2 text-sm md:text-base bg-secondary/80 hover:bg-[#B7FF00]/10 hover:text-[#B7FF00] transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-foreground/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {latestGame.description}
            </p>

            <div className="flex flex-wrap lg:flex-nowrap gap-3 md:gap-5 justify-center lg:justify-start">
              {featureStats.map(
                ({
                  label,
                  value,
                  Icon,
                  bg,
                  border,
                  gradient,
                  labelColor,
                  valueColor,
                  ring,
                }) => (
                  <div
                    key={label}
                    className={`group relative flex-1 min-w-[120px] max-w-[160px] rounded-3xl border ${border} ${bg} px-3 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 bg-linear-to-r ${gradient} via-transparent to-transparent opacity-0 group-hover:opacity-40 blur-2xl transition-opacity`}
                    />
                    <div className="relative flex items-center gap-3">
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/80 ring-2 ${ring}`}
                      >
                        <Icon />
                      </span>
                      <div className="space-y-1 text-left">
                        <p
                          className={`text-[0.6rem] md:text-xs uppercase tracking-[0.2em] ${labelColor}`}
                        >
                          {label}
                        </p>
                        <p
                          className={`text-base md:text-lg font-semibold ${valueColor}`}
                        >
                          {value}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-[#B7FF00] hover:bg-[#B7FF00]/90 text-black font-semibold group h-auto px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl shadow-none"
                asChild
              >
                <a
                  href={latestGame.playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#B7FF00] text-[#B7FF00] hover:bg-[#B7FF00]/10 font-semibold group bg-transparent h-auto px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl shadow-none"
                asChild
              >
                <Link href={`/games/${latestGame.id}`}>Guide</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-sm xl:max-w-md lg:-translate-x-6 xl:-translate-x-10">
            <div className="relative aspect-2/3 w-full overflow-hidden rounded-4xl border-[3px] border-[#B7FF00]/40 max-h-[75vh]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={latestGame.thumbnail || "/placeholder.svg"}
                aria-label={`${latestGame.title} gameplay clip`}
              >
                <source src={latestGame.videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
