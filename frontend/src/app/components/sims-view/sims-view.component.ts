import { Component, inject, input } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DataStore } from '../../store/data.store';
import { SimData } from '../../model/generation.model';
import { TRAITS } from '../../model/traits.data';
import { Trait } from '../../model/data.model';

@Component({
  selector: 'app-sims-view',
  imports: [ReactiveFormsModule, MatSelectModule],
  templateUrl: './sims-view.component.html',
  styleUrl: './sims-view.component.scss'
})
export class SimsViewComponent {

  private store = inject(DataStore);

  sim = input.required<SimData>();
  TRAITS = TRAITS;
  formTrait = new FormControl<Trait | undefined>(undefined);

  saveSim() {
    console.log('Saving sim', this.sim());

    this.store.updateSim(this.sim());
  }
  deleteTrait(trait: Trait) {
    this.sim().traits = this.sim().traits.filter(t => t !== trait);
    this.saveSim();
  }
  addTrait() {
    if (!this.formTrait.value) {
      return;
    }
    this.sim().traits = [...this.sim().traits, this.formTrait.value];
    this.saveSim();
  }

}
