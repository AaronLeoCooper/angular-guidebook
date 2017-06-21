import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface TitleConfig {
  rootTitle?: string;
  separator?: string;
}

@Injectable()
export class AppTitleService {

  private pageTitle = '';
  private titleConfig: TitleConfig = {
    rootTitle: '',
    separator: '|'
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
      separator
    } = this.titleConfig;

    return this.pageTitle
      ? `${rootTitle} ${separator} ${this.pageTitle}`
      : rootTitle;
  }

  public setConfig (newConfig: TitleConfig): void {
    this.titleConfig = {
      ...this.titleConfig,
      ...newConfig
    };

    this.dispatchSetTitle();
  }

  public setPageTitle (pageTitle: string): void {
    this.pageTitle = pageTitle;

    this.dispatchSetTitle();
  }

  private dispatchSetTitle(): void {
    const fullTitle = this.getFullTitle();

    this.titleService.setTitle(fullTitle);
  }

}
