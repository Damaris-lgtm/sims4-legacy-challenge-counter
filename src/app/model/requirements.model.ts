import { computed, signal, Signal } from "@angular/core";
import { Achievement, AchievementType } from "./achievement.model";

export interface RequirementsSave {
    id: string;
    label: string;
    requirements: Requirement[];
}
export class Requirement {
    id: string;
    label: string;
    description?: string;
    completed: Signal<boolean> = signal(false);
    requirementType: RequirementType;
    groupId?: string; // For grouping requirements together
    constructor(id: string, label: string, type: RequirementType = RequirementType.SINGLE) {
        this.requirementType = type;
        this.id = id;
        this.label = label;
    }
    points?: number; // Points associated with the requirement
   }

export enum RequirementType {
    SIM = 'SIM',
    GENERATION = 'GENERATION',
    SINGLE = 'SINGLE',
    COUNT = 'COUNT',
}

   export class CountRequirement extends Requirement {
    minCount?: number;
    achievementType: AchievementType;
    constructor(id: string, label: string, achievementType: AchievementType, minCount?: number) {
        super(id, label, RequirementType.COUNT);
        this.minCount = minCount;
        this.achievementType = achievementType;
    }
   }

   export class SingleRequirement extends Requirement {
       achievement: Achievement;
       constructor(id: string, label: string, achievement: Achievement) {
           super(id, label, RequirementType.SINGLE);
           this.achievement = achievement;
       }
   }

   export class SimRequirements extends Requirement {
    simId?: string;
    requirements: SingleRequirement[] = [];
    position?: 'FOUNDER' | 'HEIR' | 'PARTNER' | 'CHILD';
    constructor(id: string, label: string, simId?: string, position?: 'FOUNDER' | 'HEIR' | 'PARTNER' | 'CHILD') {
        super(id, label, RequirementType.SIM);
        this.simId = simId;
        this.position = position;
    }
    override completed: Signal<boolean> = computed(() => {
        return this.requirements.every(req => req.completed());
    });
}

   export class GenerationRequirements extends Requirement {
    requirements: (SingleRequirement | SimRequirements)[] = [];
     override completed: Signal<boolean> = computed(() => {
        return this.requirements.every(req => req.completed());
    });
    generationId?: string;
    generationIndex?: number;
    constructor(id: string, label: string, generationId?: string, generationIndex?: number) {
        super(id, label, RequirementType.GENERATION);
        this.generationId = generationId;
        this.generationIndex = generationIndex;
    }
}