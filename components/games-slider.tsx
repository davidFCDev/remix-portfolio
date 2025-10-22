"use client";

import { GameModal } from "@/components/game-modal";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Game } from "@/lib/games-data";
import { games } from "@/lib/games-data";
import { useState } from "react";

export function GamesSlider() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <section className="space-y-10 container mx-auto px-4">
      <div className="text-center space-y-4">
        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#B7FF00]/70">
          Game Library
        </p>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
          All Games
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          Swipe through featured adventures crafted for every player type
        </p>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
            dragFree: true,
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {games.map((game) => (
              <CarouselItem
                key={game.id}
                className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <Card
                  className="group h-full cursor-pointer overflow-hidden border-border/40 bg-background/60 transition-all duration-500 hover:-translate-y-2 hover:border-[#B7FF00] hover:shadow-2xl hover:shadow-[#B7FF00]/20"
                  onClick={() => setSelectedGame(game)}
                >
                  <div className="relative aspect-9/16 overflow-hidden">
                    <img
                      src={game.thumbnail || "/placeholder.svg"}
                      alt={game.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#B7FF00]/70">
                      <span>{game.tags[0] ?? "Featured"}</span>
                      <span>{game.tags[1] ?? "Arcade"}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-[#B7FF00]">
                      {game.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 text-pretty">
                      {game.subtitle}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-background/70 border-border/50 hover:border-[#B7FF00] hover:text-[#B7FF00]" />
          <CarouselNext className="bg-background/70 border-border/50 hover:border-[#B7FF00] hover:text-[#B7FF00]" />
        </Carousel>
      </div>

      <GameModal
        game={selectedGame}
        open={!!selectedGame}
        onOpenChange={(open) => !open && setSelectedGame(null)}
      />
    </section>
  );
}
