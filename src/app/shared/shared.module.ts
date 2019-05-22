import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsitePreviewComponent} from './components/website-preview/website-preview.component';
import {PageHeaderComponent} from './components/page-header/page-header.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';

@NgModule({
  declarations: [WebsitePreviewComponent, PageHeaderComponent, FrequentlyAskedQuestionsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WebsitePreviewComponent,
    PageHeaderComponent,
    FrequentlyAskedQuestionsComponent,
    AngularFontAwesomeModule,
  ]
})
export class SharedModule { }
