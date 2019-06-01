import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsitePreviewComponent} from './components/website-preview/website-preview.component';
import {PageHeaderComponent} from './components/page-header/page-header.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';
import {Angulartics2, Angulartics2Module} from 'angulartics2';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {GoogleAnalyticsService} from './services/google-analytics.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [WebsitePreviewComponent, PageHeaderComponent, FrequentlyAskedQuestionsComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [
    WebsitePreviewComponent,
    PageHeaderComponent,
    FrequentlyAskedQuestionsComponent,
    AngularFontAwesomeModule,
  ],
  providers: [
    GoogleAnalyticsService
  ]
})
export class SharedModule { }
