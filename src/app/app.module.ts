import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { AppRouterModule } from './app-router.module';

import { AppTitleService } from './services/app-title.service';
import { BreakpointService } from './services/breakpoint.service';

import { ClickOutsideDirective } from './directives/click-outside.directive';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { MdPageComponent } from './components/md-page/md-page.component';
import { GuideComponent } from './components/guide/guide.component';

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
    AppRouterModule,
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
