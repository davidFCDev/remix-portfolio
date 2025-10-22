import { FeaturedGame } from "@/components/featured-game";
import { Footer } from "@/components/footer";
import { GamesSlider } from "@/components/games-slider";
import { Header } from "@/components/header";
import { ProfileHero } from "@/components/profile-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12 space-y-20">
        <ProfileHero />
        <FeaturedGame />
        <GamesSlider />
        <Footer />
      </div>
    </main>
  );
}
