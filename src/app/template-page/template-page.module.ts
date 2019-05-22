import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatePageComponent } from './components/template-page/template-page.component';
import {AnimateInModule} from 'ngx-animate-in';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TemplatePageRoutingModule} from './template-page-routing.module';
import {PricingPageModule} from '../pricing-page/pricing-page.module';
import {SharedModule} from '../shared/shared.module';
import { TemplateStepsComponent } from './components/template-steps/template-steps.component';

@NgModule({
  declarations: [TemplatePageComponent, TemplateStepsComponent],
  imports: [
    CommonModule,
    TemplatePageRoutingModule,
    AnimateInModule,
    NgbModule,
    PricingPageModule,
    SharedModule
  ]
})
export class TemplatePageModule { }
