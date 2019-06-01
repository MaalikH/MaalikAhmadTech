import {Component, OnInit} from '@angular/core';
import {ContentLoadedService} from './shared/services/content-loaded.service';
import {NavbarService} from './shared/services/navbar.service';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MaalikAhmadTech';
  loaded = false;
  navbarOnHome = true;

  constructor(private contentLoaded: ContentLoadedService, private navbarService: NavbarService, public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    angulartics2GoogleAnalytics.startTracking();
  }

  ngOnInit(): void {
    this.contentLoaded.content.subscribe((loaded: boolean) => {
      this.loaded = loaded;
    });

    this.navbarService.navbarOnHome.subscribe((onHome: boolean) => {
      this.navbarOnHome = onHome;
    });
  }
}
