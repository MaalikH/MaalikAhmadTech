import { Component, OnInit, Input } from '@angular/core';
import {PricingModel} from '../../models/pricing.model';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss', '../../../../app.component.scss']
})
export class PricingCardComponent implements OnInit {

  @Input() pricingInfo: PricingModel[];
  @Input() class: string;

  constructor() { }

  ngOnInit() {
  }

}
