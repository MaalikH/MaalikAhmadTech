import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss', '../../../../app.component.scss']
})
export class TemplatesComponent implements OnInit {

  activeTab = 'landing-page'

  constructor() { }

  ngOnInit() {
  }

 onTabClick(tab: string) {
    this.activeTab = tab;
 }

}
