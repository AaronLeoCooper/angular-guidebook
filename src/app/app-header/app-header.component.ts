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
}
