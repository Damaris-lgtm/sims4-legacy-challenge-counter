import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementSettingsComponent } from './achievement-settings.component';

describe('AchievementSettingsComponent', () => {
  let component: AchievementSettingsComponent;
  let fixture: ComponentFixture<AchievementSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
