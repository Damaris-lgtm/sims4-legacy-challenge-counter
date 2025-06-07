import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { DataSave, GenerationData, SimData } from '../../model/generation.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataStore } from '../../store/data.store';
import { SimsViewComponent } from '../sims-view/sims-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

type DetailGenaration = {
  founder?: SimData;
  spouse: (SimData | undefined)[];
  children: (SimData | undefined)[];
  heir?: string;
}

@Component({
  selector: 'app-generations-overview',
  imports: [MatExpansionModule, ReactiveFormsModule, CommonModule, SimsViewComponent, MatButtonModule, MatIconModule],
  templateUrl: './generations-overview.component.html',
  styleUrl: './generations-overview.component.scss'
})
export class GenerationsOverviewComponent {
  //TODO create option to delete save, create new save, load save
  private store = inject(DataStore);

  protected sims = computed(() => this.store.sims());
  protected generations: Signal<DetailGenaration[]> = computed(() => this.store.generations().map(gen => ({

    founder: this.sims().find(sim => sim.id === gen.founder),
    spouse: gen.spouse?.map(spouseId => this.sims().find(sim => sim.id === spouseId)),
    children: gen.children?.map(childId => this.sims().find(sim => sim.id === childId)),
    heir: gen.heir
  }))
  );

  formName: FormControl = new FormControl('');

  protected simToEdit: WritableSignal<SimData | undefined> = signal(undefined);

  addGeneration() {
    const founderId = this.addSim();

    const newGeneration: GenerationData = {
      founder: founderId,
      spouse: [],
      children: []
    };
    this.updateGenerations([...this.store.generations(), newGeneration]);
  }

  private updateGenerations(generations: GenerationData[]): void {
    this.store.updateData({
      id: this.store.id(),
      sims: this.sims(),
      customData: this.store.customData(),
      generations
    });
  };

  constructor() {
    this.store.loadData();
  }
  getNameFromInput(id?: string): string {
    const name = id ?? this.formName.value ?? '';
    this.resetForm();
    return name.trim();
  }

  resetForm() {
    this.formName.reset();
  }
  addSim(id?: string, name?: string): string {
    const simId = id || crypto.randomUUID();
    if (!!this.sims().find(sim => sim.id === simId)) {
      return simId; // Sim already exists, return its ID
    }
    const newSim: SimData = {
      id: simId,
      name: name || simId,
      traits: [],
      aspirations: [],
      skills: [],
      carrier: [],
      medals: []
    };
    this.store.updateSim(newSim);
    return simId;
  }

  addSpouse(generationIndex: number, id?: string) {
    const simId = this.addSim();

    const generations = [...this.store.generations()];
    generations[generationIndex].spouse.push(simId);
    this.updateGenerations(generations);
  }

  addChild(generationIndex: number, id?: string) {
    const simId = this.addSim();
    const generations = [...this.store.generations()];
    generations[generationIndex].children?.push(simId);
    this.updateGenerations(generations);
  }

  editSim(simdata: SimData) {
    this.simToEdit.set(simdata);
  }
}
