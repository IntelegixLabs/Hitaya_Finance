import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAnalysisComponent } from './saving-analysis.component';

describe('SavingAnalysisComponent', () => {
  let component: SavingAnalysisComponent;
  let fixture: ComponentFixture<SavingAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
