import { Component } from '@angular/core';

import { AppTitleService } from './services/app-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (private titleService: AppTitleService) {
    titleService.setConfig({
      rootTitle: 'Angular Guidebook',
      separator: '-'
    });
  }

}
