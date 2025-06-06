import { Aspiration, Carrier, CustomAchievement, Medal, Skill, Trait } from "./data.model";

export interface DataSave {
    id: string,
    generations: GenerationData[],
    sims: SimData[],
    customData: Record<string, CustomAchievement | Trait | Aspiration | Skill | Carrier |  Medal>
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
    carrier: Carrier[];
    medals: Medal[];
    customAchievements?: string[];
}

