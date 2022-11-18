import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FroalaComponent } from './froala.component';

describe('FroalaComponent', () => {
  let component: FroalaComponent;
  let fixture: ComponentFixture<FroalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FroalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FroalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
