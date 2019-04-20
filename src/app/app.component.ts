import {Component, OnInit} from '@angular/core';
import {ContentLoadedService} from './services/content-loaded.service';
import {NavbarService} from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MaalikAhmadTech';
  loaded = false;
  navbarOnHome = true;

  constructor(private contentLoaded: ContentLoadedService, private navbarService: NavbarService) { }

  ngOnInit(): void {
    this.contentLoaded.content.subscribe((loaded: boolean) => {
      this.loaded = loaded;
    });

    this.navbarService.navbarOnHome.subscribe((onHome: boolean) => {
      this.navbarOnHome = onHome;
      console.log('ON HOMNE ', onHome)
    });
  }
}
