import { Component, effect, inject, input, signal } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DataStore } from '../../store/data.store';
import { SimData } from '../../model/generation.model';
import { TRAITS } from '../../model/traits.data';
import { Skill, Trait, TraitType } from '../../model/data.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {FormsModule} from '@angular/forms';
import { AchievementSelectionComponent } from "../achievement-selection/achievement-selection.component";
import { SKILLS } from '../../model/skills.data';

@Component({
  selector: 'app-sims-view',
  imports: [MatSelectModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, AchievementSelectionComponent],
  templateUrl: './sims-view.component.html',
  styleUrl: './sims-view.component.scss'
})
export class SimsViewComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  private store = inject(DataStore);

  sim = input.required<SimData>();
  protected readonly traits = signal(TRAITS);
  protected readonly skills = signal(SKILLS);

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

}
