"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProfileHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-card/60 backdrop-blur-sm px-6 sm:px-8 md:px-16 py-12 md:py-24 min-h-[70vh] flex items-center">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(183,255,0,0.08),transparent_55%)]" />

      <div className="relative flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-20 w-full">
        {/* Profile image with effects */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-[#B7FF00] to-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-[#B7FF00]/30 shadow-2xl shadow-[#B7FF00]/25 ring-2 ring-background">
            <img
              src="/perfil.png"
              alt="@chukinice"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Online status indicator */}
          <div className="absolute bottom-3 right-3 w-7 h-7 bg-emerald-500 rounded-full border-4 border-background shadow-lg">
            <div className="w-full h-full bg-emerald-400 rounded-full animate-ping opacity-75" />
          </div>
        </div>

        {/* Profile information */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <div className="space-y-4">
            {/* Username with glow effect */}
            <div className="flex items-center justify-center lg:justify-start">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-[#B7FF00] to-green-400 bg-clip-text text-transparent">
                @chukinice
              </h1>
            </div>

            {/* Role badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm sm:text-base font-semibold text-[#B7FF00] border-[#B7FF00]/40 hover:bg-transparent"
              >
                Remix Developer
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm sm:text-base font-semibold border-purple-500/30 text-purple-400 hover:bg-purple-500/10 transition-colors"
              >
                Farcaster Builder
              </Badge>
            </div>
          </div>

          {/* Bio */}
          <p className="text-foreground/80 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
            Following the developer path "From zero to hero." Thanks to Remix
            and AI, I've gone from making a simple tic-tac-toe to building full
            complex games. You can find me having fun at every JAM or hanging
            out in the official Remix Discord.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-5 sm:gap-8 justify-items-center lg:flex lg:flex-wrap lg:gap-10 lg:justify-start">
            <div className="text-center lg:text-left space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#B7FF00]">
                +8
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                Snap-Apps
              </div>
            </div>
            <div className="text-center lg:text-left space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400">
                +400k
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                Games Played
              </div>
            </div>
            <div className="text-center lg:text-left space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400">
                94%
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                Average Rating
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <Button
              asChild
              size="lg"
              className="bg-[#B7FF00] text-black hover:bg-[#B7FF00]/90 w-full sm:w-auto"
            >
              <a
                href="https://farcaster.xyz/chukinice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Farcaster
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/50 hover:border-purple-500/50 hover:text-purple-400 w-full sm:w-auto"
            >
              <a
                href="https://x.com/chukinice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
