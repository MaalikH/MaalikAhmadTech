import { Component, OnInit } from '@angular/core';
import { ContentLoadedService } from '../../../shared/services/content-loaded.service';
import {NavbarService} from '../../../shared/services/navbar.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private contentLoaded: ContentLoadedService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.contentLoaded.onContentLoad(true);
    this.navbarService.setNavbar(true);
  }

}
