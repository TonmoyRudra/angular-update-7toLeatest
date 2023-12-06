import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MySalesComponent } from './my-sales.component';

describe('MySalesComponent', () => {
  let component: MySalesComponent;
  let fixture: ComponentFixture<MySalesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MySalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
