import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPageComponent } from './components/pricing-page/pricing-page.component';
import {PricingPageRoutingModule} from './pricing-page-routing.module';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';
import {AnimateInModule} from 'ngx-animate-in';
import {PageHeaderComponent} from '../page-header/page-header.component';

@NgModule({
  declarations: [PricingPageComponent, PricingCardComponent, PageHeaderComponent],
  imports: [
    CommonModule,
    PricingPageRoutingModule,
    AnimateInModule
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class PricingPageModule { }
