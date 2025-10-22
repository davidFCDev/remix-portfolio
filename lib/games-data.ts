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
    title: "The Open-Sea",
    subtitle: "Pirate-styled NFT puzzle",
    description:
      "Sail a gauntlet of increasingly intricate puzzles inspired by the OpenSea marketplace. Flip switches, route twin pirates, and haul treasure while racing the tide for leaderboard glory.",
    tags: ["Adventure", "Strategy", "Puzzle"],
    thumbnail: "/images/opensea/Opensea-pathdrop.png",
    videoUrl: "/videos/opensea-clip.mp4",
    playUrl: "https://remix.gg/g/6d6bc837-fad6-47ee-91cd-cdfeb472750a",
    stats: {
      plays: "+21K",
      users: "+7K",
      time: "+305h",
      rating: "96%",
    },
    guide: [
      {
        title: "Solve every puzzle",
        image: "/images/opensea/Opensea-1.png",
        body: "Each map demands a fresh approach—experiment with levers, tides, and portals to clear the board.",
      },
      {
        title: "Command the twin crew",
        image: "/images/opensea/Opensea-2.png",
        body: "Mirror-linked pirates move together. Navigate both safely to the exit without stranding your mate.",
      },
      {
        title: "Collect the treasure haul",
        image: "/images/opensea/Opensea-3.png",
        body: "Snag every coin before escaping to boost your score and climb the Open-Sea leaderboards.",
      },
    ],
  },
  {
    id: "5",
    title: "Farman Begins",
    subtitle: "Vertical ascent arcade",
    description:
      "Suit up as rookie superhero Farman and rocket toward the stars. Dodge meteor storms, weave past laser grids, and climb higher with every flawless run.",
    tags: ["Arcade", "Endless", "Superhero"],
    thumbnail: "/images/farman/Farman-2.png",
    videoUrl: "/videos/farman-clip.mp4",
    playUrl: "https://remix.gg/g/9d9bc5ea-41de-4d68-b56e-953b6731fa25",
    stats: {
      plays: "+67.2K",
      users: "+7.8K",
      time: "+222h",
      rating: "93%",
    },
    guide: [
      {
        title: "Step into Farman's suit",
        image: "/images/farman/Farman-1.png",
        body: "Ascend endlessly through the skyline and push your score into heroic territory.",
      },
      {
        title: "Dodge every obstacle",
        image: "/images/farman/Farman-2.png",
        body: "Watch for crystalline shards, roaming meteors, and sweeping laser beams—one hit ends the climb.",
      },
      {
        title: "Collect every letter",
        image: "/images/farman/Farman-3.png",
        body: "Spell F-A-R-M-A-N mid-flight to unlock devastating superpowers and clear the path ahead.",
      },
      {
        title: "Trigger Super Farman",
        image: "/images/farman/Farman-4.png",
        body: "Grow to giant size, smash obstacles effortlessly, and rake in multiplied points before the power fades.",
      },
    ],
  },
  {
    id: "6",
    title: "Bubble Bluster",
    subtitle: "Bubble-matching arcade classic",
    description:
      "Rotate through three heroes with signature abilities and keep cascading clusters in check before the wall of bubbles crashes past the red line.",
    tags: ["Arcade", "Puzzle", "Casual"],
    thumbnail: "/images/bubble/Bubble-3.png",
    videoUrl: "/videos/bubble-clip.mp4",
    playUrl: "https://remix.gg/g/Y58Z5vSLnB41",
    stats: {
      plays: "+52.2k",
      users: "+11.4k",
      time: "+6.2k h",
      rating: "96%",
    },
    guide: [
      {
        title: "Draft your hero",
        image: "/images/bubble/Bubble-1.png",
        body: "Swap between sharpshooter, disruptor, or support playstyles—each hero bends the board in a different direction.",
      },
      {
        title: "Line up the shots",
        image: "/images/bubble/Bubble-2.png",
        body: "Bank your angles, chain combos of three or more, and stagger pops to keep the ceiling from descending.",
      },
      {
        title: "Time the ultimate",
        image: "/images/bubble/Bubble-3.png",
        body: "Every hero carries a once-per-stage ultimate ability—save it for the moment when the cluster pile feels unstoppable.",
      },
    ],
  },
  {
    id: "7",
    title: "Doodle Card Game",
    subtitle: "Card battler with doodled flair",
    description:
      "A Triple Triad-inspired duel where the Doodles NFT crew brings hand-drawn style to tactical matchups. Climb through escalating tiers, decode new rule sets, and outwit the AI to steal its rarest cards.",
    tags: ["Cards", "Strategy", "Puzzle"],
    thumbnail: "/images/doodle/Doodles-2.png",
    videoUrl: "/videos/doodle-clip.mp4",
    playUrl: "https://remix.gg/g/060ff0c1-c339-4166-bda7-f0672943354c",
    stats: {
      plays: "+17.7k",
      users: "+5.8k",
      time: "+599h",
      rating: "83%",
    },
    guide: [
      {
        title: "Clear every tier",
        image: "/images/doodle/Doodles-1.png",
        body: "Each stage stacks on fresh rule modifiers—adapt your deck and sequencing to keep the advantage.",
      },
      {
        title: "Outthink the AI",
        image: "/images/doodle/Doodles-2.png",
        body: "Anticipate counter-plays and place higher-value edges to flip adjacent cards in your favor.",
      },
      {
        title: "Steal the prize card",
        image: "/images/doodle/Doodles-3.png",
        body: "Beat each rival to claim their signature card and sculpt the most dominant deck on the ladder.",
      },
    ],
  },
];
