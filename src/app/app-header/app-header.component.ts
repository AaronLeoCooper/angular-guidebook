import { Component, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';

import { onceEvery, OnceEveryControl } from '../app.utils';
import { HomeRoute, NavigationRoutes } from '../app.routes';
import { BreakpointService, WindowDimensions } from '../breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  animations: [
    trigger('navState', [
      state('closed', style({
        display: 'none',
        transform: 'translateY(-100%)'
      })),
      state('open', style({
        display: 'block',
        transform: 'translateY(0%)'
      })),
      transition('closed <=> open', animate('250ms ease'))
    ])
  ]
})
export class AppHeaderComponent implements OnDestroy {

  private homeRoute = HomeRoute;
  private navRoutes = NavigationRoutes;
  private breakpointSubscription: Subscription;

  public navIsOpen = false;
  public navState = 'closed';

  public toggleNavOpen: (toggle?: boolean) => OnceEveryControl = onceEvery(
    (toggle?: boolean) => {
      this._toggleNavOpen(toggle);
    },
    100
  );

  constructor (private breakpointService: BreakpointService) {

    this.breakpointSubscription = breakpointService
      .getSubscription({
        mobile: { max: 599 },
        mobileAbove: { min: 600 }
      });

  }

  ngOnDestroy () {
    this.breakpointSubscription.unsubscribe();
  }

  public closeNav (): void {
    this.toggleNavOpen(false);
  }

  private _toggleNavOpen (toggle?: boolean): void {
    if (typeof toggle !== 'undefined') {
      this.navIsOpen = toggle;
    } else {
      this.navIsOpen = !this.navIsOpen;
    }

    this._setNavState(this.navIsOpen);
  }

  private _setNavState (isOpen: boolean): void {
    if (isOpen) {
      this.navState = 'open';
    } else {
      this.navState = 'closed';
    }
  }

}
