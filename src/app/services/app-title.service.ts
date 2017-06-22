import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface TitleConfig {
  rootTitle?: string;
  separator?: string;
  rootIsFirst?: boolean;
}

@Injectable()
export class AppTitleService {

  private pageTitle = '';
  private titleConfig: TitleConfig = {
    rootTitle: '',
    separator: '|',
    rootIsFirst: false
  };

  constructor(private titleService: Title) { }

  public getConfig (): TitleConfig {
    return this.titleConfig;
  }

  public getPageTitle (): string {
    return this.pageTitle;
  }

  public getFullTitle (): string {
    const {
      rootTitle,
      separator,
      rootIsFirst
    } = this.titleConfig;

    if (this.pageTitle) {
      return rootIsFirst
        ? `${rootTitle} ${separator} ${this.pageTitle}`
        : `${this.pageTitle} ${separator} ${rootTitle}`;
    }

    return rootTitle;
  }

  public setConfig (newConfig: TitleConfig): AppTitleService {
    this.titleConfig = {
      ...this.titleConfig,
      ...newConfig
    };

    this.dispatchSetTitle();

    return this;
  }

  public setPageTitle (pageTitle: string): AppTitleService {
    this.pageTitle = pageTitle;

    this.dispatchSetTitle();

    return this;
  }

  private dispatchSetTitle(): void {
    const fullTitle = this.getFullTitle();

    this.titleService.setTitle(fullTitle);
  }

}
