import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {fromEvent, Observable, of, Subject, Subscription} from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {Router} from '@angular/router';
import {PricingServiceService} from '../../../shared/services/pricing-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', '../../../app.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation1', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate('1s 0s' )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),
    trigger('simpleFadeAnimation2', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate('1s .5s' )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),
    trigger('simpleFadeAnimation3', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate('1s 1s' ),
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),
    trigger('simpleFadeAnimation4', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate('1s 1.5s' )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),
    trigger('simpleFadeAnimation5', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate('1s 2.5s' )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),
  ]
})
export class ServicesComponent implements OnInit {


  constructor(private renderer: Renderer2, private router: Router, private pricingService: PricingServiceService ) {
  }

  ngOnInit(): void {
  }

  routeToPricing(service: string) {
    console.log('ROUTE TO PRICING');
    this.router.navigateByUrl('/pricing');
    this.pricingService.setService(service);
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible) {
      console.log('Add Class');
    }
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }

}
