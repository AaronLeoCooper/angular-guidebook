import { Component, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';

import { BREAKPOINTS } from '../app.constants';
import { onceEvery, OnceEveryControl } from '../app.utils';
import { HomeRoute, NavigationRoutes } from '../app.routes';
import { BreakpointService, WindowDimensions } from '../breakpoint.service';

type NavState = 'open' | 'closed' | 'mobileAbove';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  animations: [
    trigger('navState', [
      state('closed', style({
        transform: 'translateY(0%)'
      })),
      state('open', style({
        transform: 'translateY(100%)'
      })),
      state('mobileAbove', style({
        transform: 'translateY(0%)'
      })),
      transition('closed <=> open', animate('250ms ease')),
      transition('* <=> mobileAbove', animate('0 none'))
    ]),
  ]
})
export class AppHeaderComponent implements OnDestroy {

  private breakpointSubscription: Subscription;

  public homeRoute = HomeRoute;
  public navRoutes = NavigationRoutes;
  public navIsOpen = false;
  public navState: NavState = 'mobileAbove';

  private _toggleNavOpen = onceEvery(
    (toggle?: boolean) => {
      if (typeof toggle !== 'undefined') {
        this.navIsOpen = toggle;
      } else {
        this.navIsOpen = !this.navIsOpen;
      }

      this._toggleMobileNavState(this.navIsOpen);
    },
    100
  );

  constructor (private breakpointService: BreakpointService) {
    const initialWindowDimensions = breakpointService.getWindowSize();
    this.onWindowResize(initialWindowDimensions);

    console.info(this.navState)

    this.breakpointSubscription = breakpointService.subscribe(this.onWindowResize);
  }

  ngOnDestroy () {
    this.breakpointSubscription.unsubscribe();
  }

  public setNavMobileAbove (): void {
    this.navIsOpen = false;
    this.navState = 'mobileAbove';
  }

  public closeNav (): void {
    this._toggleNavOpen(false);
  }

  public openNav (): void {
    this._toggleNavOpen(true);
  }

  public toggleNavOpen (toggle?: boolean): void {
    this._toggleNavOpen(toggle);
  }

  private _toggleMobileNavState (isOpen: boolean): void {
    if (isOpen) {
      this.navState = 'open';
    } else {
      this.navState = 'closed';
    }
  }

  private onWindowResize = (windowDimensions: WindowDimensions): void => {
    const {
      width,
      height
    } = windowDimensions;

    const wasMobileAbove = this.navState === 'mobileAbove';
    const isNowMobile = width <= BREAKPOINTS.MOBILE_MAX;

    const wasMobile = !wasMobileAbove;
    const isNowMobileAbove = !isNowMobile;

    if (wasMobileAbove && isNowMobile) {
      this.closeNav();
    }

    if (wasMobile && isNowMobileAbove) {
      this.setNavMobileAbove();
    }
  }

}
