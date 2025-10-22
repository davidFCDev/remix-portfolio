export interface Game {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  thumbnail: string;
  videoUrl: string;
  playUrl: string;
  stats?: {
    plays: string;
    users: string;
    time: string;
    rating: string;
  };
  guide?: Array<{
    title: string;
    image: string;
    body: string;
  }>;
}

export const games: Game[] = [
  {
    id: "1",
    title: "I Am Pengu",
    subtitle: "Platformer inspired by Pudgy Penguins",
    description:
      "Join Pengu for a fast-paced platforming journey born from the Pudgy Penguins universe. Hop across icy islands, solve chilly puzzles, and chase arcade-style high scores through levels that evolve with the community season after season.",
    tags: ["Arcade", "Platform", "Puzzle"],
    thumbnail: "/images/pengu/pengu-pathdrop.png",
    videoUrl: "/videos/pengu-clip.mp4",
    playUrl: "https://remix.gg/g/ea8d3337-dda5-448c-a832-967b4dc39be2",
    stats: {
      plays: "+1K",
      users: "+127",
      time: "+11 hours",
      rating: "100%",
    },
    guide: [
      {
        title: "Conquer the first world",
        image: "/images/pengu/Pengu-1.png",
        body: "Five handcrafted stages capped by a boss encounter set the tone for Pengu's adventure.",
      },
      {
        title: "Save your runs",
        image: "/images/pengu/Pengu-2.png",
        body: "Bookmark your score and return any time to continue climbing the seasonal leaderboards.",
      },
      {
        title: "Use your ability",
        image: "/images/pengu/Pengu-3.png",
        body: "Each level ramps up complexity—trigger Pengu's special ability to keep momentum.",
      },
      {
        title: "Chase your best score",
        image: "/images/pengu/Pengu-4.png",
        body: "Collect every coin and Pengu egg, stay swift, and push for a record-breaking run.",
      },
    ],
  },
  {
    id: "2",
    title: "Puzzle Quest",
    subtitle: "Match-3 adventure game",
    description:
      "Embark on an epic puzzle adventure where every match counts. Solve challenging puzzles, unlock new worlds, and discover hidden treasures in this captivating match-3 game with stunning visuals and engaging gameplay.",
    tags: ["Puzzle", "Strategy", "Casual"],
    thumbnail: "/puzzle-quest-mobile-game.jpg",
    videoUrl: "/puzzle-quest-gameplay.jpg",
    playUrl: "https://example.com/play/puzzle-quest",
  },
  {
    id: "3",
    title: "Space Defender",
    subtitle: "Retro space shooter",
    description:
      "Defend the galaxy from alien invaders in this retro-inspired space shooter. Upgrade your ship, master powerful weapons, and face increasingly challenging waves of enemies in an homage to classic arcade games.",
    tags: ["Shooter", "Retro", "Action"],
    thumbnail: "/space-defender-retro-game.jpg",
    videoUrl: "/space-defender-gameplay.jpg",
    playUrl: "https://example.com/play/space-defender",
  },
  {
    id: "4",
    title: "Word Master",
    subtitle: "Daily word challenges",
    description:
      "Test your vocabulary and word-finding skills with daily challenges. Compete with friends, unlock achievements, and expand your linguistic prowess in this engaging word game that combines education with entertainment.",
    tags: ["Word", "Educational", "Daily"],
    thumbnail: "/word-master-mobile-game.jpg",
    videoUrl: "/word-master-gameplay.jpg",
    playUrl: "https://example.com/play/word-master",
  },
  {
    id: "5",
    title: "Racing Legends",
    subtitle: "High-octane racing",
    description:
      "Feel the adrenaline rush as you race through stunning tracks around the world. Customize your vehicles, compete in tournaments, and become a racing legend in this high-octane mobile racing experience.",
    tags: ["Racing", "Sports", "Multiplayer"],
    thumbnail: "/racing-legends-mobile-game.jpg",
    videoUrl: "/racing-legends-gameplay.jpg",
    playUrl: "https://example.com/play/racing-legends",
  },
  {
    id: "6",
    title: "Mystic Tales",
    subtitle: "Story-driven RPG",
    description:
      "Immerse yourself in a rich fantasy world filled with magic, mystery, and adventure. Make choices that shape your destiny, battle fearsome creatures, and uncover ancient secrets in this epic story-driven RPG.",
    tags: ["RPG", "Story", "Fantasy"],
    thumbnail: "/mystic-tales-rpg-game.jpg",
    videoUrl: "/mystic-tales-gameplay.jpg",
    playUrl: "https://example.com/play/mystic-tales",
  },
];
