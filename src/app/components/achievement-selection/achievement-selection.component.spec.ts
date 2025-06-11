import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementSelectionComponent } from './achievement-selection.component';
import { Trait } from '../../model/data.model';

describe('AchievementSelectionComponent', () => {
  let component: AchievementSelectionComponent<Trait>;
  let fixture: ComponentFixture<AchievementSelectionComponent<Trait>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementSelectionComponent<Trait>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
