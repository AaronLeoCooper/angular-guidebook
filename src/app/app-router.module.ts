import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app-router.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
