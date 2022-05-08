import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itr2Component } from './itr2.component';

describe('Itr2Component', () => {
  let component: Itr2Component;
  let fixture: ComponentFixture<Itr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Itr2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Itr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
