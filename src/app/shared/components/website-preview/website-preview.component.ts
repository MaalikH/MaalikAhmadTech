import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-website-preview',
  templateUrl: './website-preview.component.html',
  styleUrls: ['./website-preview.component.scss']
})
export class WebsitePreviewComponent implements OnInit {

  @Input() site: string;
  @Input() link?: string;

  constructor() { }

  ngOnInit() {
  }

  routeToLink() {
    if (this.link) {
      window.open(this.link);
    }
  }

}
