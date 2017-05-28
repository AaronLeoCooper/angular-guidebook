import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { GuideRoutes } from './../app.routes';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent {

  sideNavRoutes = GuideRoutes.filter(route => route.path !== '');

}
