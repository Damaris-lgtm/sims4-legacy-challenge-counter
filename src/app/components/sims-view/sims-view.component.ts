import { Component, computed, effect, inject, input, Signal, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { DataStore } from '../../store/data.store';
import { SimData } from '../../model/generation.model';
import { TRAITS } from '../../model/traits.data';
import { Achievement, AchievementType, Aspiration, Carrier, Death, GameAchievement, Medal, Punishment, Skill, Trait } from '../../model/data.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormsModule } from '@angular/forms';
import { AchievementSelectionComponent } from "../achievement-selection/achievement-selection.component";
import { SKILLS } from '../../model/skills.data';
import { ASPIRATIONS } from '../../model/aspirations.data';
import { CARRIERS } from '../../model/carriers.data';
import { MatTreeModule } from '@angular/material/tree';
import { MEDALS } from '../../model/medals.data';
import { DEATHS } from '../../model/death.data';
import { GAME_ACHIEVEMENTS } from '../../model/game-achievements.data';
import { PUNISHMENTS } from '../../model/punishments.data';

@Component({
  selector: 'app-sims-view',
  imports: [MatSelectModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, AchievementSelectionComponent, MatTreeModule],
  templateUrl: './sims-view.component.html',
  styleUrl: './sims-view.component.scss'
})
export class SimsViewComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  private store = inject(DataStore);

  sim = input.required<SimData>();
  protected readonly traits: Signal<Trait[]> = computed(() => {
    return [...TRAITS, ...this.store.customData()
      .filter(a => a.achievementType === AchievementType.TRAIT)
      .map(a => a as Trait)];
  });
  protected readonly skills: Signal<Skill[]> = computed(() => {
    return [...SKILLS, ...this.store.customData()
      .filter(a => a.achievementType === AchievementType.SKILL)
      .map(a => a as Skill)];
  });
  protected readonly aspirations: Signal<Aspiration[]> = computed(() => {
    return [...ASPIRATIONS, ...this.store.customData()
      .filter(a => a.achievementType === AchievementType.ASPIRATION)
      .map(a => a as Aspiration)];
  });
  protected readonly carriers: Signal<Carrier[]> = computed(() => {
    return [...CARRIERS, ...this.store.customData()
      .filter(a => a.achievementType === AchievementType.CARRIER)
      .map(a => a as Carrier)];
  });
  protected readonly medals: Signal<Medal[]> = computed(() => {
    return [...MEDALS, ...this.store.customData()
      .filter(a => a.achievementType === AchievementType.MEDAL)
      .map(a => a as Medal)];
  });
  protected readonly deaths: Signal<Death[]> = computed(() => {
    return [...DEATHS, ...this.store.customData()
      .filter(a => a.achievementType === AchievementType.DEATH)
      .map(a => a as Death)];
  });
  protected readonly gameAchievements: Signal<GameAchievement[]> = computed(() => {
    return [...GAME_ACHIEVEMENTS, ...this.store.customData()
      .filter(a => a.achievementType === AchievementType.Game) 
      .map(a => a as GameAchievement)];
  });
  protected readonly punishments: Signal<Punishment[]> = computed(() => {
    return [...PUNISHMENTS, ...this.store.customData()
      .filter(a => a.achievementType === AchievementType.PUNISHMENT)
      .map(a => a as Punishment)];
  });

  protected readonly customAchievements: Signal<Achievement[]> = computed(() => {
    return this.store.customData()
      .filter(a => a.achievementType === AchievementType.CUSTOM)
      .map(a => a as Achievement);
  });

  AchievementType = AchievementType;
  saveSim() {
    this.store.updateSim(this.sim());
  }

  deleteSim() {
    this.store.deleteSim(this.sim());
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
  changeCarriers(carriers: Carrier[]) {
    this.sim().carrier = carriers;
    this.saveSim();
  }

  changeMedals(medals: Medal[]) {
    this.sim().medals = medals;
    this.saveSim();
  }
  changeDeaths(deaths: Death[]) {
    this.sim().deaths = deaths;
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
