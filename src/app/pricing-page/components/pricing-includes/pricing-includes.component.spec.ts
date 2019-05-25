import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingIncludesComponent } from './pricing-includes.component';

describe('PricingIncludesComponent', () => {
  let component: PricingIncludesComponent;
  let fixture: ComponentFixture<PricingIncludesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingIncludesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
