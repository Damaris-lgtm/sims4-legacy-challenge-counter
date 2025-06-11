import { Component, computed, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Achievement, AchievementType,MedalScore, Aspiration, AspirationCategory, Death, TraitType } from '../../model/data.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DataStore } from '../../store/data.store';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-achievement-selection',
  imports: [NgClass, FormsModule, MatAutocompleteModule, MatInputModule, MatButtonModule, MatIconModule, MatChipsModule, MatSlideToggleModule, MatSliderModule, MatTooltipModule, MatButtonToggleModule],
  templateUrl: './achievement-selection.component.html',
  styleUrl: './achievement-selection.component.scss'
})
export class AchievementSelectionComponent<T extends Achievement> {
  getBackgroundClass<T extends Achievement>(achievement: T): string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined {
    switch (achievement['score']) {
      case MedalScore.GOLD:
        return 'bg-gold';
      case MedalScore.SILVER:
        return 'bg-silver';
      case MedalScore.BRONZE:
        return 'bg-bronze';
    }
    if( achievement['completed']) {
      return 'bg-success';
    }
    if( achievement['maxLevel'] && achievement['level'] && achievement['level'] >= achievement['maxLevel']) {
      return 'bg-success';
    }
    if( achievement['revived']) {
      return 'bg-primary';
    }
    return 'bg-secondary';
  }

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  protected readonly AchievementType = AchievementType;
  readonly store = inject(DataStore);

  readonly label = input.required<string>();
  readonly currentAchievements = input.required<T[]>();
  readonly allAchievements = input.required<T[]>();
  readonly achievementType = input.required<AchievementType>();
  readonly allowMultiple = input(false);
  readonly allowNewCustom = input(true);
  readonly achievementChanged = output<T[]>();
  MedalScore = MedalScore;

  searchTerm = signal<string>('');

  readonly allFilteredAchievements = computed(() => {
    const searchTerm = this.searchTerm().toLowerCase();
    return this.allAchievements()
      .filter(achievement => {
        return this.allowMultiple() || !this.currentAchievements().some(a => a.id === achievement.id);
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
    let achievement = (this.allAchievements().find(a => a.id === achievementId));
    if(!this.allowNewCustom() && !achievement) {
     return alert(`Achievement with id ${achievementId} does not exist in the current ${this.label()}s.`);
    }
    if(!achievement) {
    achievement = this.getNewCustomAchievement(achievementId);
    }

    if (this.allowMultiple() || !this.currentAchievements().find(a => a.id === achievement.id)) {
      this.achievementChanged.emit([...this.currentAchievements(), {
        ...achievement, elementId: crypto.randomUUID()
      }]);
    } else {
      alert(`${this.label()} with id ${achievementId} already exists in the current ${this.label()}s.`);
    }
  }
  private getNewCustomAchievement(label: string): T {
    const newAchievement: Achievement = {
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
      case AchievementType.CAREER:
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
    if (achievement.achievementType === AchievementType.ASPIRATION || achievement.achievementType === AchievementType.COLLECTION) {
      const aspiration = achievement as unknown as Aspiration;
      aspiration['completed'] = !aspiration['completed'];
      this.achievementChanged.emit([...this.currentAchievements()]);
    } else {
      console.warn('Toggle completed is only applicable for aspirations and collections.');
    }
  }
  toggleRevived(achievement: T): void {
    if (achievement.achievementType === AchievementType.DEATH) {
      const death = achievement as unknown as Death;
      death['revived'] = !death['revived'];
      this.achievementChanged.emit([...this.currentAchievements()]);
    } else {
      console.warn('Toggle revived is only applicable for deaths.');
    }
  }
  updateLevel(achievement: T, level: number): void {

    if (achievement.achievementType === AchievementType.SKILL || achievement.achievementType === AchievementType.CAREER) {
      const updatedAchievement = achievement as unknown as { level?: number, maxLevel: number } & Achievement;
      updatedAchievement.level = level;
      this.achievementChanged.emit([...this.currentAchievements()]);
    } else {
      console.warn('Update level is only applicable for skills and carriers.');
    }
  }
  updateMedalScore<T extends Achievement>(achievement: T, score: MedalScore) {
    console.log('updateMedalScore', achievement, score);
  
    if(achievement.achievementType === AchievementType.MEDAL) {
      const updatedAchievement = achievement as unknown as { score?: MedalScore } & Achievement;
      switch (score) {
        case MedalScore.BRONZE:
          updatedAchievement.score = MedalScore.BRONZE;
          break;
        case MedalScore.SILVER:
          updatedAchievement.score = MedalScore.SILVER;
          break;
        case MedalScore.GOLD:
          updatedAchievement.score = MedalScore.GOLD;
          break;
          default:
          console.warn('Invalid medal score provided.');
      }
      this.achievementChanged.emit([...this.currentAchievements()]);
    } else {
      console.warn('Update medal score is only applicable for medals.');
    }
}
}