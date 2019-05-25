import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPageComponent } from './components/pricing-page/pricing-page.component';
import {PricingPageRoutingModule} from './pricing-page-routing.module';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';
import {AnimateInModule} from 'ngx-animate-in';
import {SharedModule} from '../../shared/shared.module';
import { PricingIncludesComponent } from './components/pricing-includes/pricing-includes.component';

@NgModule({
  declarations: [PricingPageComponent, PricingCardComponent, PricingIncludesComponent],
  imports: [
    CommonModule,
    PricingPageRoutingModule,
    AnimateInModule,
    SharedModule
  ],
  exports: [
  ]
})
export class PricingPageModule { }
