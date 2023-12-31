import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductProjectComponent } from './product-project.component';

describe('ProductProjectComponent', () => {
  let component: ProductProjectComponent;
  let fixture: ComponentFixture<ProductProjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
