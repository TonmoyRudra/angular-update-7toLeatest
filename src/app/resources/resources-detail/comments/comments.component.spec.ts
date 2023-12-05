import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesCommentsComponent } from './comments.component';

describe('ResourcesCommentsComponent', () => {
  let component: ResourcesCommentsComponent;
  let fixture: ComponentFixture<ResourcesCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
