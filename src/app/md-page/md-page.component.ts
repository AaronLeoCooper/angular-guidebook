import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { getMdPath } from './md-page.helpers';

@Component({
  selector: 'app-md-page',
  templateUrl: './md-page.component.html',
  styleUrls: ['./md-page.component.scss']
})
export class MdPageComponent implements OnInit {

  mdPath: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const { route } = this;
    const { path } = route.snapshot.routeConfig;

    this.mdPath = getMdPath(path);
  }

}
