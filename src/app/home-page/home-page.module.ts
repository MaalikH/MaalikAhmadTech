import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomePageComponent } from './components/home-page/home-page.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import { JumbotronComponent } from './components/home-page/jumbotron/jumbotron.component';
import { TechnologyBannerComponent } from './components/home-page/technology-banner/technology-banner.component';
import { WhyChooseUsComponent } from './components/home-page/why-choose-us/why-choose-us.component';
import { ServicesComponent } from './components/home-page/services/services.component';
import { OurWorkComponent } from './components/home-page/our-work/our-work.component';
import { WebsitesComponent } from './components/home-page/our-work/websites/websites.component';
import { GraphicDesignComponent } from './components/home-page/our-work/graphic-design/graphic-design.component';
import { BrandingComponent } from './components/home-page/our-work/branding/branding.component';
import { ContactComponent } from './components/home-page/contact/contact.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
 imports: [
   HomePageRoutingModule,
   AngularFontAwesomeModule,
   CommonModule
 ],
  declarations: [HomePageComponent, JumbotronComponent, TechnologyBannerComponent, WhyChooseUsComponent, ServicesComponent, OurWorkComponent, WebsitesComponent, GraphicDesignComponent, BrandingComponent, ContactComponent, FooterComponent]
})
export class HomePageModule { }
