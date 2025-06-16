import { Achievement, Aspiration, Career, Collection, Death, GameAchievement, Medal, OccultType, Preference, Punishment, Skill, Trait } from "./achievement.model";

export interface DataSave {
    id: string,
    name?: string,
    generations: GenerationData[],
    sims: SimData[],
    customData: Achievement[],
    requirementRules?: string
}
export interface GenerationData {
    founder: string,
    spouse: string[],
    children: string[],
    heir?: string,
}

export interface SimData {
    id: string;
    name: string;
    occult?: OccultType[];
    traits: Trait[];
    aspirations: Aspiration[];
    skills: Skill[];
    careers: Career[];
    medals: Medal[];
    deaths?: Death[];
    collections?: Collection[];
    punishments?: Punishment[];
    gameAchievements?: GameAchievement[];
    customAchievements?: Achievement[];
    preferences?: Preference[];
}

