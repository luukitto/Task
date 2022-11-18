import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Froala1Component } from './froala1.component';

describe('Froala1Component', () => {
  let component: Froala1Component;
  let fixture: ComponentFixture<Froala1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Froala1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Froala1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
