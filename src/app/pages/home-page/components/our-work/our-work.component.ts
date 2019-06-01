import { Component, OnInit } from '@angular/core';
import {Angulartics2} from 'angulartics2';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {
  activeTab = 'websites';

  constructor(private angulartics2: Angulartics2) { }

  ngOnInit() {
  }

  onTabClick(tab: string) {
    this.activeTab = tab;
    this.angulartics2.eventTrack.next({
      action: 'Click',
      properties: {
        category: 'Home - Work',
        label: `${tab} Clicked`,
      }
    });
  }
}
