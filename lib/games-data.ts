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
      time: "+11h",
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
    title: "Outlast Forever",
    subtitle: "Endless zombie survival",
    description:
      "Fight through relentless waves as the undead horde scales with every minute. Swap weapons on the fly, exploit enemy weaknesses, and chain multipliers to claw your way higher on the survivor leaderboards.",
    tags: ["Arcade", "Survival", "Horror"],
    thumbnail: "/images/outlast/Outlast-pathdrop.png",
    videoUrl: "/videos/outlast-clip.mp4",
    playUrl: "https://remix.gg/g/ee72a5ff-8484-4376-9f4e-310388e7213f",
    stats: {
      plays: "+12.7K",
      users: "+4.5K",
      time: "+290h",
      rating: "82%",
    },
    guide: [
      {
        title: "Outlast the swarm",
        image: "/images/outlast/Outlast-1.png",
        body: "Every extra minute survived multiplies your score—keep moving and kite the horde to stay alive.",
      },
      {
        title: "Pick the right weapon",
        image: "/images/outlast/Outlast-2.png",
        body: "Each zombie mutation has a weakness. Swap to the matching weapon type to shred through waves efficiently.",
      },
      {
        title: "Grab the best multiplier",
        image: "/images/outlast/Outlast-3.png",
        body: "Choose wisely at every portal branch. When overwhelmed, smash the red button to clear breathing room.",
      },
    ],
  },
  {
    id: "3",
    title: "Forgotten Path",
    subtitle: "Turn-based RPG battles",
    description:
      "Assemble a trio of spellcasters—warlock, mage, and priest—and tackle five escalating stages of wave-based combat. Rotate abilities strategically, keep every mage alive, and push through the gauntlet to unlock the secret ending.",
    tags: ["RPG", "Strategy", "Action"],
    thumbnail: "/images/forgotten/Forgotten-pathdrop.png",
    videoUrl: "/videos/forgotten-clip.mp4",
    playUrl: "https://remix.gg/g/74a152a9-f7b9-4583-9d0d-f2480d681702",
    stats: {
      plays: "+8.5K",
      users: "+4.8K",
      time: "+320h",
      rating: "97%",
    },
    guide: [
      {
        title: "Clear every tier",
        image: "/images/forgotten/Forgotten-1.png",
        body: "Each of the four tiers culminates in two waves and a boss—defeat them all to reach the final seal.",
      },
      {
        title: "Keep the mages alive",
        image: "/images/forgotten/Forgotten-2.png",
        body: "Warlock, mage, and priest all bring crucial spells. Rotate shields, crowd control, and heals to protect the trio.",
      },
      {
        title: "Study every enemy",
        image: "/images/forgotten/Forgotten-3.png",
        body: "Analyze enemy modifiers and adapt your turn order. Experiment with combo chains to break resistances.",
      },
      {
        title: "Consult the monster codex",
        image: "/images/forgotten/Forgotten-4.png",
        body: "Need intel mid-run? Check the codex to anticipate attack patterns and prep your counter-magic.",
      },
    ],
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
