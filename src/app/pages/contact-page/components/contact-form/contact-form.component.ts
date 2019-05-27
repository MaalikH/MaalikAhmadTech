import { Component, OnInit } from '@angular/core';
import {ContactFormModel} from '../../models/contact-form.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss', '../../../../app.component.scss']
})
export class ContactFormComponent implements OnInit {

  inquiry: ContactFormModel = {
    name: null,
    email: null,
    phone: null,
    description: '',
    type: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('INQUIRY', this.inquiry);
  }

}
