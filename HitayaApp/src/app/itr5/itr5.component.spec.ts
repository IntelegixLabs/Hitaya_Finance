import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itr5Component } from './itr5.component';

describe('Itr5Component', () => {
  let component: Itr5Component;
  let fixture: ComponentFixture<Itr5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Itr5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Itr5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
