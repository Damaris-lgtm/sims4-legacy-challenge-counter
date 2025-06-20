import { Component, inject, Signal, computed } from '@angular/core';
import { RequirementsStore } from '../../../store/requirements.store';
import { RequirementsSave } from '../../../shared/model/requirements.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-results-selection',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './results-selection.component.html',
  styleUrl: './results-selection.component.scss'
})
export class ResultsSelectionComponent {

  private store = inject(RequirementsStore);
  saves: Signal<RequirementsSave[]> = computed(() => Object.values(this.store.saves()).filter(save => !!save));

   current: Signal<string | undefined> = this.store.current;
    currentName: Signal<string | undefined> = computed(() => this.store.current() && this.store.saves()[this.store.current()!] ?
      this.store.saves()[this.store.current()!]?.label : undefined);
  

      addRulesSet() {
        this.store.addNewRulesSet();
      }
  selectRulesSet(rulesSet: RequirementsSave) {
    this.store.changeCurrent(rulesSet.id);
  }
  deleteRulesSet() {
    this.store.deleteRulesSet(this.store.current()!);
  }
}
