import { Component, computed, effect, inject, input, Signal, signal } from '@angular/core';

import { DataStore } from '../../store/data.store';
import { SimData } from '../../model/generation.model';
import { TRAITS } from '../../model/traits.data';
import { Achievement, AchievementType, Aspiration, Career, Collection, Death, GameAchievement, Medal, OccultType, Preference, Punishment, Skill, Trait } from '../../model/achievement.model';
import { MatInputModule } from '@angular/material/input';
import { C, COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormsModule } from '@angular/forms';
import { AchievementSelectionComponent } from "../achievement-selection/achievement-selection.component";
import { SKILLS } from '../../model/skills.data';
import { ASPIRATIONS } from '../../model/aspirations.data';
import { CAREER } from '../../model/career.data';
import { MEDALS } from '../../model/medals.data';
import { DEATHS } from '../../model/death.data';
import { GAME_ACHIEVEMENTS } from '../../model/game-achievements.data';
import { PUNISHMENTS } from '../../model/punishments.data';
import { OCCULTS } from '../../model/occult.data';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { COLLECTIONS } from '../../model/collections.data';
import { PREFERENCES } from '../../model/preferences.data';

@Component({
  selector: 'app-sims-view',
  imports: [ MatInputModule, FormsModule, AchievementSelectionComponent, MatIconModule, MatButtonModule],
  templateUrl: './sims-view.component.html',
  styleUrl: './sims-view.component.scss'
})
export class SimsViewComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  private store = inject(DataStore);

  sim = input.required<SimData>();

  protected readonly occults: Signal<OccultType[]> = computed(() => {
    return [...OCCULTS, ...this.store.customData()
      .filter(a => a.achievementType === AchievementType.OCCULT)
      .map(a => a as OccultType)];
  });
  protected readonly traits: Signal<Trait[]> = this.store.traits;

  protected readonly skills: Signal<Skill[]> = this.store.skills;
  protected readonly aspirations: Signal<Aspiration[]> = this.store.aspirations;
  protected readonly careers: Signal<Career[]> = this.store.careers;
  protected readonly medals: Signal<Medal[]> = this.store.medals;
  protected readonly deaths: Signal<Death[]> = this.store.deaths;
  protected readonly gameAchievements: Signal<GameAchievement[]> = this.store.gameAchievements;
  protected readonly punishments: Signal<Punishment[]> = this.store.punishments;
  protected readonly customAchievements: Signal<Achievement[]> = this.store.customAchievements;
  protected readonly collections: Signal<Collection[]> = this.store.collections;
  protected readonly preferences: Signal<Preference[]> = this.store.preferences;


  protected readonly AchievementType = AchievementType;
  saveSim() {
    this.store.updateSim(this.sim());
  }

  deleteSim() {
    this.store.deleteSim(this.sim());
  }

  changeOccults(occults: OccultType[]) {
    this.sim().occult = occults;
    this.saveSim();
  }

  changeTraits(traits: Trait[]) {
    this.sim().traits = traits;
    this.saveSim();
  }

  changeSkills(skills: Skill[]) {
    this.sim().skills = skills;
    this.saveSim();
  }

  changeAspirations(aspirations: Aspiration[]) {
    this.sim().aspirations = aspirations;
    this.saveSim();
  }
  changeCareers(careers: Career[]) {
    this.sim().careers = careers;
    this.saveSim();
  }
  changePreferences(preferences: Preference[]) {
    this.sim().preferences = preferences;
    this.saveSim();
  }

  changeMedals(medals: Medal[]) {
    this.sim().medals = medals;
  
    console.log(this.sim().medals);
    
    this.saveSim();
  }
  changeDeaths(deaths: Death[]) {
    this.sim().deaths = deaths;
    this.saveSim();
  }
  changeCollections(collections: Collection[]) {
    this.sim().collections = collections;
    this.saveSim();
  }
  changeGameAchievements(gameAchievements: GameAchievement[]) {
    this.sim().gameAchievements = gameAchievements;
    this.saveSim();
  }
  changePunishments(punishments: Punishment[]) {
    this.sim().punishments = punishments;
    this.saveSim();
  }
  changeCustomAchievements(customAchievements: Achievement[]) {
    this.sim().customAchievements = customAchievements;
    this.saveSim();
  }

}
