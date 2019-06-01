import { Component, OnInit } from '@angular/core';
import {ContactFormModel} from '../../models/contact-form.model';
import {AngularFirestoreDocument, AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

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

  constructor(private afs: AngularFirestore, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit() {
    const inquiriesCollection = this.afs.collection<ContactFormModel>('inquiries');
    inquiriesCollection.add(this.inquiry);
    this.router.navigate(['/home']);
  }

}
