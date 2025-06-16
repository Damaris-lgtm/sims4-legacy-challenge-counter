import { Component, computed, inject, input, Signal } from '@angular/core';
import { RequirementsStore } from '../../../store/requirements.store';
import { CountRequirement, RequirementType } from '../../../shared/model/requirements.model';
import { DataStore } from '../../../store/data.store';
import { TRAITS } from '../../../shared/model/traits.data';
import { ASPIRATIONS } from '../../../shared/model/aspirations.data';
import { CAREER } from '../../../shared/model/career.data';
import { COLLECTIONS } from '../../../shared/model/collections.data';
import { DEATHS } from '../../../shared/model/death.data';
import { GAME_ACHIEVEMENTS } from '../../../shared/model/game-achievements.data';
import { MEDALS } from '../../../shared/model/medals.data';
import { OCCULTS } from '../../../shared/model/occult.data';
import { PREFERENCES } from '../../../shared/model/preferences.data';
import { PUNISHMENTS } from '../../../shared/model/punishments.data';
import { Achievement, AchievementType, isCompleted } from '../../../shared/model/achievement.model';
import { SKILLS } from '../../../shared/model/skills.data';
import { DistinctPipe } from "../../../shared/pipe/distinct.pipe";
import { achievementEquals } from '../../../shared/model/achievement.model';
import { FilterPipe } from "../../../shared/pipe/filter.pipe";

@Component({
  selector: 'app-count-results',
  imports: [ DistinctPipe, FilterPipe],
  templateUrl: './count-results.component.html',
  styleUrl: './count-results.component.scss'
})
export class CountResultsComponent {

  isCompleted = isCompleted;
  achievementEquals = achievementEquals;

  showOpen = input<boolean>(true);
  showCompleted = input<boolean>(true);

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
