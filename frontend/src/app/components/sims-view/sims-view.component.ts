import { Component, effect, inject, input } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DataStore } from '../../store/data.store';
import { SimData } from '../../model/generation.model';
import { TRAITS } from '../../model/traits.data';
import { Trait, TraitType } from '../../model/data.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sims-view',
  imports: [MatSelectModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, MatChipsModule, MatAutocompleteModule],
  templateUrl: './sims-view.component.html',
  styleUrl: './sims-view.component.scss'
})
export class SimsViewComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  private store = inject(DataStore);

  sim = input.required<SimData>();
  TRAITS = TRAITS;
  currentTrait?: string;

  saveSim() {
    this.store.updateSim(this.sim());
  }
  deleteTrait(trait: Trait) {
    this.sim().traits = this.sim().traits.filter(t => t !== trait);
    this.saveSim();
  }
  addTrait(id: string) {
    const trait: Trait = this.TRAITS.find(t => t.id === id) ?? {
      id: id,
      label: id,
      ages: [],
      pack: 'CUSTOM',
      type: TraitType.BASE,
    };

    this.sim().traits = [...this.sim().traits, trait];
    this.saveSim();
  }

  selectTrait(event: MatAutocompleteSelectedEvent): void {
    console.log('Selected trait:', event.option.value);

    this.addTrait(event.option.value);
    event.option.deselect();
  }

  addTraitInput(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add trait
    if ((value || '').trim()) {
      this.addTrait(value);
    }


    // Clear the input value
    this.currentTrait = '';

  }

}
