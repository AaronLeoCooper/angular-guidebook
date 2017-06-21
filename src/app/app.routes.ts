import { Route, Routes } from '@angular/router';

import { MdPageComponent } from './md-page/md-page.component';
import { GuideComponent } from './guide/guide.component';

export const GuideRoutes: Routes = [
  {
    path: '',
    component: MdPageComponent,
    data: {
      mdTemplate: 'guide/index.md'
    }
  },
  {
    path: 'getting-started',
    component: MdPageComponent,
    data: {
      mdTemplate: 'guide/getting-started.md',
      title: 'Getting Started',
      label: 'Getting Started'
    }
  },
  {
    path: 'angular-cli',
    component: MdPageComponent,
    data: {
      mdTemplate: 'guide/angular-cli.md',
      title: 'Angular CLI',
      label: 'Angular CLI'
    }
  },
  {
    path: 'components',
    component: MdPageComponent,
    data: {
      mdTemplate: 'guide/components.md',
      title: 'Components',
      label: 'Components'
    }
  },
  {
    path: 'routing',
    component: MdPageComponent,
    data: {
      mdTemplate: 'guide/routing.md',
      title: 'Routing',
      label: 'Routing'
    }
  },
  {
    path: 'services',
    component: MdPageComponent,
    data: {
      mdTemplate: 'coming-soon.md',
      title: 'Services',
      label: 'Services'
    }
  },
  {
    path: 'animations',
    component: MdPageComponent,
    data: {
      mdTemplate: 'coming-soon.md',
      title: 'Animations',
      label: 'Animations'
    }
  }
];

export const AppRoutes: Routes = [
  {
    path: '',
    component: MdPageComponent,
    data: {
      mdTemplate: 'home.md'
    }
  },
  {
    path: 'guide',
    component: GuideComponent,
    data: {
      inTopNavigation: true,
      title: 'Guide',
      label: 'Guide'
    },
    children: GuideRoutes
  },
  {
    path: 'about',
    component: MdPageComponent,
    data: {
      inTopNavigation: true,
      mdTemplate: 'about.md',
      title: 'About',
      label: 'About'
    }
  },
  {
    path: 'faq',
    component: MdPageComponent,
    data: {
      inTopNavigation: true,
      mdTemplate: 'faq.md',
      title: 'FAQ',
      label: 'FAQ'
    }
  },
  {
    path: 'comparison',
    component: MdPageComponent,
    data: {
      inTopNavigation: true,
      mdTemplate: 'angular-comparison.md',
      title: 'Angular Comparison',
      label: 'Comparison'
    }
  },
  { path: '**', redirectTo: '' }
];

export const HomeRoute: Route = AppRoutes.find(({ path }) => path === '');

export const NavigationRoutes: Routes = AppRoutes.filter(({ data }) => data && data.inTopNavigation);
