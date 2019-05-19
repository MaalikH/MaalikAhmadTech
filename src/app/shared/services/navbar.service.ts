import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbarSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  navbarOnHome: Observable<boolean> = this.navbarSubject.asObservable();

  constructor() { }

  setNavbar(isOnHome: boolean) {
    this.navbarSubject.next(isOnHome);
  }
}
