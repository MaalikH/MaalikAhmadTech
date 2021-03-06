import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss', '../../../app.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle?: string;
  @Input() backgroundPath: string;

  constructor() { }

  ngOnInit() {
  }

}
