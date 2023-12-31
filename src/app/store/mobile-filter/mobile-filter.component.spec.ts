import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileFilterComponent } from './mobile-filter.component';

describe('MobileFilterComponent', () => {
  let component: MobileFilterComponent;
  let fixture: ComponentFixture<MobileFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
