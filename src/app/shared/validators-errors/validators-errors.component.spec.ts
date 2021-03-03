import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsErrorsComponent } from './validators-errors.component';

describe('ValidatorsErrorsComponent', () => {
  let component: ValidatorsErrorsComponent;
  let fixture: ComponentFixture<ValidatorsErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorsErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorsErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
