import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template-steps',
  templateUrl: './template-steps.component.html',
  styleUrls: ['./template-steps.component.scss', '../../../../app.component.scss']
})
export class TemplateStepsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToContact() {
    this.router.navigate(['/contact']);
  }
}
