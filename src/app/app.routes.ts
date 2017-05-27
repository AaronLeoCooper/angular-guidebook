import { Route, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

export const HomeRoute: Route = {
  path: '',
  component: HomeComponent
};

export const NavigationRoutes: Routes = [
  {
    path: 'intro',
    component: IntroComponent,
    data: {
      label: 'Intro'
    }
  }
];

export const AppRoutes: Routes = [
  HomeRoute,
  ...NavigationRoutes,
  {
    path: '**',
    redirectTo: ''
  }
];
