import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationsOverviewComponent } from './generations-overview.component';

describe('GenerationsOverviewComponent', () => {
  let component: GenerationsOverviewComponent;
  let fixture: ComponentFixture<GenerationsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
