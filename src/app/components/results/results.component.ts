import { Component, computed, inject, signal } from '@angular/core';
import { RequirementsStore } from '../../store/requirements.store';
import { ALL_ACHIEVEMENTS_TEMPLATE } from '../../shared/model/requirements.all.data';
import { RequirementType } from '../../shared/model/requirements.model';
import { CountResultsComponent } from "./count-results/count-results.component";
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-results',
  imports: [CountResultsComponent, NgClass, FormsModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {


  private store = inject(RequirementsStore);

  protected readonly hasCurrent = computed(() => !!this.store.current());

  protected readonly countRequirements = computed(() => this.store.requirements().filter(req => req.requirementType === RequirementType.COUNT));
  protected readonly simRequirements = computed(() => this.store.requirements().filter(req => req.requirementType === RequirementType.SIM));
  protected readonly singleRequirements = computed(() => this.store.requirements().filter(req => req.requirementType === RequirementType.SINGLE));
  protected readonly generationRequirements = computed(() => this.store.requirements().filter(req => req.requirementType === RequirementType.GENERATION));

  protected readonly showOpenRequirements = signal<boolean>(true);
  protected readonly showCompletedRequirements = signal<boolean>(true);
  protected readonly current = this.store.currentSave
  createNewRuleSet() {
    // Logic to create a new RuleSet
    const newRuleSet = {
      id: crypto.randomUUID(),
      label: 'New Rule Set',
      requirements: [...ALL_ACHIEVEMENTS_TEMPLATE.requirements]
    };
    this.store.updateData(newRuleSet);
  }

  toggleViewMode(open: boolean, completed: boolean) {
    this.showOpenRequirements.set(open);
    this.showCompletedRequirements.set(completed);
  }

  changeName(name: string) {
    this.store.updateLabel(name)
  }

}
