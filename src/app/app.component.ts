import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenerationsOverviewComponent } from './components/generations-overview/generations-overview.component';
import { HeaderComponent } from "./components/header/header.component";
import { DataStore } from './store/data.store';
import { RequirementsStore } from './store/requirements.store';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'sims4-legacy-counter';
  protected readonly dataStore = inject(DataStore);
  protected readonly requirementsStore = inject(RequirementsStore);
  ngOnInit(): void {
    this.dataStore.loadData();
    this.requirementsStore.loadData();
  }
}
