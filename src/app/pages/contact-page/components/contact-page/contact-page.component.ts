import { Component, OnInit } from '@angular/core';
import {ContentLoadedService} from '../../../../shared/services/content-loaded.service';
import {NavbarService} from '../../../../shared/services/navbar.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss', '../../../../app.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contentLoaded: ContentLoadedService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.contentLoaded.onContentLoad(true);
    this.navbarService.setNavbar(true);
  }

}
