import { DynamicContentPage } from './app.po';

describe('dynamic-content App', () => {
  let page: DynamicContentPage;

  beforeEach(() => {
    page = new DynamicContentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
