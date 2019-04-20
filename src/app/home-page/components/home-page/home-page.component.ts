import { Component, OnInit } from '@angular/core';
import {ContentLoadedService} from '../../../services/content-loaded.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private contentLoaded: ContentLoadedService) { }

  ngOnInit() {
    this.contentLoaded.onContentLoad(true);
  }

}
