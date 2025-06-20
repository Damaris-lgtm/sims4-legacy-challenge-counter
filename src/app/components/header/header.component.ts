import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameChangeSelectionComponent } from '../generations-overview/game-change-selection/game-change-selection.component';
import { ResultsSelectionComponent } from '../results/results-selection/results-selection.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, GameChangeSelectionComponent, ResultsSelectionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
