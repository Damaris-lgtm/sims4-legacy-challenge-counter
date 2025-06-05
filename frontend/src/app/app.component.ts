import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenerationsOverviewComponent } from './generations-overview/generations-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenerationsOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sims4-legacy-counter';
}
