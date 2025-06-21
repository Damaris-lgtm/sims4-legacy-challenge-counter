import { Component, inject, input, output } from '@angular/core';
import { Achievement } from '../../shared/model/achievement.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DataStore } from '../../store/data.store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-achievement-settings',
  imports: [FormsModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './achievement-settings.component.html',
  styleUrl: './achievement-settings.component.scss'
})
export class AchievementSettingsComponent {
  private readonly dataStore = inject(DataStore);

  readonly achievement = input.required<Achievement>();

  readonly achievementChanged = output<Achievement>();
  readonly closed = output<void>();
  saveAchievemnt() {
    this.achievementChanged.emit(this.achievement());
  }
  deleteAchievement() {
    this.dataStore.deleteCustomAchievement(this.achievement());
    this.closed.emit();
  }

}
