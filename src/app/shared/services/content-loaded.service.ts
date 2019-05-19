import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentLoadedService {

  private contentLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  content: Observable<boolean> = this.contentLoaded.asObservable();

  constructor() { }

  onContentLoad(loaded: boolean) {
    this.contentLoaded.next(loaded);
  }
}
