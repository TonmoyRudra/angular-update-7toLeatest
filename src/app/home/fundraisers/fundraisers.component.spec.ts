import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FundraisersComponent } from './fundraisers.component';

describe('FundraisersComponent', () => {
  let component: FundraisersComponent;
  let fixture: ComponentFixture<FundraisersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraisersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
