import { Component, computed, effect, inject, input, Signal, signal } from '@angular/core';

import { DataStore } from '../../../store/data.store';
import { SimData } from '../../../shared/model/generation.model';
import { TRAITS } from '../../../shared/model/traits.data';
import { Achievement, AchievementType, Aspiration, Career, Collection, Death, GameAchievement, Medal, Milestone, OccultType, Preference, Punishment, Skill, Trait } from '../../../shared/model/achievement.model';
import { MatInputModule } from '@angular/material/input';
import { C, COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormsModule } from '@angular/forms';
import { AchievementSelectionComponent } from "../achievement-selection/achievement-selection.component";
import { OCCULTS } from '../../../shared/model/occult.data';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sims-view',
  imports: [MatInputModule, FormsModule, AchievementSelectionComponent, MatIconModule, MatButtonModule],
  templateUrl: './sims-view.component.html',
  styleUrl: './sims-view.component.scss'
})
export class SimsViewComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  private store = inject(DataStore);

  sim = input.required<SimData>();

  protected readonly achievementTypesMap = computed(() => Object.values(AchievementType).map(type => ({
    type: type as AchievementType,
    label: type.charAt(0).toUpperCase() + type.slice(1).toLocaleLowerCase(),
    data: this.store.allAchievements().filter(ach => ach.achievementType === type),
    current: (this.sim()[type.toLocaleLowerCase() + 's'] as Achievement[])|| [],
  })));


  protected readonly AchievementType = AchievementType;
  saveSim() {
    this.store.updateSim(this.sim());
  }

  deleteSim() {
    this.store.deleteSim(this.sim());
  }
  changeAchievements(achievements: Achievement[], type: AchievementType) {
    this.sim()[type.toLocaleLowerCase() + 's'] = achievements;
    this.saveSim();
  }

}
