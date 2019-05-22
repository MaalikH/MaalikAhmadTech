import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  private activeTemplate: BehaviorSubject<string> = new BehaviorSubject<string>('landing-page');
  activeTemplateService: Observable<string> = this.activeTemplate.asObservable();

  constructor() { }

  changeTemplateCategory(category: string) {
    this.activeTemplate.next(category);
  }
}
