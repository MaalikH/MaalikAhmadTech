import { Component, OnInit } from '@angular/core';
import {Angulartics2} from 'angulartics2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../../../app.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private angulartics2: Angulartics2) { }

  ngOnInit() {
  }

  sendAnalytics(option: string) {
    this.angulartics2.eventTrack.next({
      action: 'Click',
      properties: {
        category: 'Home - Contact',
        label: option,
      }
    });
  }
}
