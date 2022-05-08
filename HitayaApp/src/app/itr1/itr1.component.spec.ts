import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itr1Component } from './itr1.component';

describe('Itr1Component', () => {
  let component: Itr1Component;
  let fixture: ComponentFixture<Itr1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Itr1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Itr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
