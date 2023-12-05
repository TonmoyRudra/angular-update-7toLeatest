import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaymentOptionComponent } from './edit-payment-option.component';

describe('EditPaymentOptionComponent', () => {
  let component: EditPaymentOptionComponent;
  let fixture: ComponentFixture<EditPaymentOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaymentOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaymentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
