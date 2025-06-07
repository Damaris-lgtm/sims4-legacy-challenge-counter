import { Component, effect, inject, input } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DataStore } from '../../store/data.store';
import { SimData } from '../../model/generation.model';
import { TRAITS } from '../../model/traits.data';
import { Trait } from '../../model/data.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sims-view',
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './sims-view.component.html',
  styleUrl: './sims-view.component.scss'
})
export class SimsViewComponent {

  private store = inject(DataStore);
  protected form = new FormGroup({
    name: new FormControl<string>('')
  });

  sim = input.required<SimData>();
  TRAITS = TRAITS;
  formTrait = new FormControl<Trait | undefined>(undefined);
  constructor() {
    effect(() => {
      if (this.sim()) {
        this.form.setValue({
          name: this.sim().name
        });
      }
    });
  }

  saveSim() {
    this.sim().name = this.form.value.name || '';

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
