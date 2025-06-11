import { AchievementType, OccultType } from "./data.model";

export const OCCULTS: OccultType[] = [
    {
        id: "HUMAN",
        label: "Human",
        description: "A regular human being.",
        achievementType: AchievementType.OCCULT
    },
    {
        id: "VAMPIRE",
        label: "Vampire",
        description: "A supernatural being that feeds on the life force of the living.",
        achievementType: AchievementType.OCCULT
    },
    {
        id: "WEREWOLF",
        label: "Werewolf",
        description: "A human with the ability to transform into a wolf or wolf-like creature.",
        achievementType: AchievementType.OCCULT
    },
    {
        id: "SPELLCASTER",
        label: "Spellcaster",
        description: "A being with magical abilities.",
        achievementType: AchievementType.OCCULT
    },
    {
        id: "MERMAID",
        label: "Mermaid",
        achievementType: AchievementType.OCCULT
    },
    {
        id: "ALIEN",
        label: "Alien",
        description: "A being from another planet or dimension.",
        achievementType: AchievementType.OCCULT
    },
    {
        id: "GHOST",
        label: "Ghost",
        description: "The spirit of a deceased being.",
        achievementType: AchievementType.OCCULT
    },
    {
        id: "PLANTSIM",
        label: "Plantsim",
        description: "A sim with plant-like characteristics.",
        achievementType: AchievementType.OCCULT
    },
    {
        id: "SERVO",
        label: "Servo",
        description: "A robotic servant.",
        achievementType: AchievementType.OCCULT
    }
];