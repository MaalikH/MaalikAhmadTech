import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStepsComponent } from './template-steps.component';

describe('TemplateStepsComponent', () => {
  let component: TemplateStepsComponent;
  let fixture: ComponentFixture<TemplateStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
