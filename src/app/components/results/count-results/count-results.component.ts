import { Component, computed, inject, Signal } from '@angular/core';
import { RequirementsStore } from '../../../store/requirements.store';
import { CountRequirement, RequirementType } from '../../../model/requirements.model';
import { DataStore } from '../../../store/data.store';
import { TRAITS } from '../../../model/traits.data';
import { ASPIRATIONS } from '../../../model/aspirations.data';
import { CAREER } from '../../../model/career.data';
import { COLLECTIONS } from '../../../model/collections.data';
import { DEATHS } from '../../../model/death.data';
import { GAME_ACHIEVEMENTS } from '../../../model/game-achievements.data';
import { MEDALS } from '../../../model/medals.data';
import { OCCULTS } from '../../../model/occult.data';
import { PREFERENCES } from '../../../model/preferences.data';
import { PUNISHMENTS } from '../../../model/punishments.data';
import { Achievement, AchievementType, isCompleted } from '../../../model/achievement.model';
import { NgClass } from '@angular/common';
import { SKILLS } from '../../../model/skills.data';
import { DistinctPipe } from "../../../shared/distinct.pipe";
import { achievementEquals } from '../../../model/achievement.model';
import { FilterPipe } from "../../../shared/filter.pipe";

@Component({
  selector: 'app-count-results',
  imports: [NgClass, DistinctPipe, FilterPipe],
  templateUrl: './count-results.component.html',
  styleUrl: './count-results.component.scss'
})
export class CountResultsComponent {

  isCompleted = isCompleted;
  achievementEquals = achievementEquals;


  private store = inject(RequirementsStore);
  private dataStore = inject(DataStore);

  protected readonly countRequirements: Signal<CountRequirement[]> = computed(() => this.store.requirements().filter(req => req.requirementType === RequirementType.COUNT).map(req => req as CountRequirement));
  protected readonly allAchievements = computed(() => [
    ...TRAITS,
    ...SKILLS,
    ...ASPIRATIONS,
    ...CAREER,
    ...COLLECTIONS,
    ...DEATHS,
    ...GAME_ACHIEVEMENTS,
    ...MEDALS,
    ...OCCULTS,
    // Add preferences with like and dislike
    ...PREFERENCES.map(pref => ({ ...pref, like: true, label: `${pref.label} +` })),
    ...PREFERENCES.map(pref => ({ ...pref, like: false, label: `${pref.label} -` })),
    ...PUNISHMENTS,
    ...this.dataStore.customData()
  ].filter(this.onlyRequiredAchievements)

  );
  protected readonly achieved: Signal<Achievement[]> = computed(() => this.dataStore.sims()
    .map(sim => [...sim.aspirations, ...sim.customAchievements || [], ...sim.skills, ...sim.traits, ...sim.careers, ...sim.collections || [], ...sim.deaths || [], ...sim.gameAchievements || [], ...sim.medals, ...sim.occult || [], ...sim.preferences || [], ...sim.punishments || []])
    .flat()
    .filter(this.onlyRequiredAchievements)
    .filter((achievement: Achievement) => isCompleted(achievement))
  );

  private onlyRequiredAchievements: (achievement: Achievement) => boolean = (achievement: Achievement) => {
    return this.countRequirements().some(req => req.achievementType === achievement.achievementType);
  };

  hasOneAchieved = (achievement: Achievement) => this.achieved().some(ach => achievementEquals(ach, achievement));

  isAchievementTypeMethod(achievementType: AchievementType): (ach: Achievement) => boolean {
    return (ach: Achievement) => ach.achievementType === achievementType;
  }

}
