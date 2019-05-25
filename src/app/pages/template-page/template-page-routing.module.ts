import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatePageComponent } from './components/template-page/template-page.component';


const routes: Routes = [
  {
    path: '',
    component: TemplatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatePageRoutingModule { }
