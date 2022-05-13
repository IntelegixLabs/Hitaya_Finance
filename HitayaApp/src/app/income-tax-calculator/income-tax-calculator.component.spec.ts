import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeTaxCalculatorComponent } from './income-tax-calculator.component';

describe('IncomeTaxCalculatorComponent', () => {
  let component: IncomeTaxCalculatorComponent;
  let fixture: ComponentFixture<IncomeTaxCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeTaxCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeTaxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
