import { Component } from '@angular/core';
import { GenerationData, SimData } from '../model/generation.model';
import {MatExpansionModule} from '@angular/material/expansion'; 

@Component({
  selector: 'app-generations-overview',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './generations-overview.component.html',
  styleUrl: './generations-overview.component.scss'
})
export class GenerationsOverviewComponent {
  readonly founder: SimData = {
      id: 1,
      name: 'starter',
      traits:[],
      specialTraits:[],
      aspirations: {},
      skills:[],
      carrier: [],
      medals: []
  }

  readonly generations: GenerationData[] = [
    {
      founder: this.founder
  }
]
}
