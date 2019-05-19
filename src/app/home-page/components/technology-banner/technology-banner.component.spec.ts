import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyBannerComponent } from './technology-banner.component';

describe('TechnologyBannerComponent', () => {
  let component: TechnologyBannerComponent;
  let fixture: ComponentFixture<TechnologyBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
