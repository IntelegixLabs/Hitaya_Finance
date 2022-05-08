import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itr4Component } from './itr4.component';

describe('Itr4Component', () => {
  let component: Itr4Component;
  let fixture: ComponentFixture<Itr4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Itr4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Itr4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
