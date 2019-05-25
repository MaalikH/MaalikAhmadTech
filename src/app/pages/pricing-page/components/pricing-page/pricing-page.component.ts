import { Component, OnInit } from '@angular/core';
import {PricingModel} from '../../models/pricing.model';
import {NavbarService} from '../../../../shared/services/navbar.service';
import {PricingServiceService} from '../../../../shared/services/pricing-service.service';
import {ContentLoadedService} from '../../../../shared/services/content-loaded.service';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss', '../../../../app.component.scss']
})
export class PricingPageComponent implements OnInit {

  webPricing: PricingModel[] = [
    {
      title: 'RESUME PAGE',
      price: 250,
      info: [
        'Professionals & Portfolio Showcase',
        '3+ Resume Template Choices',
      ]
    },
    {
      title: 'LANDING PAGE',
      price: 450,
      info: [
        'One Page Introduction to Your Business, Brand, or Program',
        'Provide Info and Contact Information',
        'Showcase Pricing, Previous Work, and Collect Customer Data',
      ]
    },
    {
      title: 'WEBSITE PRO',
      price: 750,
      info: [
        'Complete Website With Up to 6 Main Pages',
        'Variety of Design Templates to Choose From',
        'Stock Images Included',
      ]
    },
    {
      title: 'WEBSITE ELITE',
      price: 40,
      info: [
        'Complete Website With Up to 6 Main Pages',
        'Custom Design & Wireframes',
        'Database & Server Setup',
        'Stock Images Included',
      ],
      hourly: true
    },
  ];
  eCommercePricing: PricingModel[] = [
    {
      title: 'E-COMMERCE LIGHT',
      price: 550,
      info: [
        'Shopify Design',
        'Store Setup (Max 15 Products)',
        'Hosting by Shopify ($30/month)',
        '14-21 day turnaround',
      ]
    },
    {
      title: 'E-COMMERCE PREMIUM',
      price: 850,
      info: [
        'Custom WooCommerce Design & Setup',
        'Hosting Included (No Monthly Payment)',
        '21-28 day turnaround'
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

  constructor(private contentLoaded: ContentLoadedService, private navbarService: NavbarService,
              private pricingService: PricingServiceService) {
    this.navbarService.setNavbar(true);
  }

  ngOnInit() {
    this.contentLoaded.onContentLoad(true);
    this.pricingService.activePricingService.subscribe((data: string) => {
      this.activeTab = data;
      console.log('ACTIVE TAB', data);
    });
  }

  onTabClick(tab: string) {
    this.pricingService.setService(tab);
  }

}
