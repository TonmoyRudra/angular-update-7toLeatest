import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceMarketplaceMobileFilterComponent } from './marketplace-mobile-filter.component';

describe('MarketplaceMobileFilterComponent', () => {
  let component: MarketplaceMobileFilterComponent;
  let fixture: ComponentFixture<MarketplaceMobileFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceMobileFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceMobileFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
