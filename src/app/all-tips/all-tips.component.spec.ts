import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTipsComponent } from './all-tips.component';

describe('AllTipsComponent', () => {
  let component: AllTipsComponent;
  let fixture: ComponentFixture<AllTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
