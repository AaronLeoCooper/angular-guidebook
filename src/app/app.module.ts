import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { AppRoutes } from './app.routes';
import { AppTitleService } from './app-title.service';
import { BreakpointService } from './breakpoint.service';

import { ClickOutsideDirective } from './click-outside.directive';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MdPageComponent } from './md-page/md-page.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MdPageComponent,
    GuideComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [
    AppTitleService,
    BreakpointService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
