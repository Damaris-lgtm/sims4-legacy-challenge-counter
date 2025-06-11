import { Achievement, Aspiration, Career, Death, GameAchievement, Medal, Punishment, Skill, Trait } from "./data.model";

export interface DataSave {
    id: string,
    generations: GenerationData[],
    sims: SimData[],
    customData: Achievement[]
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
    maidenName?: string;
    traits: Trait[];
    aspirations: Aspiration[]
    skills: Skill[];
    careers: Career[];
    medals: Medal[];
    deaths?: Death[];
    punishments?: Punishment[];
    gameAchievements?: GameAchievement[];
    customAchievements?: Achievement[];
}

