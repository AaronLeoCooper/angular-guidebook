import { Component } from '@angular/core';

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

  private toggleIfNeeded (toggle: boolean): void {
    if (toggle !== this.navIsOpen) {
      this.navIsOpen = toggle;
    }
  }

  public toggleNavOpen (toggle?: boolean): void {
    if (typeof toggle !== 'undefined') {
      this.toggleIfNeeded(toggle);
    } else {
      this.toggleIfNeeded(!this.navIsOpen);
    }
  }

}
