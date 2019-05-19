import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss', '../../../app.component.scss']
})
export class OurWorkComponent implements OnInit {
  activeTab = 'websites';

  constructor() { }

  ngOnInit() {
  }

  onTabClick(tab: string) {
    this.activeTab = tab;
  }
}
