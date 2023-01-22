import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalMarketComponent } from './capital-market.component';

describe('CapitalMarketComponent', () => {
  let component: CapitalMarketComponent;
  let fixture: ComponentFixture<CapitalMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapitalMarketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CapitalMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
