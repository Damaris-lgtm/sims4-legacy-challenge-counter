import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountResultsComponent } from './count-results.component';

describe('CountResultsComponent', () => {
  let component: CountResultsComponent;
  let fixture: ComponentFixture<CountResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
