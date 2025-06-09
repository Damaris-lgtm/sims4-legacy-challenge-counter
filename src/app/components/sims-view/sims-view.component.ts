import { Component, computed, effect, inject, input, Signal, signal } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DataStore } from '../../store/data.store';
import { SimData } from '../../model/generation.model';
import { TRAITS } from '../../model/traits.data';
import { AchievementType, Aspiration, AspirationCategory, Carrier, CarrierType, CustomAchievement, Medal, Skill, Trait, TraitType } from '../../model/data.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormsModule } from '@angular/forms';
import { AchievementSelectionComponent } from "../achievement-selection/achievement-selection.component";
import { SKILLS } from '../../model/skills.data';
import { ASPIRATIONS } from '../../model/aspirations.data';
import { CARRIERS } from '../../model/carriers.data';
import { MatTreeModule } from '@angular/material/tree';
import { MEDALS } from '../../model/medals.data';

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
 
}
