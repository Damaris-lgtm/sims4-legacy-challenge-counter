import { Component, computed, inject, signal } from '@angular/core';
import { DataStore } from '../../store/data.store';
import { AchievementSettingsComponent } from '../achievement-settings/achievement-settings.component';
import { Achievement, AchievementType } from '../../shared/model/achievement.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [AchievementSettingsComponent, NgClass],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {


  private readonly dataStore = inject(DataStore);
  protected readonly customData = this.dataStore.customData;
  protected readonly achievementTypesMap = computed(() => Object.values(AchievementType).map(type => ({
    type: type as AchievementType,
    label: type.charAt(0).toUpperCase() + type.slice(1).toLocaleLowerCase(),
    data: this.dataStore.customData().filter(ach => ach.achievementType === type)
  })).filter(type => type.data.length > 0 ));


  protected currentAchievemnt = signal<Achievement | undefined>(undefined);

  updateAchievement($event: Achievement) {
    this.dataStore.updateCustomAchievement($event)
  }
  selectAchievement($event: Achievement) {
    this.currentAchievemnt.set($event);
  }

}
