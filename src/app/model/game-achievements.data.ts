import { AchievementType, Achievement, Age, GameAchievement } from "./achievement.model";

export const GAME_ACHIEVEMENTS: GameAchievement[] = [
  {
    id: "MEMORIAL_SONG",
    label: "Memorial Song",
    description: "Write a song for a Sim.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PIANO", minLevel: 8 },
      { skill: "VIOLIN", minLevel: 8 },
      { skill: "GUITAR", minLevel: 8 }
    ]
  },
  {
    id: "MEMORIAL_COMEDY",
    label: "Memorial Comedy",
    description: "Perform a comedy routine for a Sim.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "COMEDY", minLevel: 8 }
    ]
  },
  {
    id: "MEMORIAL_PAINTING",
    label: "Memorial Painting",
    description: "Paint a portrait of a Sim.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PAINTING", minLevel: 8 }
    ]
  },
  {
    id: "MEMORIAL_BIOGRAPHY",
    label: "Memorial Biography",
    description: "Write a biography about a Sim.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "WRITING", minLevel: 10 }
    ]
  },
  {
    id: "MEMORIAL_VIDEO_GAME",
    label: "Memorial Video Game",
    description: "Develop a video game in honor of a Sim.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PROGRAMMING", minLevel: 9 }
    ]
  },
  {
    id: "MEMORIAL_PHOTOGRAPHY",
    label: "Memorial Photography",
    description: "Take a photo of a Sim.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PHOTOGRAPHY", minLevel: 5 }
    ]
  },
  {
    id: "PAINT_ANGRY_PAINTING",
    label: "Paint angry painting",
    description: "Paint and collect a painting while Angry.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PAINTING" }
    ],
    mood: "Angry"
  },
  {
    id: "PAINT_SAD_PAINTING",
    label: "Paint sad painting",
    description: "Paint and collect a painting while Sad.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PAINTING" }
    ],
    mood: "Sad"
  },
  {
    id: "PAINT_PLAYFUL_PAINTING",
    label: "Paint playful painting",
    description: "Paint and collect a painting while Playful.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PAINTING" }
    ],
    mood: "Playful"
  },
  {
    id: "PAINT_FLIRTY_PAINTING",
    label: "Paint flirty painting",
    description: "Paint and collect a painting while Flirty.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PAINTING" }
    ],
    mood: "Flirty"
  },
  {
    id: "PAINT_CONFIDENT_PAINTING",
    label: "Paint confident painting",
    description: "Paint and collect a painting while Confident.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PAINTING" }
    ],
    mood: "Confident"
  },
  {
    id: "PAINT_FOCUSED_PAINTING",
    label: "Paint focused painting",
    description: "Paint and collect a painting while Focused.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "PAINTING" }
    ],
    mood: "Focused"
  },
  {
    id: "UPGRADE_FRIDGE_AND_STOVE",
    label: "Best Kitchen Appliances",
    description: "Buy the most expensive fridge and stove and perform all possible upgrades on both appliances.",
    achievementType: AchievementType.Game
  },
  {
    id: "BAKED_ALASKA_PERFECT",
    label: "Perfect Baked Alaska",
    description: "Have a Sim cook 'Baked Alaska' at the highest quality.",
    achievementType: AchievementType.Game,
    requiredSkills: [
      { skill: "GOURMET_COOKING", minLevel: 10 }
    ]
  },

  {
    id: "PERFECTLY_ROUNDED",
    label: "Perfectly Rounded",
    description: "Have a Sim become overweight from eating.",
    achievementType: AchievementType.Game
  },
  {
    id: "FULL_TABLE",
    label: "Full Table",
    description: "Have at least 6 Sims (family members or guests) eat together at the same table.",
    achievementType: AchievementType.Game
  },
  {
    id: "PERFECT_INGREDIENTS",
    label: "Perfect ingredients",
    description: "Cook a dish using at least two fresh ingredients of the highest quality.",
    achievementType: AchievementType.Game
  },
  {
    id: "PERFECT_FOOD_DATE",
    label: "Perfect food date",
    description: "During a date, have a Sim cook a meal or mix a drink of the highest quality for their date.",
    achievementType: AchievementType.Game
  },
  {
    id: "PERFECT_FOOD_PARTY",
    label: "Perfect food party",
    description: "During a party, serve both a group meal and a group serving of drinks of the highest quality to your guests.",
    achievementType: AchievementType.Game
  }
];