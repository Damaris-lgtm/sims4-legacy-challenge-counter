import { Routes } from '@angular/router';
import { GenerationsOverviewComponent } from './components/generations-overview/generations-overview.component';
import { ResultsComponent } from './components/results/results.component';
import { SettingsComponent } from './settings/settings/settings.component';

export const routes: Routes = [
    { path: '', component: GenerationsOverviewComponent, pathMatch: 'full' },
    { path: 'results', component: ResultsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', redirectTo: '' }
];
