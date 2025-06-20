import { Component, computed, inject, Signal } from '@angular/core';
import { DataStore } from '../../../store/data.store';
import { DataSave } from '../../../shared/model/generation.model';
import { getDataSaveName, SaveNamePipe } from "../../../shared/pipe/data-save-name.pipe";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-game-change-selection',
  imports: [SaveNamePipe, MatIconModule, MatButtonModule],
  templateUrl: './game-change-selection.component.html',
  styleUrl: './game-change-selection.component.scss'
})
export class GameChangeSelectionComponent {

  private dataStore = inject(DataStore);
  saves: Signal<DataSave[]> = computed(() => Object.values(this.dataStore.saves()).filter(save => !!save));

  currentSave: Signal<string | undefined> = this.dataStore.current;
  currentName: Signal<string | undefined> = computed(() => this.dataStore.current() && this.dataStore.saves()[this.dataStore.current()!] ?
    getDataSaveName(this.dataStore.saves()[this.dataStore.current()!]!) : undefined);

  addSave() {
    this.dataStore.addNewSave();
  }
  selectSave(save: DataSave) {
    this.dataStore.changeCurrent(save.id);
  }

  deleteSave() {
    this.dataStore.deleteSave(this.dataStore.current()!);
  }
}
