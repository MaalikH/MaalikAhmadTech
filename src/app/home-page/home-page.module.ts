import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AnimateInModule } from 'ngx-animate-in';
import { InViewportModule } from 'ng-in-viewport';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomePageComponent } from './components/home-page.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { TechnologyBannerComponent } from './components/technology-banner/technology-banner.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ServicesComponent } from './components/services/services.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { WebsitesComponent } from './components/our-work/websites/websites.component';
import { GraphicDesignComponent } from './components/our-work/graphic-design/graphic-design.component';
import { BrandingComponent } from './components/our-work/branding/branding.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { WebDesignComponent } from './components/our-work/web-design/web-design.component';
import { WebsitePreviewComponent } from '../shared/components/website-preview/website-preview.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
 imports: [
   HomePageRoutingModule,
   AngularFontAwesomeModule,
   CommonModule,
   InViewportModule,
   AnimateInModule,
   SharedModule
 ],
  declarations: [HomePageComponent, JumbotronComponent, TechnologyBannerComponent, WhyChooseUsComponent, ServicesComponent, OurWorkComponent, WebsitesComponent, GraphicDesignComponent, BrandingComponent, ContactComponent, WebDesignComponent]
})
export class HomePageModule { }
