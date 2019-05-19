import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricingServiceService {

  private activeService: BehaviorSubject<string> = new BehaviorSubject<string>('websites');
  activePricingService: Observable<string> = this.activeService.asObservable();

  constructor() { }

  setService(service: string) {
    this.activeService.next(service);
  }
}
