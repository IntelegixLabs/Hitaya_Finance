import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTaxComponent } from './why-tax.component';

describe('WhyTaxComponent', () => {
  let component: WhyTaxComponent;
  let fixture: ComponentFixture<WhyTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
