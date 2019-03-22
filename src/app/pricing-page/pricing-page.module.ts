import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPageComponent } from './components/pricing-page/pricing-page.component';
import {PricingPageRoutingModule} from './pricing-page-routing.module';

@NgModule({
  declarations: [PricingPageComponent],
  imports: [
    CommonModule,
    PricingPageRoutingModule
  ]
})
export class PricingPageModule { }
