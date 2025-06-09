import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievmentSelectionComponent } from './achievement-selection.component';

describe('AchievmentSelectionComponent', () => {
  let component: AchievmentSelectionComponent;
  let fixture: ComponentFixture<AchievmentSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievmentSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievmentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
