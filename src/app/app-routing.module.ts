import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageModule} from './pages/home-page/home-page.module';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home-page/home-page.module#HomePageModule'
  },
  {
    path: 'pricing',
    loadChildren: './pages/pricing-page/pricing-page.module#PricingPageModule'
  },
  {
    path: 'templates',
    loadChildren: './pages/template-page/template-page.module#TemplatePageModule'
  },
  {
    path: 'contact',
    loadChildren: './pages/contact-page/contact-page.module#ContactPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
