import { Component, computed, effect, inject, input, output, Signal, signal } from '@angular/core';

import { DataStore } from '../../../store/data.store';
import { SimData } from '../../../shared/model/generation.model';
import { Achievement, AchievementType} from '../../../shared/model/achievement.model';
import { MatInputModule } from '@angular/material/input';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormsModule } from '@angular/forms';
import { AchievementSelectionComponent } from "../achievement-selection/achievement-selection.component";
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
  closed = output<void>();

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

  markHeir() {
    this.store.markHeir(this.sim().id);
  }
  close() {
    this.closed.emit();
  }

}
