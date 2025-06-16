import { AchievementType } from "./achievement.model";
import { CountRequirement, RequirementsSave } from "./requirements.model";

export const ALL_ACHIEVEMENTS_TEMPLATE: RequirementsSave = {
    id: "ALL_REQUIREMENTS",
    label: "All Achievements",
    requirements: [
        new CountRequirement("ALL_TRAITS", "All Traits", AchievementType.TRAIT),
        new CountRequirement("ALL_ASPIRATIONS", "All Aspirations", AchievementType.ASPIRATION),
        new CountRequirement("ALL_SKILLS", "All Skills", AchievementType.SKILL),
        new CountRequirement("ALL_CAREERS", "All Careers", AchievementType.CAREER),
        new CountRequirement("ALL_MEDALS", "All Medals", AchievementType.MEDAL),
        new CountRequirement("ALL_DEATHS", "All Deaths", AchievementType.DEATH),
        new CountRequirement("ALL_OCCULTS", "All Occults", AchievementType.OCCULT),
        new CountRequirement("ALL_COLLECTIONS", "All Collections", AchievementType.COLLECTION),
        new CountRequirement("ALL_PREFERENCES", "All Preferences", AchievementType.PREFERENCE),
    ]
};