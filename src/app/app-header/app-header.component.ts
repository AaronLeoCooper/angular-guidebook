import { Component } from '@angular/core';

import { OnceEveryControl } from '../app.d';
import { onceEvery } from '../app.utils';
import { HomeRoute, NavigationRoutes } from '../app.routes';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  homeRoute = HomeRoute;
  navRoutes = NavigationRoutes;
  navIsOpen = false;

  public toggleNavOpen: (toggle?: boolean) => OnceEveryControl = onceEvery(
    (toggle?: boolean) => {
      this._toggleNavOpen(toggle);
    },
    100
  );

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

}
