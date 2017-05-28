import { Route, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MdPageComponent } from './md-page/md-page.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'getting-started',
    component: MdPageComponent,
    data: {
      inTopNavigation: true,
      title: 'Getting Started',
      label: 'Getting Started'
    }
  },
  {
    path: 'about',
    component: MdPageComponent,
    data: {
      inTopNavigation: true,
      title: 'About',
      label: 'About'
    }
  },
  {
    path: 'faq',
    component: MdPageComponent,
    data: {
      inTopNavigation: true,
      title: 'FAQ',
      label: 'FAQ'
    }
  },
  { path: '**', redirectTo: '' }
];

export const HomeRoute: Route = AppRoutes.find(route => route.path === '');

export const NavigationRoutes: Routes = AppRoutes.filter(route => !!route.data && route.data.inTopNavigation);
