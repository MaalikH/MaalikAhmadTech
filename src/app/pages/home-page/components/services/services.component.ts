import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {fromEvent, Observable, of, Subject, Subscription} from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {Router} from '@angular/router';
import {PricingServiceService} from '../../../../shared/services/pricing-service.service';
import {Angulartics2} from 'angulartics2';
import {GoogleAnalyticsService} from '../../../../shared/services/google-analytics.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', '../../../../app.component.scss'],
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


  constructor(private renderer: Renderer2, private router: Router, private pricingService: PricingServiceService,
              private angulartics2: Angulartics2,  private googleAnalyticsService: GoogleAnalyticsService) {
  }

  ngOnInit(): void {
  }

  routeToPricing(service?: string) {
    console.log('CLICKED');
    if (service) {
      this.pricingService.setService(service);
      this.angulartics2.eventTrack.next({
        action: 'Click',
        properties: {
          category: 'Home - Services',
          label: service,
        }
      });
    } else {
      this.angulartics2.eventTrack.next({
        action: 'Click',
        properties: {
          category: 'Home - Services',
          label: 'Learn More',
        }
      });
    }
    this.router.navigateByUrl('/pricing');
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (visible) {
      console.log('Add Class');
    }
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }

}
