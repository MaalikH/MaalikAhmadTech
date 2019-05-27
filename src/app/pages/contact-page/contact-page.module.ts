import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import {SharedModule} from '../../shared/shared.module';
import {ContactPageRoutingModule} from './contact-page-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactPageComponent, ContactFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactPageRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  exports: [
    ContactPageComponent
  ]
})
export class ContactPageModule { }
