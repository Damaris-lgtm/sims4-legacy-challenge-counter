import { Component, computed, Signal, signal } from '@angular/core';
import { DataSave, GenerationData, SimData } from '../model/generation.model';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type DetailGenaration =  {
  founder?: SimData;
  spouse: (SimData| undefined)[];
  children: (SimData | undefined)[];
  heir?: string;
}

@Component({
    selector: 'app-generations-overview',
    imports: [MatExpansionModule, ReactiveFormsModule, CommonModule],
    templateUrl: './generations-overview.component.html',
    styleUrl: './generations-overview.component.scss'
})
export class GenerationsOverviewComponent {
  //TODO create signal store and save in local storage
  //TODO create option to delete save, create new save, load save
  protected data = signal<DataSave>({
    id:'base',
    generations: [],
    sims: [],
    customData: {}
  });
  protected generations: Signal<DetailGenaration[]> = computed(() => this.data().generations.map(gen=> ({
  
    founder: this.data().sims.find(sim => sim.id === gen.founder),
    spouse: gen.spouse?.map(spouseId => this.data().sims.find(sim => sim.id === spouseId)),
    children: gen.children?.map(childId => this.data().sims.find(sim => sim.id === childId) ),
    heir: gen.heir
  }))
);
  protected sims = computed(() => this.data().sims);

  formName: FormControl = new FormControl('');




  addGeneration() {
    const founderId = this.addSim();
    
    const newGeneration: GenerationData = {
      founder: founderId,
      spouse: [],
      children: []
    };
    this.data.update(data => ({
      ...data,
      generations: [...data.generations, newGeneration]
    }));
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
    const simId = this.getNameFromInput(id);
    if(!!this.sims().find(sim => sim.id === simId)) {
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
    this.data.update(data => {
      return {
        ...data,
        sims: [...data.sims, newSim]
      };
    });
    return simId;
  }

  addSpouse(generationIndex: number, id?: string) {
    const simId = this.addSim();
  
    this.data.update(data => {
      const generations = [...data.generations];
      generations[generationIndex].spouse.push(simId);
      return {
        ...data,
        generations
      };
    });
  }

  addChild(generationIndex: number, id?: string) {
    const simId = this.addSim();
    this.data.update(data => {
      const generations = [...data.generations];
      generations[generationIndex].children?.push(simId);
      return {
        ...data,
        generations
      };
    });
  }

  editSim(simdata: SimData) {
    console.log('simdata', simdata);
    
  }
}
