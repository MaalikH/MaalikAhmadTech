import { Component, OnInit, Input } from '@angular/core';
import {Angulartics2} from 'angulartics2';

@Component({
  selector: 'app-website-preview',
  templateUrl: './website-preview.component.html',
  styleUrls: ['./website-preview.component.scss']
})
export class WebsitePreviewComponent implements OnInit {

  @Input() site: string;
  @Input() link?: string;

  constructor(private angulartics2: Angulartics2) { }

  ngOnInit() {
  }

  routeToLink() {
    if (this.link) {
      window.open(this.link);
      this.angulartics2.eventTrack.next({
        action: 'Click',
        properties: {
          category: 'Website Preview',
          label: 'External Link Opened',
        }
      })
    }
  }

}
