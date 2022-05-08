import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itr3Component } from './itr3.component';

describe('Itr3Component', () => {
  let component: Itr3Component;
  let fixture: ComponentFixture<Itr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Itr3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Itr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
