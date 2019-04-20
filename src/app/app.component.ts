import {Component, OnInit} from '@angular/core';
import {ContentLoadedService} from './services/content-loaded.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MaalikAhmadTech';
  loaded = false;

  constructor(private contentLoaded: ContentLoadedService) { }

  ngOnInit(): void {
    this.contentLoaded.content.subscribe((loaded: boolean) => {
      this.loaded = loaded;
    });
  }
}
