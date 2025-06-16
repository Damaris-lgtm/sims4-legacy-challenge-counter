import { Component, computed, inject, Pipe, PipeTransform, Signal } from '@angular/core';
import { DataStore } from '../../../store/data.store';
import { Data } from '@angular/router';
import { DataSave } from '../../../shared/model/generation.model';
import { getDataSaveName, SaveNamePipe } from "../../../shared/pipe/data-save-name.pipe";

@Component({
  selector: 'app-game-change-selection',
  imports: [SaveNamePipe],
  templateUrl: './game-change-selection.component.html',
  styleUrl: './game-change-selection.component.scss'
})
export class GameChangeSelectionComponent {

  private dataStore = inject(DataStore);
  saves: Signal<DataSave[]> = computed(() => {
    console.log(this.dataStore.saves());
    
    return Object.values(this.dataStore.saves()).filter(save => !!save);
  });
  currentName: Signal<string| undefined> = computed(() => this.dataStore.current() && this.dataStore.saves()[this.dataStore.current()!] ?
  getDataSaveName(this.dataStore.saves()[this.dataStore.current()!]!) : undefined);

  addSave() {
this.dataStore.addNewSave();
}
  selectSave(save: DataSave) {
    this.dataStore.changeCurrent(save.id);
  }
}
