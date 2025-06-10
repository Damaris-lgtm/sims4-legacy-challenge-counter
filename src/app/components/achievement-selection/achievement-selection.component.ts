import { Component, computed, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Achievement, AchievementType, Aspiration, AspirationCategory, CustomAchievement, TraitType } from '../../model/data.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DataStore } from '../../store/data.store';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-achievement-selection',
  imports: [FormsModule, MatAutocompleteModule, MatInputModule, MatButtonModule, MatIconModule, MatChipsModule, MatSlideToggleModule, MatSliderModule],
  templateUrl: './achievement-selection.component.html',
  styleUrl: './achievement-selection.component.scss'
})
export class AchievementSelectionComponent<T extends Achievement> {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  protected readonly AchievementType = AchievementType;
  readonly store = inject(DataStore);

  readonly label = input.required<string>();
  readonly currentAchievements = input.required<T[]>();
  readonly allAchievements = input.required<T[]>();
  readonly achievementType = input.required<AchievementType>();
  readonly allowMultiple = input(false);
  readonly achievementChanged = output<T[]>();

  searchTerm = signal<string>('');

  readonly allFilteredAchievements = computed(() => {
    const searchTerm = this.searchTerm().toLowerCase();
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
    const achievement = (this.allAchievements().find(a => a.id === achievementId)) ?? this.getNewCustomAchievement(achievementId);

    if (this.allowMultiple() || !this.currentAchievements().find(a => a.id === achievement.id)) {
      this.achievementChanged.emit([...this.currentAchievements(), {
        ...achievement, elementId: crypto.randomUUID()
      }]);
    } else {
      alert(`${this.label()} with id ${achievementId} already exists in the current ${this.label()}s.`);
    }
  }
  private getNewCustomAchievement(label: string): T {
    const newAchievement: CustomAchievement = {
      id: label.toLocaleUpperCase().replace(' ', '_'),
      label: label,
      pack: 'CUSTOM',
      achievementType: this.achievementType()
    }
    switch (this.achievementType()) {
      case AchievementType.TRAIT:
        newAchievement['type'] = TraitType.BASE;
        break;
      case AchievementType.SKILL:
      case AchievementType.CARRIER:
        newAchievement['maxLevel'] = 10;
        break;
      case AchievementType.ASPIRATION:
        newAchievement['category'] = AspirationCategory.ATHLETIC;
        break;
    }
    return this.store.addCustomAchievement(newAchievement, this.achievementType()) as T;
  }

  deleteAchievement(achievement: T): void {
    this.achievementChanged.emit(this.currentAchievements().filter(a => a.elementId !== achievement.elementId));
  }

  toggleCompleted(achievement: T): void {
    if (achievement.achievementType === AchievementType.ASPIRATION) {
      const aspiration = achievement as unknown as Aspiration;
      aspiration['completed'] = !aspiration['completed'];
      this.achievementChanged.emit([...this.currentAchievements()]);
    } else {
      console.warn('Toggle completed is only applicable for aspirations.');
    }
  }
  updateLevel(achievement: T, level: number): void {
    console.log(achievement, level);
    
    if (achievement.achievementType === AchievementType.SKILL || achievement.achievementType === AchievementType.CARRIER) {
      const updatedAchievement = achievement as unknown as { level?: number, maxLevel: number } & Achievement;
      updatedAchievement.level = level;
      this.achievementChanged.emit([...this.currentAchievements()]);
    } else {
      console.warn('Update level is only applicable for skills and carriers.');
    }
  }
}