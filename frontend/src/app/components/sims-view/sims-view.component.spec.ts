import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimsViewComponent } from './sims-view.component';

describe('SimsViewComponent', () => {
  let component: SimsViewComponent;
  let fixture: ComponentFixture<SimsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
