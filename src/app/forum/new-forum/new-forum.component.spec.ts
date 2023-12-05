import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForumComponent } from './new-forum.component';

describe('NewForumComponent', () => {
  let component: NewForumComponent;
  let fixture: ComponentFixture<NewForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
