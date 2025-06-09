import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Achievement } from '../../model/data.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-achievement-selection',
  imports: [FormsModule, MatAutocompleteModule, MatInputModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './achievement-selection.component.html',
  styleUrl: './achievement-selection.component.scss'
})
export class AchievementSelectionComponent<T extends Achievement> {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  readonly label = input.required<string>();
  readonly currentAchievements = input.required<T[]>();
  readonly allAchievements = input.required<T[]>();
  readonly achievementChanged = output<T[]>();

  searchTerm = signal<string>('');

  readonly allFilteredAchievements = computed(() => {
    const searchTerm = this.searchTerm().toLowerCase();
    console.log('Filtering achievements with search term:', searchTerm);
    return this.allAchievements()
    .filter(achievement => {
      return !this.currentAchievements().some(a => a.id === achievement.id);
    })
    .filter(achievement =>
      achievement.label.toLowerCase().includes(searchTerm)
    );
  });

  selectAchievement(event: MatAutocompleteSelectedEvent): void {
    this.addAchievement(event.option.value);
    event.option.deselect();
  }

  addAchievementInput(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.addAchievement(value);
    }
  }

  addAchievement(achievementId: string): void {
    if (!this.currentAchievements().find(a => a.id === achievementId)) {
      const achievement = this.allAchievements().find(a => a.id === achievementId);
      if (achievement) {
        this.achievementChanged.emit([...this.currentAchievements(), achievement]);
      }
    }
  }

  deleteAchievement(achievement: T): void {
    this.achievementChanged.emit(this.currentAchievements().filter(a => a.id !== achievement.id));
  }
}