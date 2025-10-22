"use client";

import {
  Play as PlayStatIcon,
  Rating,
  Time,
  Users,
} from "@/components/icons/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Game } from "@/lib/games-data";
import Link from "next/link";

interface GameModalProps {
  game: Game | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GameModal({ game, open, onOpenChange }: GameModalProps) {
  if (!game) return null;

  const isVideoAsset = game.videoUrl?.toLowerCase().endsWith(".mp4");
  const statValues = game.stats ?? {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full sm:max-w-[96vw] lg:max-w-[1440px] max-h-[90vh] sm:max-h-[calc(100vh-6vw)] overflow-hidden border border-border/60 bg-card sm:bg-card/95 p-0 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">{game.title}</DialogTitle>
        </DialogHeader>

        <div className="relative max-h-[calc(90vh-6rem)] sm:max-h-none overflow-y-auto">
          <div className="relative grid gap-6 sm:gap-8 p-5 sm:p-6 md:p-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div className="space-y-7 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-balance">
                  {game.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance">
                  {game.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start">
                {game.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-3 py-1.5 text-xs sm:text-sm md:text-base bg-secondary/80 hover:bg-[#B7FF00]/10 hover:text-[#B7FF00] transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="text-foreground/80 text-base sm:text-lg md:text-2xl leading-relaxed text-pretty">
                {game.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 justify-items-stretch">
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
                      className={`group relative rounded-3xl border ${border} ${bg} px-3 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20`}
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 bg-linear-to-r ${gradient} via-transparent to-transparent opacity-0 group-hover:opacity-40 blur-2xl transition-opacity`}
                      />
                      <div className="relative flex items-center gap-3">
                        <span
                          className={`inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-background/80 ring-2 ${ring}`}
                        >
                          <Icon />
                        </span>
                        <div className="space-y-1 text-left">
                          <p
                            className={`text-[0.58rem] sm:text-[0.6rem] md:text-xs uppercase tracking-[0.2em] ${labelColor}`}
                          >
                            {label}
                          </p>
                          <p
                            className={`text-sm sm:text-base md:text-lg font-semibold ${valueColor}`}
                          >
                            {value}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                <Button
                  size="lg"
                  className="bg-[#B7FF00] hover:bg-[#B7FF00]/90 text-black font-semibold group h-auto w-full sm:w-auto px-7 md:px-12 py-4 md:py-5 text-base sm:text-lg md:text-xl shadow-none"
                  asChild
                >
                  <a
                    href={game.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#B7FF00] text-[#B7FF00] hover:bg-[#B7FF00]/10 font-semibold group bg-transparent h-auto w-full sm:w-auto px-7 md:px-12 py-4 md:py-5 text-base sm:text-lg md:text-xl shadow-none"
                  asChild
                  onClick={() => onOpenChange(false)}
                >
                  <Link href={`/games/${game.id}`}>Guide</Link>
                </Button>
              </div>
            </div>

            <div className="relative w-full flex justify-center">
              <div className="relative aspect-2/3 w-full max-w-full sm:max-w-sm lg:max-w-sm xl:max-w-md overflow-hidden rounded-4xl border-[3px] border-[#B7FF00]/40 max-h-[60vh] sm:max-h-[70vh]">
                {isVideoAsset ? (
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={game.thumbnail || "/placeholder.svg"}
                    aria-label={`${game.title} gameplay clip`}
                  >
                    <source src={game.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={game.thumbnail || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
