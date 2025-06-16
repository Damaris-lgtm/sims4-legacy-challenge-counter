import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChangeSelectionComponent } from './game-change-selection.component';

describe('GameChangeSelectionComponent', () => {
  let component: GameChangeSelectionComponent;
  let fixture: ComponentFixture<GameChangeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameChangeSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameChangeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
