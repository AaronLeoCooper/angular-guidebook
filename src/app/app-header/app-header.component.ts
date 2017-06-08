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
    ]),
    trigger('navDeviceState', [
      state('mobile', style({
        display: 'none',
        opacity: '0'
      })),
      state('mobileAbove', style({
        display: 'block',
        opacity: '1'
      })),
      transition('mobile <=> mobileAbove', animate('150ms'))
    ])
  ]
})
export class AppHeaderComponent implements OnDestroy {

  private homeRoute = HomeRoute;
  private navRoutes = NavigationRoutes;
  private breakpointSubscription: Subscription;

  public navIsOpen = false;
  public navState = 'closed';
  public navDeviceState: string;

  private _toggleNavOpen = onceEvery(
    (toggle?: boolean) => {
      if (typeof toggle !== 'undefined') {
        this.navIsOpen = toggle;
      } else {
        this.navIsOpen = !this.navIsOpen;
      }

      this._setNavState(this.navIsOpen);
    },
    100
  );

  constructor (private breakpointService: BreakpointService) {
    this.breakpointSubscription = breakpointService.subscribe(this.onWindowResize);
  }

  ngOnDestroy () {
    this.breakpointSubscription.unsubscribe();
  }

  public closeNav (): void {
    this._toggleNavOpen(false);
  }

  public toggleNavOpen (toggle?: boolean): void {
    this._toggleNavOpen(toggle);
  }

  private _setNavState (isOpen: boolean): void {
    if (isOpen) {
      this.navState = 'open';
    } else {
      this.navState = 'closed';
    }
  }

  private onWindowResize = (windowDimensions: WindowDimensions) => {
    const {
      width,
      height
    } = windowDimensions;

    if (width < 768) {
      this.toggleNavMobile('mobile');
    } else {
      this.toggleNavMobile('mobileAbove');
    }
  }

  private toggleNavMobile (deviceState: string): void {
    this.navDeviceState = deviceState;

    console.info('deviceState', deviceState)
  }

}
