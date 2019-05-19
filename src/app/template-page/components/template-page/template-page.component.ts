import { Component, OnInit } from '@angular/core';
import {ContentLoadedService} from '../../../shared/services/content-loaded.service';

@Component({
  selector: 'app-template-page',
  templateUrl: './template-page.component.html',
  styleUrls: ['./template-page.component.scss', '../../../app.component.scss']
})
export class TemplatePageComponent implements OnInit {

  activeTab = 'landing-page';

  constructor(private contentLoaded: ContentLoadedService) { }

  ngOnInit() {
    this.contentLoaded.onContentLoad(true);
  }

  onTabClick(tab: string) {
    this.activeTab = tab;
  }
}
