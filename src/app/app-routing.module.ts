import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageModule} from './home-page/home-page.module';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home-page/home-page.module#HomePageModule'
  },
  {
    path: 'pricing',
    loadChildren: './pricing-page/pricing-page.module#PricingPageModule'
  },
  {
    path: 'templates',
    loadChildren: './template-page/template-page.module#TemplatePageModule'
  },
  {
    path: 'contact',
    redirectTo: './contact-page/contact-page.module#ContactPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
