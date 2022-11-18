import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FroalaSaveButtonComponent } from './froala-save-button.component';

describe('FroalaSaveButtonComponent', () => {
  let component: FroalaSaveButtonComponent;
  let fixture: ComponentFixture<FroalaSaveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FroalaSaveButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FroalaSaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
