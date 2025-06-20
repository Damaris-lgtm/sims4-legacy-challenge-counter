import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSelectionComponent } from './results-selection.component';

describe('ResultsSelectinComponent', () => {
  let component: ResultsSelectionComponent;
  let fixture: ComponentFixture<ResultsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
