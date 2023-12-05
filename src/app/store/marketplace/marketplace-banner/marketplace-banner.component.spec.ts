import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceBnnerComponent } from './marketplace-banner.component';

describe('MarketplaceBnnerComponent', () => {
  let component: MarketplaceBnnerComponent;
  let fixture: ComponentFixture<MarketplaceBnnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceBnnerComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceBnnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
