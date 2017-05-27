import { AngularGuidebookPage } from './app.po';

describe('angular-guidebook App', () => {
  let page: AngularGuidebookPage;

  beforeEach(() => {
    page = new AngularGuidebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
