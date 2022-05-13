import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxBenefitFormComponent } from './tax-benefit-form.component';

describe('TaxBenefitFormComponent', () => {
  let component: TaxBenefitFormComponent;
  let fixture: ComponentFixture<TaxBenefitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxBenefitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxBenefitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
