import { Component, OnInit } from '@angular/core';
import {PricingModel} from '../../models/pricing.model';
import {ContentLoadedService} from '../../../services/content-loaded.service';
import {NavbarService} from '../../../services/navbar.service';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss', '../../../app.component.scss']
})
export class PricingPageComponent implements OnInit {

  webPricing: PricingModel[] = [
    {
      title: 'RESUME PAGE',
      price: 250,
      info: [
        'Perfect for Professionals & Portfolio Showcases',
        'Multiple Design Templates to Choose From',
        '7-14 day turnaround'
      ]
    },
    {
      title: 'LANDING PAGE',
      price: 400,
      info: [
        'Single Page Perfect for a Brief Intro to Your Business, Brand, or Program',
        'Showcase Pricing, Previous Work, and Collect Customer Data',
        '10-21 day turnaround'
      ]
    },
    {
      title: 'WEBSITE PRO',
      price: 700,
      info: [
        'Complete Website With Up to 6 Main Pages',
        'Choose from 5-10 design templates tailored towards your target audience',
        'Stock images included',
        '14-21 day turnaround'
      ]
    },
    {
      title: 'WEBSITE PRO',
      price: 1000,
      info: [
        'Complete Website With Up to 6 Main Pages',
        'Custom design & wireframes',
        'Stock images included',
        '21-28 day turnaround'
      ]
    },
  ];
  eCommercePricing: PricingModel[] = [
    {
      title: 'E-COMMERCE LIGHT',
      price: 500,
      info: [
        'Shopify Design Template',
        'Store Setup (Max 20 Products)',
        'Hosting through Shopify ($30/month)',
        '14-21 day turnaround',
      ]
    },
    {
      title: 'E-COMMERCE PREMIUM',
      price: 800,
      info: [
        'Custom WooCommerce Design & Setup',
        'No Monthly Payment',
        '1 Year Hosting & Domain Name',
        '21-30 day turnaround'
      ]
    },
  ];
  designPricing: PricingModel[] = [
    {
      title: 'BASIC LOGO',
      price: 60,
      info: [
        'Text Based Logo (Text & Basic Shapes Only)',
        '1 Design + 2 Free Edits',
      ]
    },
    {
      title: 'PREMIUM LOGO',
      price: 120,
      info: [
        'Custom Image Based Logos',
        '2 Design + 3 Free Edits',
      ]
    },
    {
      title: 'FLYERS',
      price: 50,
      info: [
        'Digital Flyers for Online Promotions',
        '1 Design + 2 Free Edits',
        'LOGO DESIGN NOT INCLUDED',
      ]
    },
    {
      title: 'ALBUM COVERS',
      price: 35,
      info: [
        'Front Cover Only',
        'Text and Image Manipulation (NO CUSTOM VECTOR ART)',
        '1 Design + 2 Free Edits'
      ]
    },
  ];
  brandingPricing: PricingModel[] = [
    {
      title: 'BRANDING LITE',
      price: 100,
      info: [
        'Basic Logo (Text Only)',
        '500 Business Cards (Custom Design)'
      ]
    },
    {
      title: 'BRANDING PREMIUM',
      price: 130,
      info: [
        'Basic Logo (Text Only)',
        '500 Business Cards (Custom Design)',
        '1 Flyer Design'
      ]
    },
    {
      title: 'BRANDING MAX',
      price: 200,
      info: [
        'Basic or Premium',
        '500 Business Cards (Custom Design)',
        '1 Flyer Design'
      ]
    },
  ];
  activeTab = 'websites';

  constructor(private contentLoaded: ContentLoadedService, private navbarService: NavbarService) {
    this.navbarService.setNavbar(false);
  }

  ngOnInit() {
    this.contentLoaded.onContentLoad(true);
  }

  onTabClick(tab: string) {
    this.activeTab = tab;
  }

}
