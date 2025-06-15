import { Punishment, AchievementType } from "./achievement.model";

export const PUNISHMENTS: Punishment[] = [
  {
    id: "POWER_SHUTOFF",
    label: "Power shut off",
    description: "Each time your power is shut off because you didn't pay your bills.",
    achievementType: AchievementType.PUNISHMENT
  },
  {
    id: "WATER_SHUTOFF",
    label: "Water shut off",
    description: "Each time your water is shut off because you didn't pay your bills.",
    achievementType: AchievementType.PUNISHMENT
  },
  {
    id: "SOCIAL_SERVICES_INTERVENTION",
    label: "Social services",
    description: "Each time a baby, toddler, or child is taken away by social services.",
    achievementType: AchievementType.PUNISHMENT
  }
];