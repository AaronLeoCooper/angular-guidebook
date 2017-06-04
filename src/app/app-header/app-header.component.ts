import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { BreakpointService } from '../breakpoint.service';
import { onceEvery, OnceEveryControl } from '../app.utils';
import { HomeRoute, NavigationRoutes } from '../app.routes';

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
  ],
  providers: [BreakpointService]
})
export class AppHeaderComponent {

  homeRoute = HomeRoute;
  navRoutes = NavigationRoutes;
  navIsOpen = false;
  navState = 'closed';

  public toggleNavOpen: (toggle?: boolean) => OnceEveryControl = onceEvery(
    (toggle?: boolean) => {
      this._toggleNavOpen(toggle);
      this._setNavState(toggle);
    },
    100
  );

  constructor () {
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
  }

  private _setNavState (isOpen: boolean): void {
    if (isOpen) {
      this.navState = 'open';
    } else {
      this.navState = 'closed';
    }
  }

}
